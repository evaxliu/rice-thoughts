"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import icon from "../../../public/Kengdoru.png";
import Image from "next/image";
import React from "react";
import { IconButton, Collapse, Navbar } from "@material-tailwind/react";

export default function NavBar() {
  const navItems = [
    { label: "Articles", href: "/" },
    { label: "Food Reviews", href: "/food-reviews" },
    { label: "About", href: "/about" },
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
    <Navbar className="sticky top-0 z-50 mx-auto w-full max-w-none rounded-none border-x-0 border-t-0 border-b border-[#252833] bg-[#0f1117] px-4 py-3 shadow-none lg:px-8">
      <main className="mx-auto flex max-w-6xl items-center justify-between text-[#f4f4f5]">
        
        {/* Logo */}
        <header className="flex items-center py-1.5">
          <Link className="flex-none group" href="/" aria-label="Rice Thoughts">
            <span className="inline-flex items-center gap-x-2 text-lg font-semibold tracking-tight transition-opacity duration-200 group-hover:opacity-80">
              <Image
                className="w-10 transition-transform duration-200 group-hover:scale-105"
                src={icon}
                alt="Rice Thoughts Logo"
              />
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
              className={`relative pb-0.5 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-purple-400 after:transition-all after:duration-200
                ${isActive(item.href)
                  ? "text-purple-400 after:w-full"
                  : "after:w-0 hover:text-purple-400 hover:after:w-full"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <IconButton
          variant="text"
          className="md:hidden transition-transform duration-200 active:scale-90"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
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
              className={`transition-colors duration-200 ${
                isActive(item.href) ? "text-purple-400" : "hover:text-purple-400"
              }`}
              onClick={() => setOpenNav(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Collapse>
    </Navbar>
  );
}