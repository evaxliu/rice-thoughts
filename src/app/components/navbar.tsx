"use client";
import "../ui/globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import icon from "../../../public/Kengdoru.png";
import Image from "next/image";
import React from "react";
import { IconButton, Collapse, Navbar } from "@material-tailwind/react";

export default function NavBar() {
  const navItems = [
    { label: "Articles", href: "/" },
    { label: "Recipes", href: "/recipes" },
    { label: "About", href: "/about" },
    { label: "Login", href: "/login" },
  ];

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="bg-transparent border-transparent sticky top-0 z-50 backdrop-blur-md border-b mx-auto max-w-7xl px-4 py-2 lg:px-8 lg:py-4">
      <main className="container mx-auto flex items-center justify-between text-blue-gray-900">
        {/* Logo */}
        <header className="flex items-center py-1.5">
          <Link className="flex-none" href="/" aria-label="Rice Thoughts">
            <span className="inline-flex items-center gap-x-2 text-xl font-semibold">
              <Image className="w-10" src={icon} alt="Rice Thoughts Logo" />
              Rice Thoughts Blog
            </span>
          </Link>
        </header>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={isActive(item.href) ? "text-purple-500" : ""}
            >
              {item.label}
            </Link>
          ))}

        </nav>

        {/* Mobile Toggle */}
        <IconButton
          variant="text"
          className="md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </main>

      {/* Mobile Nav */}
      <Collapse open={openNav} className="md:hidden">
        <nav className="flex flex-col gap-5 mt-4 px-4 overflow-hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={isActive(item.href) ? "text-purple-500" : ""}
              onClick={() => setOpenNav(false)} // close menu when clicked
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Collapse>
    </Navbar>
  );
}
