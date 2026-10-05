import { useEffect, useState } from "react";
import { foods as staticFoods } from "../data/foods";
import { fetchFoods, urlFor } from "../lib/sanity";
import type { Food } from "../types/food";
import FoodCard from "./FoodCard";
import FoodFilter from "./FoodFilter";
import { SectionTitle } from "./Motifs";

export default function FoodSection() {
  const [active, setActive] = useState("সবগুলো");
  // Starts with the bundled sample list so the section is never empty while Sanity loads (or if it isn't set up yet).
  const [foods, setFoods] = useState<Food[]>(staticFoods);

  useEffect(() => {
    let cancelled = false;
    fetchFoods().then((items) => {
      if (cancelled || items.length === 0) return; // keep the static fallback if Sanity has nothing yet
      setFoods(
        items.map((it) => ({
          id: it._id,
          name: it.name,
          description: it.description,
          image: urlFor(it.image),
          category: it.category,
          preorder: Boolean(it.preorder),
          minOrderQty: it.minOrderQty,
        })),
      );
    });
    return () => { cancelled = true; };
  }, []);

  const list = active === "সবগুলো" ? foods : foods.filter((f) => f.category === active);

  return (
    <section id="foods" className="bg-[#efe4cb]/60 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle title="আমাদের খাবার" sub="দেশীয় স্বাদ থেকে নানা রকম আয়োজন—আপনার পছন্দের খাবারটি খুঁজে নিন।" />
        <FoodFilter active={active} onChange={setActive} />
        <div key={active} className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
          {list.map((f, i) => <FoodCard key={f.id} food={f} index={i} />)}
        </div>
      </div>
    </section>
  );
}
