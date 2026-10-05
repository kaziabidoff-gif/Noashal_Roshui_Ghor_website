import type { ReactNode } from "react";
type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, "aria-hidden": true };

export const Lotus = ({ className = "" }: P) => (
  <svg viewBox="0 0 64 64" className={className} {...base}>
    {[-60, -30, 0, 30, 60].map((a) => <path key={a} d="M32 50C24 40 24 24 32 12c8 12 8 28 0 38z" transform={`rotate(${a} 32 50)`} />)}
    <circle cx="32" cy="54" r="2" fill="currentColor" /><path d="M14 58h36" />
  </svg>
);
export const Fish = ({ className = "" }: P) => (
  <svg viewBox="0 0 64 32" className={className} {...base}>
    <path d="M4 16C16 2 38 2 50 16 38 30 16 30 4 16z" /><path d="M50 16l10-8v16z" />
    <circle cx="14" cy="14" r="1.5" fill="currentColor" /><path d="M22 8q6 8 0 16M30 7q6 9 0 18M38 8q5 8 0 16" />
  </svg>
);
export const Paddy = ({ className = "" }: P) => (
  <svg viewBox="0 0 40 80" className={className} {...base}>
    <path d="M20 78C20 50 22 30 30 8" />
    {[16, 26, 36, 46].map((y, i) => (
      <g key={y}><ellipse cx={22 + (3 - i) * 2} cy={y - 6} rx="3" ry="6" transform={`rotate(-30 ${22 + (3 - i) * 2} ${y - 6})`} /><ellipse cx={30 - i * 2} cy={y - 2} rx="3" ry="6" transform={`rotate(35 ${30 - i * 2} ${y - 2})`} /></g>
    ))}
  </svg>
);
export const Bird = ({ className = "" }: P) => (
  <svg viewBox="0 0 64 48" className={className} {...base}>
    <path d="M6 30c10-2 16-14 30-14 8 0 12 6 12 12 0 8-8 14-18 14-10 0-16-6-24-12z" /><path d="M48 24l10-4-6 8" />
    <circle cx="42" cy="22" r="1.5" fill="currentColor" /><path d="M24 44l-2 4M32 44l-2 4M12 24c4 2 8 4 14 4" />
  </svg>
);
/** Lotus flanked by vine lines and dots — used between sections */
export const Divider = ({ className = "" }: P) => (
  <div className={`flex items-center justify-center gap-3 text-gold ${className}`} role="presentation">
    <span className="h-px w-16 bg-current sm:w-32" /><span className="size-1.5 rounded-full bg-current" />
    <Lotus className="size-9 text-terra" />
    <span className="size-1.5 rounded-full bg-current" /><span className="h-px w-16 bg-current sm:w-32" />
  </div>
);
export const SectionTitle = ({ title, sub }: { title: string; sub?: ReactNode }) => (
  <div className="mx-auto mb-10 max-w-2xl text-center">
    <Lotus className="mx-auto mb-2 size-8 text-gold" />
    <h2 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
    {sub && <p className="mt-3 text-lg text-ink/75">{sub}</p>}
  </div>
);
export const WhatsAppIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 13.9c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z" /></svg>
);
export const MessageIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /></svg>
);
