"use client";

import NavBar from "./components/navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
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
