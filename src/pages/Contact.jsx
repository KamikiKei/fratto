import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../components/shared/CTAButton";
import PageDecoration from "../components/shared/PageDecoration";
import { Mail, ExternalLink, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      <PageDecoration />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          お問い合わせ
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          イベントに関するご質問やご相談など、お気軽にお問い合わせください。
          <br />
          実行委員会が丁寧にお答えします。
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card rounded-3xl shadow-[0_10px_30px_rgba(61,64,91,0.05)] p-6 md:p-10 text-center mb-8"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h2 className="font-heading text-xl font-bold mb-3">
          お問い合わせフォーム
        </h2>
        <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto leading-relaxed">
          以下のボタンからGoogleフォームへ移動し、ご質問内容をお送りください。
          通常3営業日以内にメールにてお返事いたします。
        </p>
        <CTAButton href="#" variant="accent" size="lg">
          <ExternalLink className="w-5 h-5" />
          お問い合わせフォームを開く
        </CTAButton>
        <p className="text-xs text-muted-foreground mt-4">
          ※外部サービス（Googleフォーム）へ移動します
        </p>
      </motion.div>

      {/* Additional contact info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div className="bg-card rounded-3xl shadow-[0_10px_30px_rgba(61,64,91,0.05)] p-6 text-center">
          <MessageCircle className="w-6 h-6 text-primary mx-auto mb-3" />
          <h3 className="font-heading font-bold text-sm mb-1">SNSでのお問い合わせ</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            公式X（旧Twitter）のDMでもご質問を受け付けています。お気軽にどうぞ。
          </p>
        </div>
        <div className="bg-card rounded-3xl shadow-[0_10px_30px_rgba(61,64,91,0.05)] p-6 text-center">
          <Mail className="w-6 h-6 text-primary mx-auto mb-3" />
          <h3 className="font-heading font-bold text-sm mb-1">メールでのお問い合わせ</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            急ぎのご連絡はメールでもお受けしています。
            <br />
            アドレスは追って公開予定です。
          </p>
        </div>
      </motion.div>
    </div>
  );
}