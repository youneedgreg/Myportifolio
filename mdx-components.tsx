import type { MDXComponents } from "mdx/types"

// Styles for blog post bodies (content/blog/*.mdx). These match the
// typography the posts used before they moved to MDX.
const components: MDXComponents = {
  h2: (props) => <h2 className="pt-4 text-2xl font-semibold tracking-tight sm:text-3xl" {...props} />,
  h3: (props) => <h3 className="pt-2 text-xl font-semibold tracking-tight" {...props} />,
  p: (props) => <p className="leading-relaxed text-muted-foreground" {...props} />,
  ul: (props) => <ul className="space-y-3 pl-5" {...props} />,
  ol: (props) => <ol className="list-decimal space-y-3 pl-5 marker:text-primary" {...props} />,
  li: (props) => <li className="list-disc leading-relaxed text-muted-foreground marker:text-primary" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-primary pl-5 text-lg leading-relaxed text-foreground italic [&>p]:text-foreground"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-primary underline underline-offset-4 transition-colors hover:text-foreground"
      {...(props.href?.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  hr: () => <hr className="border-border" />,
  pre: (props) => (
    <pre className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm leading-relaxed" {...props} />
  ),
  // Inline code only — fenced blocks are styled by rehype-pretty-code via `pre`.
  code: (props) =>
    "data-language" in props ? (
      <code {...props} />
    ) : (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.875em] text-foreground" {...props} />
    ),
  table: (props) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => <th className="border-b border-border px-3 py-2 text-left font-semibold" {...props} />,
  td: (props) => <td className="border-b border-border px-3 py-2 text-muted-foreground" {...props} />,
}

export function useMDXComponents(): MDXComponents {
  return components
}
