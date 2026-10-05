import { site } from "../data/site";
import SafeImage from "./SafeImage";
import { Bird, Divider, Fish, MessageIcon, Paddy, WhatsAppIcon } from "./Motifs";
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <Paddy className="absolute -left-2 top-24 hidden h-56 text-leaf/40 lg:block" />
      <Fish className="absolute bottom-24 left-1/2 hidden w-24 text-gold/60 lg:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-8 pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-16">
        <div className="hero-in order-2 text-center lg:order-1 lg:text-left">
          <h1 className="text-4xl font-bold text-terra sm:text-5xl lg:text-6xl">{site.name}</h1>
          <p className="mt-3 font-display text-2xl text-leaf sm:text-3xl">{site.tagline}</p>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/80 lg:mx-0">{site.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-terra px-7 py-3.5 text-lg text-paper transition-colors hover:bg-terra/90"><WhatsAppIcon className="size-6" />WhatsApp-এ যোগাযোগ করুন</a>
            <a href={site.messenger} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-leaf px-7 py-3 text-lg text-leaf transition-colors hover:bg-leaf hover:text-paper"><MessageIcon className="size-6" />মেসেজ করুন</a>
          </div>
        </div>
        <div className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-lg">
          <div className="relative">
            <div className="absolute -inset-3 rounded-t-full rounded-b-3xl border-2 border-dashed border-gold/70" aria-hidden="true" />
            <SafeImage eager src="/images/hero/hero-main.webp" alt="নোয়াশাল রসুই ঘরের সাজানো ঘরোয়া খাবার" className="relative aspect-[4/5] w-full rounded-t-full rounded-b-3xl object-cover shadow-xl shadow-ink/15" />
            <Bird className="absolute -right-3 -top-2 w-16 rotate-6 text-terra sm:-right-8 sm:w-20" />
          </div>
        </div>
      </div>
      <Divider className="pb-6" />
    </section>
  );
}
