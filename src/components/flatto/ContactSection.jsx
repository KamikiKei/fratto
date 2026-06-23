import React from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

const CONTACT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfsKcVv1NpAK0EmRxn-wMpBca1GyjIs0lkaAOSt0rmZGxETnA/viewform";

const fadeUp = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-flatto-blue/5">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div {...fadeUp} className="text-center">
          <span className="inline-block bg-flatto-green/20 text-flatto-green-dark font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            CONTACT
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-flatto-text mb-3">
            お問い合わせ 💌
          </h2>
          <p className="text-flatto-text-light font-heading text-base md:text-lg mb-8">
            ご質問やご不明点がありましたら、お気軽にどうぞ！
          </p>

          <div className="bg-white rounded-3xl border-2 border-flatto-green/20 p-8 md:p-10 shadow-md">
            <div className="w-16 h-16 bg-flatto-green/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Mail size={30} className="text-flatto-green-dark" />
            </div>
            <p className="text-sm text-flatto-text-light mb-6 leading-relaxed">
              イベントに関するご質問やご意見は、<br className="hidden sm:inline" />
              下のボタンからお問い合わせフォームにてお送りください。<br className="hidden sm:inline" />
              運営チームが確認次第、ご返信いたします！
            </p>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-flatto-green hover:bg-flatto-green-dark text-flatto-text font-heading font-bold px-8 py-4 rounded-full text-lg shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              お問い合わせフォームへ
              <ExternalLink size={18} className="opacity-70" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}