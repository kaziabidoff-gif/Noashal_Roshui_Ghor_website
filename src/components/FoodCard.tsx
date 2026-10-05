import type { Food } from "../types/food";
import SafeImage from "./SafeImage";
import { Lotus } from "./Motifs";
const ratios = ["aspect-[4/5]", "aspect-square", "aspect-[5/6]", "aspect-[4/5]"];
const Label = () => <span className="inline-block rounded-full border border-gold/70 px-3 py-0.5 text-sm text-[#8a6a1f]">প্রি-অর্ডার প্রয়োজন</span>;
const MinOrder = ({ qty, tone = "light" }: { qty: string; tone?: "light" | "dark" }) =>
  <p className={`text-sm ${tone === "dark" ? "text-paper/80" : "text-ink/65"}`}>ন্যূনতম অর্ডার: {qty}</p>;
export default function FoodCard({ food, index }: { food: Food; index: number }) {
  return (
    <article tabIndex={0} className="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-white/50 ring-1 ring-gold/40 focus-visible:ring-2 focus-visible:ring-terra">
      <div className={`relative overflow-hidden ${ratios[index % ratios.length]}`}>
        <SafeImage src={food.image} alt={`${food.name} — ${food.description}`} className="h-full w-full object-cover transition-transform duration-300 md:group-hover:scale-105 md:group-focus-within:scale-105" />
        {/* Desktop hover / focus overlay */}
        <div className="absolute inset-0 hidden flex-col justify-end gap-2 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent p-5 text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:flex">
          <Lotus className="size-7 text-gold" />
          <h3 className="text-xl font-bold">{food.name}</h3>
          <p className="text-base text-paper/90">{food.description}</p>
          {food.minOrderQty && <MinOrder qty={food.minOrderQty} tone="dark" />}
          {food.preorder && <span className="text-sm text-gold">প্রি-অর্ডার প্রয়োজন</span>}
        </div>
      </div>
      {/* Mobile: always visible */}
      <div className="space-y-2 p-4 md:hidden">
        <h3 className="flex items-center gap-2 text-xl font-bold text-terra"><Lotus className="size-6 shrink-0 text-gold" />{food.name}</h3>
        <p className="text-base text-ink/80">{food.description}</p>
        {food.minOrderQty && <MinOrder qty={food.minOrderQty} />}
        {food.preorder && <Label />}
      </div>
    </article>
  );
}
