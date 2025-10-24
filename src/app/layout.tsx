import "./ui/globals.css";
import ClientLayout from "./client-layout";

export const metadata = {
  title: "Rice Thoughts Blog",
  description: "A guy who likes rice and thinks. An essay on culture and politics.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/Kengdoru.png", sizes: "32x32", type: "image/png" },
    ]
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}