import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Twitter, Instagram } from "lucide-react";
import heroLogo from "@/assets/hero-logo.png";

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-flatto-blue/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-80 h-80 bg-flatto-green/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-flatto-yellow/20 rounded-full blur-3xl" />
        {/* Floating shapes */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 right-12 w-8 h-8 bg-flatto-green rounded-lg rotate-12 opacity-40"
        />
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-48 left-8 w-6 h-6 bg-flatto-blue rounded-full opacity-40"
        />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-8 w-10 h-10 bg-flatto-orange/30 rounded-lg"
        />
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-48 left-16 w-5 h-5 bg-flatto-yellow/50 rounded-full"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-12 md:py-20 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6"
        >
          <img
            src={heroLogo}
            alt="山形・同人即売会 ふらっと！"
            className="mx-auto w-96 md:w-[480px] h-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Catchcopy */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-heading font-black text-4xl md:text-6xl text-flatto-text mb-3"
        >
          ふらっと、
          <span className="text-flatto-green-dark">きてけろ！</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="font-heading text-lg md:text-xl text-flatto-text-light mb-8"
        >
          ジャンル不問の同人即売会！
        </motion.p>

        {/* Event Info Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <div className="bg-white rounded-2xl shadow-lg border-2 border-flatto-green/40 px-6 py-4 flex items-center gap-3">
            <div className="w-11 h-11 bg-flatto-green/20 rounded-full flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-flatto-green-dark" />
            </div>
            <div className="text-left">
              <p className="text-xs text-flatto-text-light font-heading">開催日時</p>
              <p className="font-heading font-bold text-flatto-text">2026年9月13日（土）</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border-2 border-flatto-blue/40 px-6 py-4 flex items-center gap-3">
            <div className="w-11 h-11 bg-flatto-blue/20 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-flatto-blue-dark" />
            </div>
            <div className="text-left">
              <p className="text-xs text-flatto-text-light font-heading">会場</p>
              <p className="font-heading font-bold text-flatto-text">食糧会館（山形）</p>
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur rounded-3xl border-2 border-dashed border-flatto-green/40 p-6 md:p-8 mb-10"
        >
          <h2 className="font-heading font-bold text-lg md:text-xl text-flatto-text mb-3">
            🎉 はじめまして！
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-flatto-text">
            山形大学VR部主催・同人即売会「ふらっと！」へようこそ！
            <p>デジタル、技術、イラスト、小説、音楽…ジャンルなんて関係なし！</p>
            「何かを創り出したい」という気持ちがあれば、それだけでOKです。
          </p>
          <p className="text-sm md:text-base leading-relaxed text-flatto-text mt-3">
            学生の創作意欲と楽しい熱気を、地域のみなさまにお届けしたい。
            そんな想いで準備を進めています。
            お気軽にふらっと遊びに来てください！
            <p>～カル鍋実行委員会にこころからの感謝を込めて。～</p>
          </p>
        </motion.div>

        {/* SNS Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://x.com/vr_yamagata"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-flatto-text text-white px-5 py-3 rounded-full font-heading font-medium text-sm hover:scale-105 active:scale-95 transition-transform shadow-md"
          >
            <Twitter size={18} />
            X (旧Twitter)
          </a>
          <a
            href="https://www.instagram.com/yamagata_vr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-5 py-3 rounded-full font-heading font-medium text-sm hover:scale-105 active:scale-95 transition-transform shadow-md"
          >
            <Instagram size={18} />
            Instagram
          </a>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 80" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,40 C300,80 600,0 900,40 C1050,60 1150,30 1200,40 L1200,80 L0,80 Z" fill="#B3ED54" fillOpacity="0.15" />
        </svg>
      </div>
    </section>
  );
}