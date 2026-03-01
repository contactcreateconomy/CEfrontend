"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Rocket } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { vibingItems } from "@/lib/mock-data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SLIDE_INTERVAL_MS = 3000;

export function WhatsVibingWidget() {
  const shouldReduceMotion = useReducedMotion();
  const items = useMemo(() => vibingItems.slice(0, 8), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (items.length <= 1 || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, items.length]);

  if (items.length === 0) {
    return null;
  }

  const activeItem = items[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  return (
    <Card className="animate-soft-float h-[250px]" style={{ animationDelay: "160ms" }}>
      <CardHeader className="pb-3">
        <h2 className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]">
          <Rocket className="h-3.5 w-3.5" /> What&apos;s Vibing
        </h2>
      </CardHeader>

      <CardContent className="flex h-[186px] flex-col justify-between space-y-3 p-4 pt-0">
        <div
          className="h-[120px] perspective-[1000px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeItem.id}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 10, rotateX: -10, filter: "blur(3px)" }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
              }
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -8, rotateX: 8, filter: "blur(3px)" }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0.18 }
                  : {
                      duration: 0.36,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
              className="h-full origin-center"
            >
              <Link
                href={activeItem.href}
                className={cn(
                  "group flex h-full min-h-[82px] items-center justify-between gap-3 rounded-[18px]",
                  "border border-white/5 bg-white/[0.03] px-4 py-3 text-[var(--text-primary)]",
                  "transition-all duration-200 hover:border-[var(--border-active)]/35 hover:bg-white/[0.05] hover:shadow-[0_10px_28px_rgba(14,165,233,0.12)]",
                )}
              >
                <div className="min-w-0 space-y-2">
                  <p className="truncate text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    {activeItem.engagedUsers.toLocaleString()} engaged
                  </p>
                  <p className="line-clamp-2 text-[13px] font-medium leading-5 text-[var(--text-primary)]">
                    {activeItem.label}
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-active)]/35 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous vibing item"
            className={cn(
              "group flex h-7 w-7 items-center justify-center rounded-full",
              "border border-[var(--border-default)] bg-[var(--bg-overlay)]/35 text-[var(--text-secondary)]",
              "transition-all duration-200 hover:border-[var(--border-active)]/45 hover:bg-[var(--brand-primary)]/10 hover:text-[var(--brand-primary)]",
              "hover:shadow-[0_0_12px_rgba(14,165,233,0.38)]",
            )}
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Show next vibing item"
            className={cn(
              "group flex h-7 w-7 items-center justify-center rounded-full",
              "border border-[var(--border-default)] bg-[var(--bg-overlay)]/35 text-[var(--text-secondary)]",
              "transition-all duration-200 hover:border-[var(--border-active)]/45 hover:bg-[var(--brand-primary)]/10 hover:text-[var(--brand-primary)]",
              "hover:shadow-[0_0_12px_rgba(14,165,233,0.38)]",
            )}
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
