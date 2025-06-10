"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
    return (
        <NextThemeProvider {...props} data-oid="0nqy8dh">
            {children}
        </NextThemeProvider>
    );
}
