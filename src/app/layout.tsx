import "./ui/globals.css";
import ClientLayout from "./client-layout";

export const metadata = {
  title: "Rice Thoughts Blog",
  description: "A guy who likes rice and thinks.",
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