interface QuoteBlockProps {
  verse: string;
  translation: string;
  source: string;
  chapter?: string;
}

export function QuoteBlock({
  verse,
  translation,
  source,
  chapter,
}: QuoteBlockProps) {
  return (
    <blockquote className="relative border-l-4 border-primary/60 pl-6 py-4 my-6 bg-primary/5 rounded-r-lg">
      <div className="absolute -left-2 top-4 w-4 h-4 rounded-full bg-primary/40" />
      <p className="font-display text-primary text-lg italic leading-relaxed mb-2">
        {verse}
      </p>
      <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3">
        &ldquo;{translation}&rdquo;
      </p>
      <footer className="font-body text-xs text-primary/70 font-medium uppercase tracking-wide">
        — {source}
        {chapter && (
          <span className="text-muted-foreground normal-case tracking-normal font-normal">
            , {chapter}
          </span>
        )}
      </footer>
    </blockquote>
  );
}
