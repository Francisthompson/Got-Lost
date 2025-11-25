"use client"

import { ReactNode } from "react";
import { useTheme } from "./ThemeContext";

export default function ClientThemeWrapper({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  return <div data-theme={theme}>{children}</div>;
}