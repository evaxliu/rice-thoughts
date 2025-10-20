"use client";

import "./ui/globals.css";
import NavBar from "./components/navbar"
import { ThemeProvider } from "@material-tailwind/react";
import { Analytics } from "@vercel/analytics/next"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Rice Thoughts</title>
      </head>
      <body>
        <Analytics/>
        <div className="flex flex-col h-screen w-screen">
          <ThemeProvider>
            <NavBar/>
            <div className="flex items-center justify-center p-5">
                {children}
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
