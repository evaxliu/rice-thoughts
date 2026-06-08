import "./ui/globals.css";
import ClientLayout from "./client-layout";
import { ThemeProvider } from "next-themes";
import NavBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-[#fafafa] text-[#111827] antialiased dark:bg-[#0f172a] dark:text-[#e5e7eb]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />

          <main className="flex flex-1 flex-col items-center">
            <ClientLayout>{children}</ClientLayout>
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}