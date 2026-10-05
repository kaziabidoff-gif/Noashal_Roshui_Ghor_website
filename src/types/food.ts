export type Category = "দেশীয় খাবার"|"শাহী খাবার"|"চাইনিজ ফুড"|"ফ্রোজেন স্ন্যাকস"|"পিঠাপুলি"|"মিষ্টান্ন"|"হালুয়া"|"আচার";

/** Shape used by UI components (FoodCard, FoodSection). Built from either static or Sanity data. */
export interface Food {
  id: string;
  name: string;
  description: string;
  image: string;
  category: Category;
  preorder: boolean;
  /** Free-text Bangla minimum-order note, e.g. "৫ পিস" or "১ কেজি থেকে". Optional — omit the line on the card if not set. */
  minOrderQty?: string;
}

/** Raw shape returned by the Sanity GROQ food query, before the image is resolved to a URL. */
export interface SanityFood {
  _id: string;
  name: string;
  description: string;
  category: Category;
  preorder?: boolean;
  minOrderQty?: string;
  image?: unknown;
}

export interface SanityAnnouncement {
  _id: string;
  text: string;
  _createdAt: string;
}
