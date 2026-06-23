import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const visitorFAQ = [
  {
    q: "入場料はかかりますか？",
    a: "いいえ！入場無料です。お気軽にふらっとお越しください！",
  },
  {
    q: "子ども連れでも大丈夫ですか？",
    a: "もちろん大歓迎です！全年齢向けイベントですので、ご家族でお楽しみいただけます。ベビーカーでのご来場も可能です。",
  },
  {
    q: "駐車場はありますか？",
    a: "会場近くの駐車場情報は、開催が近くなりましたらお知らせします。公共交通機関のご利用もご検討ください。",
  },
  {
    q: "再入場は可能ですか？",
    a: "はい、可能です！お昼を食べに行ったりしても、また戻ってこられますよ。",
  },
  {
    q: "同人即売会に行ったことがないのですが…",
    a: "大歓迎です！初めての方でも楽しめるように、学園祭のような明るいお祭り雰囲気を心がけています。気になるブースをのぞいて、クリエイターさんとおしゃべりして、楽しんでくださいね！",
  },
];

const circleFAQ = [
  {
    q: "本を作ったことがなくても参加できますか？",
    a: "もちろんです！イラスト1枚のポストカードでも、技術のデモでも、デジタル作品でも何でもOK。「何かを創ったから見てほしい！」その気持ちだけで十分です！",
  },
  {
    q: "山形大学の学生じゃなくても参加できますか？",
    a: "はい！山大生以外の方も大歓迎です。一緒にイベントを盛り上げてくれる方なら、どなたでもお待ちしています！",
  },
  {
    q: "搬入方法はどうすればいいですか？",
    a: "当日手搬入が基本となります。詳しい搬入ルールや時間帯は、参加決定後にご案内します。",
  },
  {
    q: "頒布物は無料配布でもいいですか？",
    a: "はい、もちろんです！無料配布も有料頒布もどちらもOKです。",
  },
];

const fadeUp = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="inline-block bg-flatto-blue/20 text-flatto-blue-dark font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            FAQ
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-flatto-text">
            よくある質問 🤔
          </h2>
          <p className="mt-3 text-flatto-text-light font-heading text-base md:text-lg">
            わからないことがあったらチェック！
          </p>
        </motion.div>

        {/* Visitor FAQ */}
        <motion.div {...fadeUp} className="mb-10">
          <h3 className="font-heading font-bold text-lg text-flatto-text mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-flatto-green/20 rounded-lg flex items-center justify-center text-sm">🙋</span>
            一般参加の方
          </h3>
          <Accordion type="single" collapsible className="space-y-2">
            {visitorFAQ.map((item, i) => (
              <AccordionItem
                key={i}
                value={`visitor-${i}`}
                className="bg-white rounded-2xl border-2 border-flatto-green/15 px-5 overflow-hidden"
              >
                <AccordionTrigger className="font-heading font-medium text-flatto-text text-left text-sm md:text-base py-4 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-flatto-text-light leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Circle FAQ */}
        <motion.div {...fadeUp}>
          <h3 className="font-heading font-bold text-lg text-flatto-text mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-flatto-orange/15 rounded-lg flex items-center justify-center text-sm">✏️</span>
            サークル参加の方
          </h3>
          <Accordion type="single" collapsible className="space-y-2">
            {circleFAQ.map((item, i) => (
              <AccordionItem
                key={i}
                value={`circle-${i}`}
                className="bg-white rounded-2xl border-2 border-flatto-orange/15 px-5 overflow-hidden"
              >
                <AccordionTrigger className="font-heading font-medium text-flatto-text text-left text-sm md:text-base py-4 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-flatto-text-light leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}