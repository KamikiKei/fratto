import React from "react";
import { Twitter, Instagram } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png";
export default function Footer() {
  return (
    <footer className="bg-flatto-text py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center gap-5">
          <img src={footerLogo} alt="ふらっと！" className="h-16 w-auto opacity-90" />

          <div className="flex items-center gap-4">
            <a
              href="https://x.com/vr_yamagata"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="X (旧Twitter)"
            >
              <Twitter size={18} className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/yamagata_vr/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} className="text-white" />
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <a href="#top" className="text-white/60 hover:text-white text-sm font-heading transition-colors">トップ</a>
            <a href="#visitors" className="text-white/60 hover:text-white text-sm font-heading transition-colors">一般参加</a>
            <a href="#circles" className="text-white/60 hover:text-white text-sm font-heading transition-colors">サークル参加</a>
            <a href="#faq" className="text-white/60 hover:text-white text-sm font-heading transition-colors">Q&A</a>
            <a href="#contact" className="text-white/60 hover:text-white text-sm font-heading transition-colors">お問い合わせ</a>
          </nav>

          <p className="text-white/40 text-xs font-heading">
            © 2026 山形同人即売会「ふらっと！」実行委員会
          </p>
        </div>
      </div>
    </footer>
  );
}