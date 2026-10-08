/**
 * A paragraph that lights up word by word as it scrolls through the viewport.
 * Pure CSS (a view timeline per paragraph, one animation range per word), so it
 * costs nothing on the main thread; browsers without scroll-driven animations
 * show the text fully lit.
 */
export default function ScrollReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ")
  // Reveal across the middle of the paragraph's trip through the viewport.
  const from = 10
  const to = 55
  const step = (to - from) / words.length

  return (
    <p className={`scroll-reveal ${className ?? ""}`}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ animationRange: `cover ${(from + i * step).toFixed(2)}% cover ${(from + (i + 1) * step).toFixed(2)}%` }}
        >
          {word}{" "}
        </span>
      ))}
    </p>
  )
}
