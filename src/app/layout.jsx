import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { TanstackProvider } from "@/providers/tanstack-provider";
import { ThemeProvider } from "@/providers/theme";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SessionProvider from "@/providers/session";

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
        <html lang="en" suppressHydrationWarning data-oid="vimv--7">
            <body
                className={cn(
                    "dark:bg-primary mx-auto my-10 flex min-h-screen max-w-3xl flex-col px-6 antialiased dark:text-white",
                    geistSans.className
                )}
                data-oid="spj_eyr"
            >
                <TanstackProvider data-oid="mn5vfgx">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        data-oid="fynm.oc"
                    >
                        <SessionProvider>
                            <Header data-oid="toyuxkz" />
                            <main className="grow pb-20" data-oid="82g:two">
                                {children}
                            </main>
                            <Footer data-oid="j.4uier" />
                        </SessionProvider>
                    </ThemeProvider>
                </TanstackProvider>
                <Analytics data-oid="nn4to51" />
            </body>
        </html>
    );
}
