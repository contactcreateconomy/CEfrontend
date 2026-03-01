import type { ReactNode } from "react";

import { LeftSidebar } from "@/components/layout/left-sidebar";
import { RightSidebar } from "@/components/layout/right-sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { MobileTabBar } from "@/components/layout/mobile-tab-bar";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <div className="canvas-dot-grid pointer-events-none absolute inset-0" />
      <div className="relative z-10">
        <TopNav />
        <div className="mx-auto flex w-full max-w-[1440px] gap-4 px-4 py-6 md:px-6 lg:gap-8 lg:px-8">
          <LeftSidebar />
          <main className="min-w-0 flex-1 pb-24 lg:pb-8">{children}</main>
          <RightSidebar />
        </div>
        <MobileTabBar />
      </div>
    </div>
  );
}
