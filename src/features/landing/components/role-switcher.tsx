"use client";

import type { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useRole } from "../context/role-context";
import { roleLabels } from "../data/content";
import type { Role } from "../types";

const roles = Object.keys(roleLabels) as Role[];

/**
 * Pestañas "Soy comprador / productor / ambos". El valor vive en RoleProvider,
 * así que cambiarlo aquí también cambia las demás secciones que lo usan.
 * Los hijos deben ser <TabsContent value="comprador|productor|ambos">.
 */
export function RoleTabs({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  const { role, setRole } = useRole();

  return (
    <Tabs
      value={role}
      onValueChange={(value) => setRole(value as Role)}
      className={cn("items-center gap-10", className)}
    >
      <TabsList
        aria-label={label}
        className="h-auto! w-full max-w-md rounded-full border bg-cream-deep p-1"
      >
        {roles.map((r) => (
          <TabsTrigger
            key={r}
            value={r}
            className="h-11 rounded-full px-3 text-[0.95rem] text-coffee/75 data-active:bg-coffee data-active:text-cream data-active:shadow-md"
          >
            <span className="sm:hidden">{roleLabels[r]}</span>
            <span className="hidden sm:inline">
              Soy {roleLabels[r].toLowerCase()}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
}
