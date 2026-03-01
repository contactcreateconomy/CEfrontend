"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Bell, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { primaryNav } from "@/lib/mock-data";
import { getUnreadNotifications } from "@/lib/adapters/content";
import { cn } from "@/lib/utils";

export function TopNav() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const unread = getUnreadNotifications("u1").length;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[color:var(--bg-canvas)]/90 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        <Link href="/feed" className="flex items-center gap-2">
          <div className="electric-glow flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-primary)] text-[var(--text-inverse)]">
            C
          </div>
          <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)] sm:text-base">Createconomy</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-overlay)] hover:text-[var(--text-primary)]",
                pathname === item.href && "bg-[var(--bg-overlay)] text-[var(--brand-primary)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Search" className="rounded-full p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-overlay)] hover:text-[var(--text-primary)]">
            <Search className="h-4 w-4" />
          </button>
          <button aria-label="Notifications" className="relative rounded-full p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-overlay)] hover:text-[var(--text-primary)]">
            <Bell className="h-4 w-4" />
            {unread > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 rounded-full bg-[var(--feedback-error)] px-1.5 py-0.5 text-[10px] font-semibold text-white">
                {unread}
              </span>
            ) : null}
          </button>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="rounded-full p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-overlay)] hover:text-[var(--text-primary)]"
          >
            {!mounted ? <Moon className="h-4 w-4" /> : resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
