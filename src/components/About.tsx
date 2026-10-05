import SafeImage from "./SafeImage";
import { Divider, Lotus } from "./Motifs";
export default function About() {
  return (
    <section id="about" className="py-14 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-5 lg:gap-14 lg:px-8">
        <div className="relative lg:col-span-2">
          <SafeImage src="/images/kitchen/about.webp" alt="ঘরোয়া রান্নাঘরে খাবার তৈরির দৃশ্য" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg shadow-ink/15 lg:-rotate-2" />
          <Lotus className="absolute -bottom-5 -right-3 size-16 rounded-full bg-paper p-2 text-terra" />
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">আমাদের কথা</h2>
          <div className="nakshi-border my-4 w-32" />
          <p className="max-w-xl text-lg leading-loose text-ink/85">ঘরের মানুষের জন্য যেমন যত্ন নিয়ে রান্না করা হয়, সেই ভালোবাসা ও যত্ন নিয়েই নোয়াশাল রসুই ঘরের খাবার তৈরি। দেশীয় ঐতিহ্যের খাবার থেকে শুরু করে শাহী আয়োজন, পিঠাপুলি, মিষ্টান্ন ও নানা স্বাদের খাবারে আমরা গুরুত্ব দিই স্বাদ, সতেজতা ও পরিষ্কার-পরিচ্ছন্নতাকে।</p>
        </div>
      </div>
      <Divider className="mt-14" />
    </section>
  );
}
