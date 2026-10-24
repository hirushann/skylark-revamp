import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] ${
        dark ? "text-sky" : "text-accent"
      }`}
    >
      <span className={`h-px w-6 ${dark ? "bg-sky" : "bg-accent"}`} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`reveal max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-balance sm:text-[2.6rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-[17px] leading-relaxed text-pretty ${dark ? "text-white/60" : "text-muted"}`}>
          {body}
        </p>
      )}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
}) {
  const styles = {
    primary: "bg-ink text-white hover:bg-accent",
    secondary: "border border-line bg-white text-ink hover:border-ink/30",
    light: "bg-sky text-night hover:bg-white",
  }[variant];
  const className = `group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors ${styles}`;
  const inner = (
    <>
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
