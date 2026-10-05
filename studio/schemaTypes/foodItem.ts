import { defineField, defineType } from "sanity";

export default defineType({
  name: "foodItem",
  title: "খাবার",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "খাবারের নাম",
      type: "string",
      validation: (Rule) => Rule.required().error("নাম দেওয়া আবশ্যক"),
    }),
    defineField({
      name: "description",
      title: "সংক্ষিপ্ত বিবরণ",
      type: "text",
      rows: 3,
      description: "এক বা দুই লাইনে খাবারটির স্বাদ বা উপকরণের বর্ণনা।",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "ছবি",
      type: "image",
      options: { hotspot: true },
      description: "ছবি যত পরিষ্কার ও উজ্জ্বল হবে, খাবারটি তত আকর্ষণীয় দেখাবে।",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "ক্যাটাগরি",
      type: "string",
      options: {
        list: [
          { title: "দেশীয় খাবার", value: "দেশীয় খাবার" },
          { title: "শাহী খাবার", value: "শাহী খাবার" },
          { title: "চাইনিজ ফুড", value: "চাইনিজ ফুড" },
          { title: "ফ্রোজেন স্ন্যাকস", value: "ফ্রোজেন স্ন্যাকস" },
          { title: "পিঠাপুলি", value: "পিঠাপুলি" },
          { title: "মিষ্টান্ন", value: "মিষ্টান্ন" },
          { title: "হালুয়া", value: "হালুয়া" },
          { title: "আচার", value: "আচার" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required().error("একটি ক্যাটাগরি বেছে নিন"),
    }),
    defineField({
      name: "preorder",
      title: "প্রি-অর্ডার প্রয়োজন?",
      type: "boolean",
      description: "চালু করলে কার্ডে 'প্রি-অর্ডার প্রয়োজন' লেখা দেখাবে।",
      initialValue: false,
    }),
    defineField({
      name: "minOrderQty",
      title: "ন্যূনতম অর্ডার (ঐচ্ছিক)",
      type: "string",
      description: "যেমন: ৫ পিস, ১ কেজি থেকে। খালি রাখলে কার্ডে কিছু দেখাবে না।",
    }),
    defineField({
      name: "displayOrder",
      title: "সাজানোর ক্রম (ঐচ্ছিক)",
      type: "number",
      description: "ছোট সংখ্যা আগে দেখাবে। খালি রাখলে যোগ করার ক্রম অনুযায়ী দেখাবে।",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "image" },
  },
});
