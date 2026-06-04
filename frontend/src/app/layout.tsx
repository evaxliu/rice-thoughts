import "./ui/globals.css";
import ClientLayout from "./client-layout";
import { ThemeProvider } from "next-themes";
import NavBar from "./components/NavigationBar";

export const metadata = {
  title: "Rice Thoughts Blog",
  description: "A guy who likes rice and thinks. An essay on food, society and politics.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/Kengdoru.png", sizes: "48x48", type: "image/png" },
    ]
  },
    twitter: {
    card: "summary_large_image",
    title: "Rice Thoughts Blog",
    description:
      "A guy who likes rice and thinks. An essay on food, society and politics.",
    images: ["https://ricethoughts.com/Kengdoru.png"],
    creator: "@YourHandle",
  },
  openGraph: {
    title: "Rice Thoughts Blog",
    description:
      "A guy who likes rice and thinks. An essay on food, society and politics.",
    url: "https://ricethoughts.com",
    siteName: "Rice Thoughts Blog",
    images: [
      {
        url: "https://ricethoughts.com/Kengdoru.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#0f1117] text-[#f4f4f5] antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavBar />
          <main className="flex min-h-full flex-1 flex-col items-center px-5 py-10">
            <ClientLayout>{children}</ClientLayout>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}