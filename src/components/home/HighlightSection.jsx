import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import { BookOpen, Sparkles, Palette } from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "多様なジャンル",
    description: "イラスト本、技術書、手作り雑貨、体験展示など、枠にとらわれない作品が集まります。",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Sparkles,
    title: "ふらっと立ち寄れる",
    description: "「即売会は初めて」という方も安心。お散歩がてら、気になるブースを覗いてみてください。",
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: BookOpen,
    title: "直接の交流",
    description: "作品を作った学生やクリエイターと直接お話しできます。感想や質問など、お気軽にどうぞ。",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
];

export default function HighlightSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeading
        title="どんなイベント？"
        subtitle="分野を超えた多彩な作品が、あなたを待っています"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="bg-card rounded-3xl p-8 shadow-[0_10px_30px_rgba(61,64,91,0.05)] hover:shadow-[0_15px_40px_rgba(61,64,91,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center mb-6`}>
              <item.icon className={`w-9 h-9 ${item.iconColor}`} />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}