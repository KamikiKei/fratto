import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../shared/CTAButton";
import { MapPin, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large organic blob shapes */}
        <svg
          className="absolute top-0 right-0 w-[60%] h-[70%] -translate-y-[10%] translate-x-[5%]"
          viewBox="0 0 600 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M500 0C550 150 600 250 550 400C500 550 350 650 250 700C150 750 50 650 0 500C-50 350 0 150 100 50C200 -50 350 -50 500 0Z"
            fill="hsl(134 16% 57% / 0.04)"
          />
          <path
            d="M480 30C525 160 570 260 525 390C480 520 350 600 260 640C170 680 70 600 25 470C-20 340 20 165 110 75C200 -15 340 -15 480 30Z"
            fill="hsl(134 16% 57% / 0.03)"
          />
        </svg>

        <svg
          className="absolute bottom-0 left-0 w-[55%] h-[65%] translate-y-[10%] -translate-x-[5%]"
          viewBox="0 0 550 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 650C0 550 -50 400 20 280C90 160 200 80 320 30C440 -20 550 50 550 180C550 310 500 450 400 530C300 610 150 650 50 650Z"
            fill="hsl(14 76% 61% / 0.04)"
          />
          <path
            d="M70 620C25 530 -20 400 45 295C110 190 210 115 315 70C420 25 520 85 520 200C520 315 475 440 385 510C295 580 160 610 70 620Z"
            fill="hsl(14 76% 61% / 0.025)"
          />
        </svg>

        {/* Decorative curved line accents */}
        <svg
          className="absolute top-[18%] right-[15%]"
          width="80"
          height="120"
          viewBox="0 0 80 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 0C60 20 80 50 75 80C70 110 50 120 40 120"
            stroke="hsl(134 16% 57% / 0.2)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="40" cy="5" r="4" fill="hsl(134 16% 57% / 0.25)" />
        </svg>

        <svg
          className="absolute bottom-[25%] left-[10%]"
          width="60"
          height="90"
          viewBox="0 0 60 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 90C0 70 10 40 30 30C50 20 60 0 55 0"
            stroke="hsl(14 76% 61% / 0.2)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="30" cy="30" r="3" fill="hsl(14 76% 61% / 0.2)" />
        </svg>

        {/* Geometric accent shapes */}
        <div className="absolute top-[20%] left-[5%] w-16 h-16 rounded-lg border-2 border-primary/[0.08] rotate-12 opacity-60" />
        <div className="absolute top-[55%] right-[12%] w-12 h-12 rounded-md border border-accent/[0.1] -rotate-6 opacity-50" />
        <div className="absolute bottom-[15%] right-[25%] w-14 h-14 rounded-lg border-2 border-primary/[0.06] rotate-45 opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left: catchcopy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-medium mb-10 backdrop-blur-sm"
            >
              <Calendar className="w-4 h-4" />
              2026年 開催予定
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              ふらっと、
              <br />
              きてけろ！
            </h1>

            <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              「何かを創り出したい人」が集まる、
              <br />
              山形大学VR部発の同人即売会。
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton to="/visitors" variant="primary" size="lg">
                <MapPin className="w-5 h-5" />
                遊びに行く
              </CTAButton>
              <CTAButton to="/exhibitors" variant="accent" size="lg">
                作品を出展する
              </CTAButton>
            </div>
          </motion.div>

          {/* Right: logo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="flex-1 flex items-center justify-center relative"
          >
            {/* Decorative glow behind logo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-3xl" />
            <img
              src="https://media.base44.com/images/public/6a2d6121afe8b6ce6b14bee5/ffdd836a7_fratto_logo_dummy_data.png"
              alt="ふらっと！FLATTO 山形・同人即売会"
              className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}