import { defineField, defineType } from "sanity";

export default defineType({
  name: "announcement",
  title: "ঘোষণা",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "ঘোষণার লেখা",
      type: "text",
      rows: 3,
      description: "যেমন: 'ঈদ উপলক্ষে বিশেষ আয়োজন — এখনই প্রি-অর্ডার করুন!'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "active",
      title: "ওয়েবসাইটে দেখাবে?",
      type: "boolean",
      description: "বন্ধ করলে ঘোষণাটি সাথে সাথে সাইট থেকে সরে যাবে, মুছতে হবে না।",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "text", active: "active" },
    prepare({ title, active }) {
      return { title, subtitle: active ? "চালু আছে" : "বন্ধ আছে" };
    },
  },
});
