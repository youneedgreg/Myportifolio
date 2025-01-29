import { ThemeProvider } from "../app/context/Themecontext";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
