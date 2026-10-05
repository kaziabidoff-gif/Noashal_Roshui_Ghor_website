import { site } from "../data/site";
import { Lotus, MessageIcon, WhatsAppIcon } from "./Motifs";
export default function Contact() {
  return (
    <section id="contact" className="px-4 py-14 lg:py-20">
      <div className="relative mx-auto max-w-3xl rounded-3xl border-2 border-dashed border-gold/70 bg-paper p-8 text-center sm:p-12">
        <Lotus className="absolute left-1/2 top-0 size-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper px-2 text-terra" />
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">যোগাযোগ করুন</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink/80">কোনো খাবার সম্পর্কে জানতে, প্রি-অর্ডার করতে অথবা বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-terra px-7 py-3.5 text-lg text-paper transition-colors hover:bg-terra/90"><WhatsAppIcon className="size-6" />WhatsApp-এ যোগাযোগ করুন</a>
          <a href={site.messenger} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-leaf px-7 py-3 text-lg text-leaf transition-colors hover:bg-leaf hover:text-paper"><MessageIcon className="size-6" />মেসেজ করুন</a>
        </div>
      </div>
    </section>
  );
}
