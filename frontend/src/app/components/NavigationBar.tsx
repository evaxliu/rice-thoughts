"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function NavBar() {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { label: "Articles", href: "/" },
    { label: "Food Reviews", href: "/food-reviews" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#e5e7eb] bg-[#fafafa] dark:border-[#1f2937] dark:bg-[#0f172a]">
      <div className="mx-auto flex w-full max-w-3xl flex-col px-6 py-6">
        <header className="flex w-full items-center justify-between pb-4">
          <Link href="/" aria-label="Rice Thoughts">
            <span className="text-3xl font-medium tracking-tight text-[#111827] dark:text-[#f8fafc]">
              Rice Thoughts Blog
            </span>
          </Link>

          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md p-1 text-[#4b5563] hover:text-[#111827] dark:text-[#9ca3af] dark:hover:text-white"
          >
            {theme === "dark" ? (
              <Sun size={21} strokeWidth={2} />
            ) : (
              <Moon size={21} strokeWidth={2} />
            )}
          </button>
        </header>

        <div className="flex gap-6 text-base text-[#4b5563] dark:text-[#a1a1aa]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-[#111827] dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}