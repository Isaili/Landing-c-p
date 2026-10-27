"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navItems } from "../data/content";
import { ANDROID_APK_URL } from "../data/links";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter]",
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_var(--border)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-leaf focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Grano y Grano, inicio" className="rounded-md">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-coffee/80 transition-colors hover:bg-cream-deep hover:text-coffee"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={ANDROID_APK_URL}
            download
            className={cn(
              buttonVariants({ size: "lg" }),
              "hidden h-10 rounded-xl px-4 sm:inline-flex",
            )}
          >
            <DownloadIcon aria-hidden="true" />
            Descargar app
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
