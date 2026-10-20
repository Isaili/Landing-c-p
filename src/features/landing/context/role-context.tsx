"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Role } from "../types";

interface RoleContextValue {
  role: Role;
  setRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextValue | null>(null);

/** Estado compartido del rol entre Beneficios y Precios */
export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("comprador");
  return <RoleContext value={{ role, setRole }}>{children}</RoleContext>;
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole debe usarse dentro de <RoleProvider>");
  return ctx;
}
