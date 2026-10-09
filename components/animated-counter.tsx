type AnimatedCounterProps = {
  value: number
  prefix?: string
  suffix?: string
  className?: string
}

/** A formatted stat. (It used to count up with a spring; plain text is faster and reads the same.) */
export default function AnimatedCounter({ value, prefix = "", suffix = "", className }: AnimatedCounterProps) {
  return (
    <span className={className}>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  )
}
