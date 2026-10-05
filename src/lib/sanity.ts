import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityFood, SanityAnnouncement } from "../types/food";

// Both values are public (read-only, published-content only) — safe to expose in frontend code.
// Set them in .env.local for development and in Vercel's Project Settings → Environment Variables for production.
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = import.meta.env.VITE_SANITY_DATASET as string | undefined;

export const sanityConfigured = Boolean(projectId && dataset);

export const sanityClient = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true, // fast, cached reads — fine for a public showcase site
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

/** Builds an optimized image URL from a Sanity image reference. */
export function urlFor(source: unknown) {
  if (!builder || !source) return "";
  return builder.image(source as any).width(1200).auto("format").url();
}

const foodsQuery = `*[_type == "foodItem"] | order(coalesce(displayOrder, 999999) asc, _createdAt asc){
  _id, name, description, category, preorder, minOrderQty, image
}`;

const announcementsQuery = `*[_type == "announcement" && active == true] | order(_createdAt desc){
  _id, text, _createdAt
}`;

export async function fetchFoods(): Promise<SanityFood[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch(foodsQuery);
  } catch (err) {
    console.error("Sanity food fetch failed:", err);
    return [];
  }
}

export async function fetchAnnouncements(): Promise<SanityAnnouncement[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch(announcementsQuery);
  } catch (err) {
    console.error("Sanity announcement fetch failed:", err);
    return [];
  }
}
