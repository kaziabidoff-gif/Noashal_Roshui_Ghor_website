import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "noashal-roshui-ghor",
  title: "নোয়াশাল রসুই ঘর — কন্টেন্ট ম্যানেজার",

  // Same values as sanity.cli.ts — set once via `npx sanity init` and they'll match.
  projectId: "REPLACE_WITH_PROJECT_ID",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("কন্টেন্ট")
          .items([
            S.listItem().title("খাবার").child(S.documentTypeList("foodItem").title("খাবার")),
            S.listItem().title("ঘোষণা").child(S.documentTypeList("announcement").title("ঘোষণা")),
          ]),
    }),
    visionTool(), // a "GROQ playground" tab — safe to ignore day-to-day, useful for debugging
  ],

  schema: {
    types: schemaTypes,
  },
});
