import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { TanstackProvider } from "@/providers/tanstack-provider";
import { ThemeProvider } from "@/providers/theme";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";

const CursorTrail = dynamic(() => import("@/components/effects/CursorTrail"), {
    ssr: false,
});
const SmoothScroll = dynamic(
    () => import("@/components/effects/SmoothScroll"),
    { ssr: false }
);

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
        <html lang="en" suppressHydrationWarning data-oid="sqn.3c_">
            <body
                className={cn(
                    "dark:bg-primary mx-auto my-10 flex min-h-screen max-w-3xl flex-col px-6 antialiased dark:text-white",
                    geistSans.className
                )}
                data-oid="1cpwkok"
            >
                <TanstackProvider data-oid="l81_o3s">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        data-oid="b4c61sy"
                    >
                        <CursorTrail data-oid="-r2ncdy" />
                        <SmoothScroll data-oid="r-d2_nb" />
                        <Header data-oid="btkdq39" />
                        <main className="grow pb-20" data-oid="6:3tbwb">
                            {children}
                        </main>
                        <Footer data-oid="zns3:mp" />
                    </ThemeProvider>
                </TanstackProvider>
                <Analytics data-oid="laya24g" />
            </body>
        </html>
    );
}
