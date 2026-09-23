"use client";

import { useState, type ReactNode } from "react";
import { BrandMark } from "@/components/layout/brand-mark";
import { BrandTopBar } from "@/components/layout/brand-top-bar";
import { CommandBar } from "@/components/layout/command-bar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-dvh bg-background">
      <aside className="fixed inset-y-0 right-0 z-40 hidden w-72 border-l border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex lg:flex-col">
        <div className="border-b border-sidebar-border px-4 py-5">
          <BrandMark tone="dark" />
        </div>
        <div className="flex-1 overflow-y-auto px-3">
          <SidebarNav />
        </div>
      </aside>
      {open ? (
        <Sheet open onOpenChange={setOpen}>
          <SheetContent side="right" className="w-80 bg-sidebar p-0 text-sidebar-foreground">
            <SheetHeader className="sr-only">
              <SheetTitle>القائمة</SheetTitle>
            </SheetHeader>
            <div className="border-b border-sidebar-border px-4 py-5">
              <BrandMark tone="dark" />
            </div>
            <div className="h-[calc(100dvh-5rem)] overflow-y-auto px-3">
              <SidebarNav onNavigate={() => setOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      ) : null}
      <div className="lg:pr-72">
        <BrandTopBar />
        <CommandBar onOpenMenu={() => setOpen(true)} />
        <main className="px-4 py-6 pb-24 sm:px-6 lg:px-8 lg:pb-10">{children}</main>
        <SiteFooter />
      </div>
      <MobileNav onMore={() => setOpen(true)} />
    </div>
  );
}
