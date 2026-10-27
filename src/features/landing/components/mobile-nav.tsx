"use client";

import { useState } from "react";
import { DownloadIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navItems } from "../data/content";
import { ANDROID_APK_URL } from "../data/links";
import { Logo } from "./logo";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon-lg" }),
          "size-11 lg:hidden",
        )}
        aria-label="Abrir menú"
      >
        <MenuIcon className="size-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] bg-white p-0">
        <div className="border-b px-5 py-4">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </div>
        <nav aria-label="Menú móvil" className="px-3">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block rounded-lg px-3 py-3 text-lg font-medium text-coffee hover:bg-cream-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto p-5">
          <a
            href={ANDROID_APK_URL}
            download
            onClick={close}
            className={cn(buttonVariants({ size: "xl" }), "w-full")}
          >
            <DownloadIcon aria-hidden="true" />
            Descargar para Android
          </a>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Muy pronto en App Store y Google Play
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
