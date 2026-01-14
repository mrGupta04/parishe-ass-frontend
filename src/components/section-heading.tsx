type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow ? <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</span> : null}
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
      {subtitle ? <p className="text-sm text-slate-600 sm:text-base">{subtitle}</p> : null}
    </div>
  );
}
