/**
 * Reading progress bar driven by a CSS scroll timeline — no JavaScript runs on
 * scroll. Browsers without scroll-driven animations simply don't show it.
 */
export default function ScrollProgress() {
  return <div className="scroll-progress" aria-hidden="true" />
}
