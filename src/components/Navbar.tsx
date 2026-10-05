import { useState } from "react";
import { navLinks, site } from "../data/site";
import { Lotus, WhatsAppIcon } from "./Motifs";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur">
      <nav aria-label="প্রধান মেনু" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold text-terra">
          <img src="/images/logo.jpg" alt="নোয়াশাল রসুই ঘর লোগো" className="size-10 rounded-full object-cover" />{site.name}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => <li key={l.href}><a href={l.href} className="text-lg text-ink transition-colors hover:text-terra">{l.label}</a></li>)}
        </ul>
        <a href={site.whatsapp} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-terra px-5 py-2 text-paper transition-colors hover:bg-terra/90 md:inline-flex"><WhatsAppIcon />WhatsApp</a>
        <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"} onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-lg text-ink md:hidden">
          <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-gold/30 px-4 pb-4 md:hidden">
          <ul>{navLinks.map((l) => <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-ink">{l.label}</a></li>)}</ul>
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-full bg-terra py-3 text-paper"><WhatsAppIcon />WhatsApp-এ যোগাযোগ করুন</a>
        </div>
      )}
      <div className="nakshi-border" />
    </header>
  );
}
