import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";

export default function AboutSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <SectionHeading
        title="このイベントについて"
        subtitle="主催者からのごあいさつ"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card rounded-3xl shadow-[0_10px_30px_rgba(61,64,91,0.05)] p-6 md:p-10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative space-y-4 text-foreground/80 text-sm md:text-base leading-[1.8]">
          <p>
            「何かを作ってみたけど、見せる場所がない」
            <br />
            「クリエイティブな活動に興味はあるけど、きっかけがない」
          </p>
          <p>
            そんな想いを持つ学生や地域の皆さまのために、このイベントは生まれました。
          </p>
          <p>
            イラスト、小説、音楽、プログラミング、電子工作、ハンドメイド——
            ジャンルは問いません。「何かを創り出したい」という気持ちがあれば、
            誰でも参加できます。
          </p>
          <p>
            大学と地域の垣根を越え、クリエイターと来場者がゆるやかにつながる。
            そんな温かい交差点になれたらと思っています。
          </p>
          <p className="text-foreground font-heading font-bold pt-2 flex items-center gap-2">
            ——
            <img
              src="https://media.base44.com/images/public/6a2d6121afe8b6ce6b14bee5/ff59ae339_06405CC7-7223-413A-984A-695DE66878FF.jpg"
              alt="ふらっと！"
              className="h-16 w-auto inline-block"
            />
            実行委員会
          </p>
        </div>
      </motion.div>
    </section>
  );
}