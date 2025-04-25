import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { TanstackProvider } from "@/providers/tanstack-provider";
import { ThemeProvider } from "@/providers/theme";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata = {
    title: "Gregory Temwa",
    description: "Software Engineer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "dark:bg-primary mx-auto my-10 flex min-h-screen max-w-3xl flex-col px-6 antialiased dark:text-white",
                    geistSans.className
                )}
            >
                <TanstackProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <Header />
                        <main className="grow pb-20">{children}</main>
                        <Footer />
                    </ThemeProvider>
                </TanstackProvider>
                <Analytics />
            </body>
        </html>
    );
}