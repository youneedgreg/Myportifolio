import { expect, test, type Page } from "@playwright/test"

const PAGES = [
  "/",
  "/projects",
  "/projects/oklaw-law-firm-management",
  "/blog",
  "/blog/the-default-is-the-control-not-the-flag",
  "/about",
  "/journey",
  "/now",
  "/uses",
  "/lab",
  "/cv",
]

// Vercel Analytics and Speed Insights only exist on Vercel; locally they 404.
const IGNORED = [/_vercel\//, /Vercel (Web Analytics|Speed Insights)/, /MIME type/]

/** Navigate and wait until React has hydrated, so clicks reach real handlers. */
async function open(page: Page, path: string) {
  const res = await page.goto(path)
  await page.locator("html[data-hydrated]").waitFor({ state: "attached" })
  return res
}

function trackConsoleErrors(page: Page) {
  const errors: string[] = []
  page.on("console", (msg) => {
    const where = msg.location().url ?? ""
    if (msg.type() === "error" && !IGNORED.some((re) => re.test(msg.text()) || re.test(where))) {
      errors.push(`${msg.text()} (${where})`)
    }
  })
  page.on("pageerror", (err) => errors.push(err.message))
  return errors
}

for (const path of PAGES) {
  test(`${path} renders cleanly`, async ({ page }, info) => {
    const errors = trackConsoleErrors(page)
    const res = await page.goto(path, { waitUntil: "networkidle" })
    expect(res?.status()).toBe(200)
    await expect(page.locator("h1")).toHaveCount(1)
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow, "no horizontal scrolling").toBeLessThanOrEqual(1)
    expect(errors).toEqual([])
    // Full-page shots of very long pages exceed WebKit's 32,767px limit; fall back to the viewport.
    const height = await page.evaluate(() => document.documentElement.scrollHeight)
    await info.attach("page", { body: await page.screenshot({ fullPage: height < 16_000 }), contentType: "image/png" })
  })
}

test("unknown routes get the custom 404", async ({ page }) => {
  const res = await page.goto("/definitely-not-here")
  expect(res?.status()).toBe(404)
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/Nothing lives here/)
})

for (const scheme of ["light", "dark"] as const) {
  test(`theme follows a ${scheme} device`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: scheme })
    await page.goto("/")
    await expect(page.locator("html")).toHaveClass(scheme === "dark" ? /dark/ : /^(?!.*dark).*$/)
  })
}

test.describe("keyboard", () => {
  test.skip(({ isMobile }) => isMobile, "Physical keyboard flows are desktop-only")

  test("? opens shortcuts, Escape closes and restores focus", async ({ page }) => {
    await open(page, "/about")
    await page.keyboard.press("Shift+Slash")
    await expect(page.getByRole("dialog", { name: "Keyboard shortcuts" })).toBeVisible()
    await page.keyboard.press("Escape")
    await expect(page.getByRole("dialog")).toHaveCount(0)
  })

  test("search opens from the header and hands focus back", async ({ page }) => {
    await open(page, "/about")
    const trigger = page.getByRole("button", { name: "Open command palette" })
    // Keyboard users reach the button with Tab and press Enter. (Safari doesn't
    // focus buttons on mouse click, so a click would leave nothing to return to.)
    await trigger.focus()
    await page.keyboard.press("Enter")
    await expect(page.getByRole("dialog")).toBeVisible()
    await expect(page.getByPlaceholder(/Type a command/)).toBeFocused()
    await page.keyboard.press("Escape")
    await expect(page.getByRole("dialog")).toHaveCount(0)
    await expect(trigger).toBeFocused()
  })

  test("g then j goes to the journey", async ({ page }) => {
    await open(page, "/")
    await page.locator("body").click({ position: { x: 5, y: 300 } })
    await page.keyboard.press("g")
    await page.keyboard.press("j")
    await expect(page).toHaveURL(/\/journey$/)
  })
})

test("phone menu lists every page", async ({ page, isMobile }) => {
  test.skip(!isMobile, "The menu button only exists on phones")
  await open(page, "/")
  await page.getByRole("button", { name: "Open menu" }).click()
  const menu = page.getByRole("dialog")
  for (const name of ["Work", "Writing", "About", "Journey", "Lab"]) {
    await expect(menu.getByRole("link", { name, exact: false }).first()).toBeVisible()
  }
})

test("work filters narrow the list", async ({ page }) => {
  await open(page, "/projects")
  const count = page.getByText(/^\d+ of \d+ projects$/)
  const all = await count.textContent()
  await page.getByRole("button", { name: /^Client work/ }).click()
  await expect(count).not.toHaveText(all!)
  await page.getByRole("button", { name: /^Clear filters/ }).click()
  await expect(count).toHaveText(all!)
})

test.describe("contact form", () => {
  test("shows success inline", async ({ page }) => {
    await page.route("/api/contact", (route) => route.fulfill({ json: { ok: true } }))
    await open(page, "/#contact")
    await page.getByLabel("Name").fill("Test")
    await page.getByLabel("Email").fill("test@example.com")
    await page.getByLabel("What are you building?").fill("Just checking the form.")
    await page.getByRole("button", { name: "Send message" }).click()
    await expect(page.getByText(/it's in my inbox/)).toBeVisible()
  })

  test("offers the email address when sending fails", async ({ page }) => {
    await page.route("/api/contact", (route) =>
      route.fulfill({ status: 502, json: { error: "Couldn't send your message right now." } }),
    )
    await open(page, "/#contact")
    await page.getByLabel("Name").fill("Test")
    await page.getByLabel("Email").fill("test@example.com")
    await page.getByLabel("What are you building?").fill("Just checking the form.")
    await page.getByRole("button", { name: "Send message" }).click()
    await expect(page.getByText(/email me directly at/)).toBeVisible()
  })
})
