interface SectionHeadingProps {
  sanskrit?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  decorative?: boolean;
}

export function SectionHeading({
  sanskrit,
  title,
  subtitle,
  centered = false,
  decorative = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      {sanskrit && (
        <p className="font-display text-primary/60 text-sm tracking-widest uppercase mb-2 italic">
          {sanskrit}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-3">
        {title}
      </h2>
      {decorative && (
        <div
          className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}
        >
          <div className="h-px w-12 bg-primary/40" />
          <div className="w-2 h-2 rounded-full bg-primary/60" />
          <div className="h-px w-12 bg-primary/40" />
        </div>
      )}
      {subtitle && (
        <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
