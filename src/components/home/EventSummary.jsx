import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";

const infoItems = [
  { icon: Calendar, label: "開催日", value: "2026年 日程調整中" },
  { icon: Clock, label: "時間", value: "10:00 〜 16:00（予定）" },
  { icon: MapPin, label: "会場", value: "食糧会館" },
  { icon: Ticket, label: "入場料", value: "無料" },
];

export default function EventSummary() {
  return (
    <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card rounded-3xl shadow-[0_10px_30px_rgba(61,64,91,0.05)] p-6 md:p-8"
      >
        <h2 className="font-display text-xl font-bold text-center mb-6">開催概要</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/50"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                <p className="text-sm font-bold text-foreground">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}