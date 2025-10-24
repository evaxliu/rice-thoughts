import "./ui/globals.css";
import ClientLayout from "./client-layout";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Rice Thoughts Blog",
  description: "A guy who likes rice and thinks. A prose on food, society and politics.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/Kengdoru.png", sizes: "32x32", type: "image/png" },
    ]
  },
    twitter: {
    card: "summary_large_image",
    title: "Rice Thoughts Blog",
    description:
      "A guy who likes rice and thinks. A prose on food, society and politics.",
    images: ["https://ricethoughts.com/Kengdoru.png"],
    creator: "@YourHandle",
  },
  openGraph: {
    title: "Rice Thoughts Blog",
    description:
      "A guy who likes rice and thinks. A prose on food, society and politics.",
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
    <html lang="en">
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <ClientLayout>{children}</ClientLayout>
          </ThemeProvider>
        </body>
    </html>
  );
}