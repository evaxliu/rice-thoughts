"use client"
import "../ui/globals.css";
import Link from "next/link";
import { Input } from "@heroui/input"
import { SearchIcon } from "./search-icon";
import { usePathname } from "next/navigation";
import icon from '../../../public/Kengdoru.png';
import Image from "next/image";
import { Url } from "next/dist/shared/lib/router/router";
import React from "react";
import {
  IconButton,
  Collapse,
} from "@material-tailwind/react";

export default function App() {
  const navItems = [
    { label: "Articles", href: "/" },
    { label: "Recipes", href: "/recipes" },
    { label: "About", href: "/about" },
  ];

  const pathname = usePathname();
  const isActive = (path: Url) => pathname === path;

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <div>
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-3">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <Link className="flex-none text-xl font-semibold focus:outline-hidden" href="/" aria-label="Rice Thoughts">
              <span className="inline-flex items-center gap-x-2 text-xl font-semibold">
                <Image className="w-10 h-auto" src={icon} alt="Rice Thoughts Logo" />
                Rice Thoughts
              </span>
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              {navItems.map((item) => (
                <Link key={item.label} aria-current="page" color="secondary" href={item.href} className={`${
                  isActive(item.href) ? "text-purple-500" : ""
                }`}>
                  {item.label}
                </Link>
              ))}
              <Input
                classNames={{
                  base: "max-w-full sm:max-w-[10rem] h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper:
                    "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
              />
            </div>

            {/* Tablet and Mobile */}
            <div className="block sm:hidden transition-all duration-300 basis-full grow">
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
                <Collapse open={openNav}>
                  <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                    {navItems.map((item) => (
                      <Link key={item.label} aria-current="page" color="secondary" href={item.href} className={`${
                        isActive(item.href) ? "text-purple-500" : ""
                      }`}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}