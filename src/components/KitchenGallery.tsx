import SafeImage from "./SafeImage";
import { SectionTitle } from "./Motifs";
// Replace files in public/images/kitchen/. Spans create the asymmetric collage.
const shots = [
  { src: "cooking.webp", alt: "চুলায় রান্নার মুহূর্ত", span: "col-span-2 row-span-2" },
  { src: "ingredients.webp", alt: "তাজা মসলা ও উপকরণ", span: "" },
  { src: "kitchen.webp", alt: "পরিচ্ছন্ন ঘরোয়া রান্নাঘর", span: "" },
  { src: "preparation.webp", alt: "হাতে পিঠা বানানোর প্রস্তুতি", span: "row-span-2" },
  { src: "finished-1.webp", alt: "রান্না শেষে সাজানো খাবার", span: "" },
  { src: "finished-2.webp", alt: "পরিবেশনের জন্য প্রস্তুত খাবার", span: "col-span-2" },
];
export default function KitchenGallery() {
  return (
    <section id="gallery" className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionTitle title="রান্নার কিছু মুহূর্ত" />
        <div className="grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] md:grid-cols-4 md:gap-4">
          {shots.map((s) => (
            <div key={s.src} className={`overflow-hidden rounded-2xl ring-1 ring-gold/40 ${s.span}`}>
              <SafeImage src={`/images/kitchen/${s.src}`} alt={s.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
