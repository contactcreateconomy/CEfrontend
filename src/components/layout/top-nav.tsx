"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Bell, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { primaryNav } from "@/lib/mock-data";
import { getUnreadNotifications } from "@/lib/adapters/content";
import { cn } from "@/lib/utils";
import { CreateconomyLogoMark } from "@/components/ui/createconomy-logo-mark";
import { useScroll } from "@/components/ui/use-scroll";

export function TopNav() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const unread = getUnreadNotifications("u1").length;
  const [mounted, setMounted] = useState(false);
  const scrolled = useScroll(10);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-canvas)]">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div
          className={cn(
            "w-full border border-transparent transition-[transform,background-color,border-color,box-shadow,border-radius] duration-300 ease-out will-change-transform md:translate-y-0",
            scrolled
              ? "md:translate-y-2 md:rounded-xl md:border-[var(--border-subtle)] md:bg-[color:var(--bg-canvas)]/92 md:shadow-[var(--shadow-sm)] md:backdrop-blur"
              : "border-x-transparent border-t-transparent border-b-[var(--border-subtle)] bg-[color:var(--bg-canvas)]/90 backdrop-blur",
          )}
        >
          <div className="flex h-14 w-full items-center justify-between gap-4 px-2 sm:px-3 md:px-4">
            <Link href="/feed" className="flex items-center gap-2">
              <CreateconomyLogoMark size={32} className="text-[var(--brand-primary)]" />
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
              <button
                aria-label="Search"
                className="rounded-full p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-overlay)] hover:text-[var(--text-primary)]"
              >
                <Search className="h-4 w-4" />
              </button>
              <button
                aria-label="Notifications"
                className="relative rounded-full p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-overlay)] hover:text-[var(--text-primary)]"
              >
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
        </div>
      </div>
    </header>
  );
}
