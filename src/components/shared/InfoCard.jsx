import React from "react";
import { motion } from "framer-motion";

export default function InfoCard({ icon: Icon, title, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`bg-card rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(61,64,91,0.05)] hover:shadow-[0_15px_40px_rgba(61,64,91,0.08)] hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      )}
      {title && (
        <h3 className="font-heading text-lg font-bold text-foreground mb-3">{title}</h3>
      )}
      <div className="text-muted-foreground text-sm leading-relaxed">{children}</div>
    </motion.div>
  );
}