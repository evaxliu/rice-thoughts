"use client";

import "./ui/globals.css";
import NavBar from "./components/navbar"
import Footer from "./components/footer";
import { ThemeProvider } from "@material-tailwind/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>
          <title>Rice Thoughts</title>
        </div>
        <div className="flex flex-col h-screen w-screen">
          <NavBar/>
          <div className="flex items-center justify-center h-screen">
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
