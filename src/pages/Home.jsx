import React from "react";
import HeroSection from "../components/home/HeroSection";
import EventSummary from "../components/home/EventSummary";
import AboutSection from "../components/home/AboutSection";
import HighlightSection from "../components/home/HighlightSection";
import SNSSection from "../components/home/SNSSection";
import CTAButton from "../components/shared/CTAButton";
import { motion } from "framer-motion";
import { MapPin, PenTool } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EventSummary />
      <HighlightSection />

      <SNSSection />

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            あなたの「好き」を、ここで。
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            来場者として作品を楽しんだり、クリエイターとして出展したり。
            あなたの関わり方で、このイベントを一緒に作りましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CTAButton to="/visitors" variant="primary" size="lg">
              <MapPin className="w-5 h-5" />
              イベント詳細を見る
            </CTAButton>
            <CTAButton to="/exhibitors" variant="accent" size="lg">
              <PenTool className="w-5 h-5" />
              出展に申し込む
            </CTAButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
}