import { categories } from "../data/foods";
interface Props { active: string; onChange: (c: string) => void; }
export default function FoodFilter({ active, onChange }: Props) {
  return (
    <div role="group" aria-label="খাবারের ধরন" className="-mx-4 mb-8 flex snap-x gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible">
      {categories.map((c) => (
        <button key={c} type="button" aria-pressed={active === c} onClick={() => onChange(c)}
          className={`min-h-11 shrink-0 snap-start whitespace-nowrap rounded-full border px-5 text-base transition-colors ${active === c ? "border-terra bg-terra text-paper" : "border-gold/60 bg-paper text-ink hover:border-terra hover:text-terra"}`}>{c}</button>
      ))}
    </div>
  );
}
