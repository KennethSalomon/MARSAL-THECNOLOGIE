"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Avoid importing internal types from next-themes package which may not be present
export function ThemeProvider({ children, ...props }: any) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}