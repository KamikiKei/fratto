import React from "react";
import { Link } from "react-router-dom";

export default function CTAButton({
  children,
  to,
  href,
  variant = "primary",
  size = "default",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-heading font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }

  return <button className={cls}>{children}</button>;
}