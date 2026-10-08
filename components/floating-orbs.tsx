/** Soft cyan glow behind the hero. Static gradients: nothing repaints per frame. */
export default function FloatingOrbs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "radial-gradient(40rem 28rem at 85% 0%, color-mix(in oklch, var(--primary) 18%, transparent), transparent 70%), radial-gradient(34rem 26rem at 0% 55%, color-mix(in oklch, var(--primary) 9%, transparent), transparent 70%)",
      }}
    />
  )
}
