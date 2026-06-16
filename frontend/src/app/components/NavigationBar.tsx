"use client";
import Link from "next/link";
import React from "react";
import { Sun, Moon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function NavBar() {
  const pathname = usePathname();

  const [currentTheme, setTheme] = useState(getInitialTheme());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    setMounted(true);
  }, [currentTheme]);

  function getInitialTheme() {
    let userTheme = null;
    let systemTheme = true;
    if (typeof window !== 'undefined' && window.localStorage) {
      userTheme = localStorage.getItem('theme');
      systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return userTheme || (systemTheme ? 'dark' : 'light');
  }

  function toggleTheme() {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  const navTabs = [
    { label: "Articles", href: "/" },
    { label: "Food Reviews", href: "/food-reviews" },
    { label: "About", href: "/about" },
  ];

  return(
    <header className="sticky top-0 bg-white dark:bg-[#0f1117] border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-5">
        <div className="flex items-center justify-between mb-3">
          <Link
            href={"/"}
          >
            <h1 className="text-xl md:text-3xl tracking-tight dark:text-white">
              Rice Thoughts Blog
            </h1>
          </Link>
          <div className="flex items-center gap-1 md:gap-2">
            <button className="flex items-center" onClick={toggleTheme} aria-label="Toggle theme">
              {!mounted ? (
                <span className="inline-block w-7.5 h-7.5" />
              ) : currentTheme === "dark" ? (
                <Sun width="30px" height="30px" />
              ) : (
                <Moon width="30px" height="30px" />
              )}
            </button>
            <button className="ml-1 px-3 md:px-4 py-1.5 text-xs md:text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors rounded-sm whitespace-nowrap">
              Log In
            </button>
          </div>
        </div>
        <nav className="flex gap-4 md:gap-6 text-sm">
          {
            navTabs.map((tab) => {
              return(
                <Link
                  key={tab.label}
                  href={tab.href}
                  className={clsx(
                    {
                      'text-purple-400': pathname === tab.href,
                    },
                    'hover:text-purple-400 transition-colors whitespace-nowrap',
                  )}
                >
                  <p>
                    {tab.label}
                  </p>
                </Link>
              )
            })
          }
        </nav>
      </div>
    </header>
  )
};