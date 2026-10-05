import { site } from "../data/site";
import { Divider } from "./Motifs";
export default function Footer() {
  return (
    <footer className="bg-ink pb-8 text-paper">
      <div className="nakshi-border" />
      <div className="mx-auto max-w-4xl px-4 pt-10 text-center">
        <Divider className="mb-6 [&>span]:text-gold" />
        <p className="font-display text-2xl font-bold">{site.name}</p>
        <p className="mt-1 text-paper/80">{site.tagline}</p>
        <p className="mt-4 flex justify-center gap-6">
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">WhatsApp</a>
          <a href={site.messenger} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">Messenger</a>
        </p>
        <p className="mt-5 flex flex-wrap justify-center gap-x-4 text-sm text-gold">{site.hashtags.map((h) => <span key={h}>{h}</span>)}</p>
      </div>
    </footer>
  );
}
