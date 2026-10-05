# নোয়াশাল রসুই ঘর

`npm install` → `npm run dev` → `npm run build`

- Contact links: `src/data/site.ts`
- Hero: `public/images/hero/hero-main.webp` · About: `public/images/kitchen/about.webp`
- Gallery: `public/images/kitchen/{cooking,ingredients,kitchen,preparation,finished-1,finished-2}.webp`
- Logo: `public/images/logo.jpg`

Missing images show a Nakshi placeholder automatically.

## Food items & announcements: now managed in Sanity

The food list and the announcement section are no longer edited by hand in `src/data/foods.ts`.
They're pulled live from [Sanity](https://www.sanity.io) — a free content dashboard the client
can use directly, with no code and no redeploy needed. `src/data/foods.ts` still exists as a
**fallback**: if Sanity has no items yet (or isn't configured), the site shows that static sample
list instead of looking empty.

### One-time setup (you do this once)

1. **Create a free Sanity account** at [sanity.io](https://www.sanity.io) (GitHub or Google login is fine).
2. **Initialize the project** — from the `studio/` folder:
   ```bash
   cd studio
   npm install
   npx sanity init
   ```
   Choose "Create new project", name it (e.g. "Noashal Roshui Ghor"), dataset name `production`,
   and say no to the output path question (we already have `sanity.config.ts`). This prints a
   **Project ID** — copy it.
3. **Paste the Project ID** into two places:
   - `studio/sanity.cli.ts` and `studio/sanity.config.ts` (replace `REPLACE_WITH_PROJECT_ID`)
4. **Deploy the Studio** (gives the client a real web address to log into):
   ```bash
   npx sanity deploy
   ```
   Pick a studio hostname, e.g. `noashal-roshui-ghor` → the dashboard will live at
   `https://noashal-roshui-ghor.sanity.studio`.
5. **Invite the client** so they can log in themselves: go to
   [sanity.io/manage](https://sanity.io/manage) → your project → **Members** → **Invite**,
   enter their email, role **Editor**. They'll get an email to set up login (Google/email).
   Free plan covers up to 3 members.
6. **Connect the live site to Sanity** — set these two environment variables:
   - Locally: copy `.env.example` to `.env.local` and fill in your Project ID.
   - On Vercel: Project → Settings → Environment Variables, add
     `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` (`production`), then redeploy.

Both values are public, read-only identifiers (not secrets) — safe to have in frontend code.

### Day-to-day: adding a food item (for the client)

1. Go to the Studio link (e.g. `https://noashal-roshui-ghor.sanity.studio`) and log in.
2. Click **খাবার** (Food) → **+ Create**.
3. Fill in: name, short description, upload a photo, pick a category, toggle
   "প্রি-অর্ডার প্রয়োজন" if it needs advance notice, and optionally type a
   "ন্যূনতম অর্ডার" (minimum order) like "৫ পিস".
4. Click **Publish** (top right). It appears on the live site within seconds — no developer
   needed, no rebuild.

### Day-to-day: posting an announcement

1. In the Studio, click **ঘোষণা** (Announcement) → **+ Create**.
2. Type the message (e.g. "ঈদ উপলক্ষে বিশেষ আয়োজন — এখনই প্রি-অর্ডার করুন!").
3. Publish. It appears as a highlighted section between the hero and "আমাদের কথা".
4. To take it down later, open it and turn off "ওয়েবসাইটে দেখাবে?" (or delete it) — no code change.

### Notes for future development work

- `src/lib/sanity.ts` holds the client, the image-URL builder, and the two GROQ queries.
- `src/types/food.ts` has both the UI-facing `Food` type and the raw `SanityFood`/`SanityAnnouncement`
  shapes returned by the queries.
- Photos uploaded through Sanity are served from Sanity's own CDN — you don't need to resize them
  by hand first (though keeping uploads under a few MB is still good practice).
- `public/images/foods/` and the food entries in `src/data/foods.ts` are now just the offline
  fallback/sample data; they're not what the live site shows once real items exist in Sanity.
