import { useEffect, useState } from "react";
import { fetchAnnouncements } from "../lib/sanity";
import type { SanityAnnouncement } from "../types/food";
import { Lotus } from "./Motifs";

/**
 * Shows active announcements from Sanity (e.g. "ঈদ স্পেশাল মেনু", holiday notices).
 * Renders nothing at all when there are none, so an idle site shows no empty section.
 */
export default function Announcement() {
  const [items, setItems] = useState<SanityAnnouncement[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetchAnnouncements().then((data) => { if (!cancelled) setItems(data); });
    return () => { cancelled = true; };
  }, []);

  if (items.length === 0) return null;

  return (
    <section aria-label="ঘোষণা" className="px-4 py-10 lg:py-14">
      <div className="mx-auto max-w-2xl text-center">
        <Lotus className="mx-auto mb-2 size-8 text-gold" />
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">ঘোষণা</h2>
        <div className="mt-6 space-y-4">
          {items.map((a) => (
            <div key={a._id} className="rounded-2xl border-2 border-terra/70 bg-white/40 px-6 py-5 sm:px-8 sm:py-6">
              <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
