"use client";

import "./ui/globals.css";
import NavBar from "./components/navbar"
import Footer from "./components/footer";
import { ThemeProvider } from "@material-tailwind/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Rice Thoughts</title>
      </head>
      <body>
        <div className="flex flex-col h-screen w-screen">
          <ThemeProvider>
            <NavBar/>
            <div className="flex items-center justify-center h-screen">
                {children}
            </div>
            <Footer/>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
