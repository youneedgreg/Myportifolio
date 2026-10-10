import { defineConfig, devices } from "@playwright/test"

const PORT = Number(process.env.E2E_PORT ?? 3460)

/**
 * Cross-browser smoke tests: every engine the site supports (Chromium, Firefox,
 * WebKit for Safari), at desktop and phone sizes. Run `npm run test:browsers`
 * after `npm run build`; it starts `next start` itself unless a server is
 * already listening on the port.
 */
export default defineConfig({
  testDir: "e2e",
  timeout: 45_000,
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : [["list"]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "retain-on-failure",
  },
  webServer: {
    command: `npx next start -p ${PORT}`,
    port: PORT,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
  projects: [
    // Locally Chromium uses the installed Chrome; CI installs Playwright's build.
    { name: "chrome", use: { ...devices["Desktop Chrome"], ...(process.env.CI ? {} : { channel: "chrome" }) } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "safari", use: { ...devices["Desktop Safari"] } },
    { name: "chrome-phone", use: { ...devices["Pixel 7"], ...(process.env.CI ? {} : { channel: "chrome" }) } },
    { name: "safari-phone", use: { ...devices["iPhone 15"] } },
  ],
})
