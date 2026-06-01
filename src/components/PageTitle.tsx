import Reveal from "./Reveal";

export default function PageTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 text-center">
      <Reveal>
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-ink/80">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08} y={20}>
        <h1 className="font-display text-[2.4rem] font-black uppercase leading-[0.95] tracking-tight sm:text-[3rem]">
          {title}
        </h1>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mx-auto mt-2 max-w-xl text-sm text-ink/80">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
