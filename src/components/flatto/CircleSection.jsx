import React from 'react';
import { motion } from "framer-motion";
import { PenTool, FileText, ImageIcon, ExternalLink, Download } from "lucide-react";
import guidelinesPdf from "@/assets/guidelines.pdf";

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeFpoobAjtVrELwJltq94MqN5QaP20SoWsIwn57hLo9jdNwQw/viewform?usp=dialog";
const CIRCLE_CUT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd1JBFBPV5XvWSUXjwkCI8Yyw9HS2NvQN8jv16Dh4YsEY84TA/viewform";

const fadeUp = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function CircleSection() {
  return (
    <section id="circles" className="py-16 md:py-24 bg-flatto-green/5">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="inline-block bg-flatto-orange/15 text-flatto-orange-dark font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            FOR CIRCLES
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-flatto-text">
            サークル参加の方へ ✏️
          </h2>
          <p className="mt-3 text-flatto-text-light font-heading text-base md:text-lg">
            一緒にお祭りを盛り上げよう！
          </p>
        </motion.div>

        {/* Deadline notice */}
        <motion.div {...fadeUp} className="flex justify-center mb-6">
          <div className="bg-flatto-orange/10 border-2 border-flatto-orange/40 text-flatto-orange-dark font-heading font-bold text-sm md:text-base px-6 py-3 rounded-2xl text-center">
            📅 サークル参加申し込み締切：<span className="text-flatto-orange-dark">2026年8月16日（日）</span>
          </div>
        </motion.div>

        {/* CTA Buttons - Most prominent */}
        <motion.div
          {...fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-flatto-orange hover:bg-flatto-orange-dark text-white font-heading font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <PenTool size={22} />
            サークル参加を申し込む！
            <ExternalLink size={16} className="opacity-70" />
          </a>
          <a
            href={CIRCLE_CUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-flatto-orange/40 text-flatto-text font-heading font-bold px-8 py-4 rounded-full text-lg shadow-md hover:scale-105 active:scale-95 transition-all hover:border-flatto-orange"
          >
            <ImageIcon size={22} />
            サークルカットを提出する
            <ExternalLink size={16} className="opacity-50" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Requirements */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border-2 border-flatto-green/20 p-6 md:p-7"
          >
            <h3 className="font-heading font-bold text-xl text-flatto-text mb-5 flex items-center gap-2">
              📋 募集要項
            </h3>
            <div className="space-y-4">
              <InfoRow label="募集スペース数" value="51スペース" />
              <div className="pt-2">
                <a
                  href={guidelinesPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-flatto-green hover:bg-flatto-green-dark text-flatto-text font-heading font-bold px-5 py-2.5 rounded-full text-sm hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <Download size={16} />
                  募集要項PDFをダウンロード
                </a>
              </div>
              <InfoRow label="参加費" value="1スペース：一般 2,000円 ／ 学割 1,200円　2スペース：一般 4,000円 ／ 学割 2,400円（学割は全員の学生証提示が必要。当日現金払いのみ）" />
              <InfoRow
                label="参加資格"
                value="山大生以外もOK！オリジナル・二次創作作品（全年齢向け）を頒布するサークル。直接参加のみ（委託不可）。16歳未満の方は成人の方と一緒に参加。"
              />
              <InfoRow label="貸出備品" value="1スペース：長机の半分（90×45cm）＋イス1脚　2スペース：長机1台（180×45cm）＋イス2脚" />
            </div>
          </motion.div>

          {/* Rules */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl border-2 border-flatto-blue/20 p-6 md:p-7"
          >
            <h3 className="font-heading font-bold text-xl text-flatto-text mb-5 flex items-center gap-2">
              📝 出展ルール（ガイドライン）
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-heading font-bold text-sm text-flatto-text mb-1">頒布禁止物</h4>
                <ul className="text-sm text-flatto-text-light leading-relaxed space-y-0.5 list-disc list-inside">
                  <li>R18作品（成人向けコンテンツ）</li>
                  <li>法律で販売が禁止されている物</li>
                  <li>公式ロゴ・グッズ等を無許可で使用した作品・商標権侵害作品</li>
                  <li>版権立体物（オリジナル・ガイドライン許可品は可）</li>
                  <li>市販品（小規模販売のオリジナルグッズは可）</li>
                  <li>中古品・手作り石鹸などのコスメ・食品・生き物</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-flatto-text mb-1">撮影・音響ルール</h4>
                <ul className="text-sm text-flatto-text-light leading-relaxed space-y-0.5 list-disc list-inside">
                  <li>即売会中（11:00〜15:00）：会場内は写真・動画ともに撮影不可</li>
                  <li>交流会・撮影会（15:00〜16:30）：写真撮影可（動画は全時間帯禁止）</li>
                  <li>動画再生時はミュート、音楽試聴はイヤホン使用</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-flatto-text mb-1">搬入について</h4>
                <p className="text-sm text-flatto-text-light leading-relaxed">
                  郵送搬入は一律不可（事前・当日問わず）。郵送希望の場合は事前に実行委員会へご相談ください。
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Circle Cut Spec */}
        <motion.div
          {...fadeUp}
          className="mt-6 bg-white rounded-3xl border-2 border-dashed border-flatto-green/30 p-6 md:p-7"
        >
          <h3 className="font-heading font-bold text-xl text-flatto-text mb-4 flex items-center gap-2">
            🖼️ サークルカット規定
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-flatto-cream rounded-2xl p-4 text-center">
              <p className="text-xs text-flatto-text-light font-heading mb-1">画像サイズ</p>
              <p className="font-heading font-bold text-flatto-text">635 × 903 px</p>
            </div>
            <div className="bg-flatto-cream rounded-2xl p-4 text-center">
              <p className="text-xs text-flatto-text-light font-heading mb-1">ファイル形式</p>
              <p className="font-heading font-bold text-flatto-text">PNG / JPG</p>
            </div>
            <div className="bg-flatto-cream rounded-2xl p-4 text-center">
              <p className="text-xs text-flatto-text-light font-heading mb-1">カラーモード</p>
              <p className="font-heading font-bold text-flatto-text">RGB</p>
            </div>
          </div>
          <p className="text-xs text-flatto-text-light mt-3">
            ※サークルカット提出フォームよりご提出ください。
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function InfoRow({ label, value }) {
  return (
    <div>
      <p className="text-xs text-flatto-text-light font-heading mb-0.5">{label}</p>
      <p className="text-sm font-medium text-flatto-text leading-relaxed">{value}</p>
    </div>
  );
}