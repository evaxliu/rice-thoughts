"use client";

import NavBar from "./components/navbar";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // Apply dark mode preference safely in the client
  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  //   if (theme === "dark" || (!theme && prefersDark)) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, []);

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-hidden">
      <Analytics />
      <SpeedInsights />
      <NavBar />
      <div className="grow flex items-center justify-center p-5">
        {children}
      </div>
    </div>
  );
}
