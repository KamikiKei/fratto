import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex ${align === "center" ? "justify-center" : "justify-start"} gap-1`}>
        <span className="w-8 h-1 rounded-full bg-primary" />
        <span className="w-3 h-1 rounded-full bg-accent" />
        <span className="w-2 h-1 rounded-full bg-primary/40" />
      </div>
    </motion.div>
  );
}