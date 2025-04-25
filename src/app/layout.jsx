import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SessionProvider from "@/providers/session";
import { TanstackProvider } from "@/providers/tanstack-provider";
import { ThemeProvider } from "@/providers/theme";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { getServerSession } from "next-auth";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata = {
    title: "Gregory Temwa",
    description: "Software Engineers",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession();

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
                        <SessionProvider session={session}>
                            <Header />
                            <main className="grow pb-20">{children}</main>
                            <Footer />
                        </SessionProvider>
                    </ThemeProvider>
                </TanstackProvider>
                <Analytics />
            </body>
        </html>
    );
}
