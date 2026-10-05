import { site } from "../data/site";
import { MessageIcon, WhatsAppIcon } from "./Motifs";
export default function FloatingContact() {
  return (
    <>
      {/* Mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex border-t-2 border-gold/60 bg-paper md:hidden">
        <a href={site.whatsapp} target="_blank" rel="noreferrer" className="flex min-h-14 flex-1 items-center justify-center gap-2 bg-terra text-lg text-paper"><WhatsAppIcon />WhatsApp</a>
        <a href={site.messenger} target="_blank" rel="noreferrer" className="flex min-h-14 flex-1 items-center justify-center gap-2 text-lg text-leaf"><MessageIcon />মেসেজ করুন</a>
      </div>
      {/* Desktop floating buttons */}
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 md:flex">
        <a href={site.messenger} target="_blank" rel="noreferrer" aria-label="মেসেজ করুন" className="grid size-12 place-items-center rounded-full bg-leaf text-paper shadow-lg transition-transform hover:scale-105"><MessageIcon className="size-6" /></a>
        <a href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp-এ যোগাযোগ করুন" className="grid size-14 place-items-center rounded-full bg-terra text-paper shadow-lg transition-transform hover:scale-105"><WhatsAppIcon className="size-7" /></a>
      </div>
    </>
  );
}
