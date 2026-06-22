import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/shared/SectionHeading";
import InfoCard from "../components/shared/InfoCard";
import CTAButton from "../components/shared/CTAButton";
import PageDecoration from "../components/shared/PageDecoration";
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Bus,
  Download,
  Sparkles,
  MessageCircle,
  Eye,
} from "lucide-react";

export default function Visitors() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-8">
      <PageDecoration />
      {/* Page header */}
      <div className="text-center mb-12 pt-4">
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
          一般参加の方へ
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          はじめてでも大丈夫。ふらっとお越しください。
        </p>
        <div className="mt-4 flex justify-center gap-1">
          <span className="w-8 h-1 rounded-full bg-primary" />
          <span className="w-3 h-1 rounded-full bg-accent" />
          <span className="w-2 h-1 rounded-full bg-primary/40" />
        </div>
      </div>

      {/* How to enjoy */}
      <SectionHeading
        title="イベントの楽しみ方"
        subtitle="こんな体験があなたを待っています"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-16">
        <InfoCard icon={Eye} title="作品を見る">
          イラスト、技術作品、ハンドメイド雑貨など、多彩なジャンルの作品をぐるっと見て回れます。気になったものは手に取ってOK。
        </InfoCard>
        <InfoCard icon={MessageCircle} title="クリエイターと話す">
          作品を作った本人がブースにいるから、「どうやって作ったの？」と気軽に聞ける。それが即売会の魅力です。
        </InfoCard>
        <InfoCard icon={Sparkles} title="作品を手に入れる">
          気に入った作品はその場で購入できます。一点モノの手作り品やZINEなど、ここでしか出会えないものがたくさん。
        </InfoCard>
      </div>

      {/* Event details */}
      <SectionHeading
        title="開催情報"
        subtitle="会場へのアクセスと詳細情報"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card rounded-3xl shadow-[0_10px_30px_rgba(61,64,91,0.05)] p-6 md:p-8"
        >
          <h3 className="font-heading text-lg font-bold mb-6">詳細情報</h3>
          <div className="space-y-4">
            {[
              { icon: Calendar, label: "開催日", value: "2026年 日程調整中" },
              { icon: Clock, label: "時間", value: "10:00 〜 16:00（予定）" },
              { icon: MapPin, label: "会場", value: "食糧会館" },
              { icon: Ticket, label: "入場料", value: "無料（どなたでもお気軽にどうぞ）" },
              { icon: Bus, label: "アクセス", value: "山形駅前から車で5分 / バスで8分（市役所前下車 徒歩3分）" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="bg-card rounded-3xl shadow-[0_10px_30px_rgba(61,64,91,0.05)] overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.9601065417182!2d140.3367479759063!3d38.257231271867774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8bc9e28d65e78f%3A0xf3d12d57869c60b9!2z6aOf57On5Lya6aSo!5e0!3m2!1sja!2sjp!4v1781621290536!5m2!1sja!2sjp"
            className="w-full h-full min-h-[280px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="会場マップ"
          />
        </motion.div>
      </div>

      {/* Catalog download */}
      <SectionHeading
        title="サークルカタログ"
        subtitle="出展者一覧や会場マップを事前にチェック"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card rounded-3xl shadow-[0_10px_30px_rgba(61,64,91,0.05)] p-6 md:p-10 text-center mb-8"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Download className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-heading text-lg font-bold mb-2">
          カタログ・会場マップ（PDF）
        </h3>
        <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto leading-relaxed">
          出展サークルの一覧や会場の配置図をPDFでダウンロードできます。
          当日の予習にぜひご活用ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CTAButton href="#" variant="primary" size="lg">
            <Download className="w-5 h-5" />
            カタログをダウンロード
          </CTAButton>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          ※カタログは開催日が近づきましたら公開予定です
        </p>
      </motion.div>

      {/* Category bubbles */}
      <div className="flex flex-wrap gap-2 justify-center mb-16">
        {["アート", "イラスト", "テクノロジー", "文芸", "ハンドメイド", "音楽", "ゲーム", "写真"].map(
          (cat) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground/70"
            >
              {cat}
            </span>
          )
        )}
      </div>
    </div>
  );
}