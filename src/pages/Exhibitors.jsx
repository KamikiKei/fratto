import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/shared/SectionHeading";
import CTAButton from "../components/shared/CTAButton";
import PageDecoration from "../components/shared/PageDecoration";
import {
  ExternalLink,
  FileText,
  Lightbulb,
} from "lucide-react";

const steps = [
  {
    num: "1",
    title: "募集要項PDFを確認",
    description: "参加資格・費用・ルールなど、詳細はPDFにまとまっています。まずこちらをご一読ください。",
  },
  {
    num: "2",
    title: "申請フォームから応募",
    description: "必要事項を記入し、サークルカットをアップロードして送信。これで完了です！",
  },
  {
    num: "3",
    title: "確認メールを受け取る",
    description: "実行委員会から確認メールをお送りします。配置決定後、チケット情報をお届けします。",
  },
];

export default function Exhibitors() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      <PageDecoration />

      {/* Page hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 pt-4"
      >
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
          サークル参加の方へ
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          あなたの作品を多くの人に届けるチャンス。
          <br />
          初めてでも安心して参加できる環境を整えています。
        </p>
        <div className="mt-4 flex justify-center gap-1">
          <span className="w-8 h-1 rounded-full bg-accent" />
          <span className="w-3 h-1 rounded-full bg-primary" />
          <span className="w-2 h-1 rounded-full bg-accent/40" />
        </div>
      </motion.div>

      {/* Beginner tip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[hsl(45,80%,92%)] rounded-3xl p-6 md:p-8 mb-12 flex gap-4 items-start"
      >
        <div className="w-10 h-10 rounded-2xl bg-[hsl(45,80%,65%)]/30 flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-5 h-5 text-[hsl(45,70%,40%)]" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-foreground mb-1">はじめての方へ</h3>
          <p className="text-sm text-foreground/70 leading-relaxed">
            本や作品を作ったことがなくても大丈夫！手描きのイラストを数枚展示するだけでも立派な参加です。
            「出してみたい」という気持ちがあれば、ぜひお気軽にご応募ください。
            わからないことはお問い合わせフォームからいつでもご質問いただけます。
          </p>
        </div>
      </motion.div>

      {/* Step-by-step guide */}
      <SectionHeading
        title="参加までの流れ"
        subtitle="かんたん3ステップで申請完了"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="bg-card rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(61,64,91,0.05)] relative"
          >
            <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold text-lg mb-4">
              {step.num}
            </div>
            <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.description}
            </p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 text-muted-foreground/30 text-2xl">
                →
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* PDF download */}
      <SectionHeading title="募集要項" subtitle="参加に関する詳細はこちらのPDFをご確認ください" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card rounded-3xl shadow-[0_10px_30px_rgba(61,64,91,0.05)] p-8 md:p-10 text-center mb-12"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-heading text-lg font-bold mb-2">
          サークル参加のご案内・規約（PDF）
        </h3>
        <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto leading-relaxed">
          参加資格、スペース料金、頒布規定、サークルカット仕様など、参加に必要な情報をすべてまとめています。
        </p>
        <CTAButton
          href="https://media.base44.com/files/public/6a2d6121afe8b6ce6b14bee5/a0bf58c3b_circle_guidelines-v2.pdf"
          variant="primary"
          size="lg"
        >
          <FileText className="w-5 h-5" />
          募集要項PDFを開く
        </CTAButton>
      </motion.div>

      {/* Apply CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 text-center"
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          出展申請はこちら
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm leading-relaxed">
          申請フォームから必要事項を記入し、サークルカットをアップロードしてください。
          フォーム送信後、実行委員会から確認メールをお送りします。
        </p>
        <CTAButton href="#" variant="accent" size="lg">
          <ExternalLink className="w-5 h-5" />
          サークル参加申請フォーム
        </CTAButton>
        <p className="text-xs text-muted-foreground mt-4">
          ※外部フォーム（Googleフォーム）へ移動します
        </p>
      </motion.div>
    </div>
  );
}