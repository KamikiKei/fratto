import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="https://media.base44.com/images/public/6a2d6121afe8b6ce6b14bee5/853ddd1ae_2_20260621204457.png"
              alt="ふらっと！FLATTO"
              className="h-12 w-auto mb-3 opacity-80"
            />
            <p className="text-sm opacity-70 leading-relaxed">
              ふらっと、きてけろ。
              <br />
              山形大学VR部が主催する、
              <br />
              みんなのための同人即売会です。
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3">サイトマップ</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">トップページ</Link></li>
              <li><Link to="/visitors" className="hover:opacity-100 transition-opacity">一般参加の方へ</Link></li>
              <li><Link to="/exhibitors" className="hover:opacity-100 transition-opacity">サークル参加の方へ</Link></li>
              <li><Link to="/faq" className="hover:opacity-100 transition-opacity">よくある質問</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3">公式SNS</h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="X (旧Twitter)"
              >
                <span className="text-sm font-bold">X</span>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-xs opacity-50">
          © 2026{" "}
          <img
            src="https://media.base44.com/images/public/6a2d6121afe8b6ce6b14bee5/853ddd1ae_2_20260621204457.png"
            alt="ふらっと！"
            className="inline-block h-4 w-auto opacity-50 mx-1 align-middle"
          />
          実行委員会
        </div>
      </div>
    </footer>
  );
}