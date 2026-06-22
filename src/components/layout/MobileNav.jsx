import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, MapPin, PenTool } from "lucide-react";

const navItems = [
  { label: "イベント情報", path: "/visitors", icon: MapPin },
  { label: "トップ", path: "/", icon: Home },
  { label: "出展申請", path: "/exhibitors", icon: PenTool },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/90 backdrop-blur-md border-t border-border">
      <div className="flex items-center justify-around py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "text-accent"
                  : "text-muted-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}