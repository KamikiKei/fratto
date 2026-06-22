import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/shared/SectionHeading";
import PageDecoration from "../components/shared/PageDecoration";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const visitorFAQ = [
  {
    q: "入場料はかかりますか？",
    a: "いいえ、入場は無料です。どなたでもお気軽にお越しください。",
  },
  {
    q: "子ども連れで行っても大丈夫ですか？",
    a: "もちろんです！お子さまも一緒に楽しんでいただけるイベントです。ただし、会場内でのお子さまの安全管理は保護者の方にお願いしております。",
  },
  {
    q: "駐車場はありますか？",
    a: "大学構内の駐車場をご利用いただける予定ですが、台数に限りがあります。なるべく公共交通機関でのご来場をお願いいたします。",
  },
  {
    q: "途中退場・再入場はできますか？",
    a: "はい、開催時間内であれば自由に出入りできます。",
  },
  {
    q: "購入にはどんな支払い方法が使えますか？",
    a: "各サークルによって異なりますが、基本的に現金でのやり取りが主流です。小銭をご用意いただくとスムーズです。",
  },
  {
    q: "写真撮影は可能ですか？",
    a: "会場全体の雰囲気の撮影は可能ですが、各サークルの作品やブースの撮影は出展者の許可を取ってからお願いします。",
  },
];

const exhibitorFAQ = [
  {
    q: "本や作品を作ったことがなくても参加できますか？",
    a: "もちろんです！手描きイラストのポストカードや、プログラミング作品のデモ展示など、形態は問いません。「見せたい」「共有したい」という気持ちがあれば大歓迎です。",
  },
  {
    q: "山形大学の学生でなくても参加できますか？",
    a: "はい、どなたでも参加可能です。他大学の学生さん、社会人の方、地域のクリエイターの方も歓迎しています。",
  },
  {
    q: "一人でも参加できますか？",
    a: "はい、お一人でのご参加も大丈夫です。実際に一人サークルで参加される方は多いです。",
  },
  {
    q: "搬入・搬出はどうすればいいですか？",
    a: "会場へ直接お持ち込みください。搬入時間や搬入口の詳細は、参加決定後にメールでご案内します。車での搬入も可能な予定です。",
  },
  {
    q: "二次創作作品は頒布できますか？",
    a: "各権利者の定めるガイドラインに沿った二次創作物は頒布可能です。ただし、R18作品の頒布はできません。",
  },
  {
    q: "参加費はいくらですか？",
    a: "学生は無料、一般の方は有料（金額調整中）を予定しています。詳細が決まり次第お知らせします。",
  },
  {
    q: "複数スペースの申し込みは可能ですか？",
    a: "原則として1サークル1スペースとさせていただきます。ご事情がある場合はお問い合わせください。",
  },
];

export default function FAQ() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      <PageDecoration />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          よくある質問
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          初めての方も安心。よく寄せられるご質問にお答えします。
        </p>
      </motion.div>

      {/* Visitor FAQ */}
      <SectionHeading title="一般参加者の方" align="left" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card rounded-3xl shadow-[0_10px_30px_rgba(61,64,91,0.05)] p-4 md:p-6 mb-12"
      >
        <Accordion type="single" collapsible className="w-full">
          {visitorFAQ.map((item, i) => (
            <AccordionItem key={i} value={`visitor-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-sm md:text-base font-heading font-medium hover:no-underline py-4">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* Exhibitor FAQ */}
      <SectionHeading title="サークル参加者の方" align="left" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card rounded-3xl shadow-[0_10px_30px_rgba(61,64,91,0.05)] p-4 md:p-6 mb-12"
      >
        <Accordion type="single" collapsible className="w-full">
          {exhibitorFAQ.map((item, i) => (
            <AccordionItem key={i} value={`exhibitor-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-sm md:text-base font-heading font-medium hover:no-underline py-4">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* CTA to contact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-secondary rounded-3xl p-8 text-center"
      >
        <p className="font-heading font-bold text-lg mb-2">
          解決しない質問がありますか？
        </p>
        <p className="text-muted-foreground text-sm mb-4">
          お気軽にお問い合わせください
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-bold text-sm hover:bg-primary/90 transition-all duration-300"
        >
          お問い合わせページへ
        </a>
      </motion.div>
    </div>
  );
}