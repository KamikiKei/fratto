import React from "react";

export default function PageDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Warm organic blobs */}
      <div
        className="absolute -top-10 -right-16 w-72 h-72 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(134 16% 57% / 0.15), hsl(14 76% 61% / 0.05) 70%, transparent)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-1/4 -left-12 w-56 h-56 rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(14 76% 61% / 0.12), hsl(45 80% 65% / 0.04) 70%, transparent)",
          filter: "blur(36px)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(134 16% 57% / 0.1), transparent 70%)",
          filter: "blur(32px)",
        }}
      />

      {/* Gentle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(234 21% 30%) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating decorative dots */}
      <div className="absolute top-[15%] right-[8%] w-2 h-2 rounded-full bg-primary/18" />
      <div className="absolute top-[35%] right-[18%] w-1.5 h-1.5 rounded-full bg-accent/15" />
      <div className="absolute top-[50%] left-[6%] w-2.5 h-2.5 rounded-full bg-primary/12" />
      <div className="absolute bottom-[30%] left-[14%] w-1.5 h-1.5 rounded-full bg-accent/18" />

      {/* Small decorative ring */}
      <div className="absolute top-[12%] right-[12%] w-14 h-14 rounded-full border border-primary/8" />
      <div className="absolute bottom-[25%] left-[10%] w-10 h-10 rounded-full border border-accent/8" />

      {/* Warm corner glows */}
      <div
        className="absolute top-0 left-0 w-40 h-40 opacity-25"
        style={{
          background: "radial-gradient(ellipse at top left, hsl(45 80% 65% / 0.15), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
    </div>
  );
}