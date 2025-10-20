"use client"
import "../ui/globals.css";
import Link from "next/link";
import { Input } from "@heroui/input"
import { SearchIcon } from "./search-icon";
import { usePathname } from "next/navigation";
import icon from '../../../public/Kengdoru.png';
import Image from "next/image";
import { Url } from "next/dist/shared/lib/router/router";

export default function App() {
  const navItems = [
    { label: "Articles", href: "/" },
    { label: "Recipes", href: "/recipes" },
    { label: "About", href: "/about" },
  ];

  const pathname = usePathname();
  const isActive = (path: Url) => pathname === path;

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
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 text-white-800 shadow-2xs hover:bg-gray-700 hover:cursor-pointer focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
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
          </div>
        </nav>
      </header>
    </div>
  );
}