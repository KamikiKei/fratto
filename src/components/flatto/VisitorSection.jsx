import React from "react";
import { motion } from "framer-motion";
import { Palette, Users, Sparkles, MapPin, Clock, Ticket, Download } from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "多彩なジャンル！",
    desc: "イラスト、マンガ、小説、デジタルアート、技術展示など、あらゆるジャンルの作品が勢揃い！",
    color: "bg-flatto-green/15 text-flatto-green-dark",
  },
  {
    icon: Sparkles,
    title: "体験もいっぱい！",
    desc: "学生企画の体験コーナーや展示など、見て・触れて・楽しめる空間！",
    color: "bg-flatto-blue/15 text-flatto-blue-dark",
  },
  {
    icon: Users,
    title: "クリエイターと直接交流！",
    desc: "作品を作った本人と話せるのが即売会の醍醐味。学生から一般の方まで、活気あるコミュニケーションを楽しもう！",
    color: "bg-flatto-orange/15 text-flatto-orange-dark",
  },
];

const fadeUp = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function VisitorSection() {
  return (
    <section id="visitors" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="inline-block bg-flatto-green/20 text-flatto-green-dark font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            FOR VISITORS
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-flatto-text">
            一般参加の方へ 🙌
          </h2>
          <p className="mt-3 text-flatto-text-light font-heading text-base md:text-lg">
            入場無料！お気軽にふらっとお越しください！
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl border-2 border-flatto-green/20 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                <item.icon size={26} />
              </div>
              <h3 className="font-heading font-bold text-lg text-flatto-text mb-2">{item.title}</h3>
              <p className="text-sm text-flatto-text-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Event Details */}
        <motion.div
          {...fadeUp}
          className="bg-white rounded-3xl border-2 border-flatto-blue/30 p-6 md:p-8 mb-8"
        >
          <h3 className="font-heading font-bold text-xl text-flatto-text mb-6 text-center">
            📍 開催情報
          </h3>
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-flatto-green/15 rounded-xl flex items-center justify-center shrink-0">
                <Clock size={20} className="text-flatto-green-dark" />
              </div>
              <div>
                <p className="text-xs text-flatto-text-light font-heading mb-0.5">日時</p>
                <p className="font-heading font-bold text-flatto-text text-sm">2026年9月13日（土）</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-flatto-blue/15 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-flatto-blue-dark" />
              </div>
              <div>
                <p className="text-xs text-flatto-text-light font-heading mb-0.5">会場</p>
                <p className="font-heading font-bold text-flatto-text text-sm">食糧会館</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-flatto-orange/15 rounded-xl flex items-center justify-center shrink-0">
                <Ticket size={20} className="text-flatto-orange-dark" />
              </div>
              <div>
                <p className="text-xs text-flatto-text-light font-heading mb-0.5">入場料</p>
                <p className="font-heading font-bold text-flatto-green-dark text-sm">無料！</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder - Googleマップから埋め込みコードを取得して差し替えてください */}
          <div className="rounded-2xl overflow-hidden border border-flatto-green/20 bg-flatto-cream">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.1654765977582!2d140.3344519822693!3d38.257235411702275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8bc9e28d65e78f%3A0xf3d12d57869c60b9!2z6aOf57On5Lya6aSo!5e1!3m2!1sja!2sjp!4v1782148552634!5m2!1sja!2sjp"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="食糧会館マップ"
              className="w-full"
            />
          </div>
          <p className="text-xs text-flatto-text-light mt-2 text-center">
            山形県山形市 食糧会館
          </p>
        </motion.div>

        {/* Catalog Download */}
        <motion.div {...fadeUp} className="text-center">
          <h3 className="font-heading font-bold text-lg text-flatto-text mb-3">
            📖 サークルカタログ（配置図）
          </h3>
          <p className="text-sm text-flatto-text-light mb-4">
            出展者一覧や会場マップを事前にチェック！
          </p>
          <a
            href="/catalog.pdf"
            download="ふらっとカタログ.pdf"
            className="inline-flex items-center gap-2 bg-flatto-blue hover:bg-flatto-blue-dark text-flatto-text font-heading font-bold px-7 py-3.5 rounded-full text-base shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <Download size={20} />
            カタログをダウンロード
          </a>
        
        </motion.div>
      </div>
    </section>
  );
}