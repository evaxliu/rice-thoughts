"use client"
import "../ui/globals.css";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@heroui/navbar";
import { Input } from "@heroui/input"
import { SearchIcon } from "./search-icon";
import { usePathname } from "next/navigation";
import icon from '../../../public/Kengdoru.png';
import Image from "next/image";

export default function App() {
  const navItems = [
    { label: "Articles", href: "/" },
    { label: "Recipes", href: "/recipes" },
    { label: "About", href: "/about" },
  ];

  const pathname = usePathname();

  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <Image
        alt="Rice Thoughts Icon"
        src={icon}
        className="h-10 w-auto"
      />
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">Rice Thoughts</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          {navItems.map((item) => (
            <NavbarItem key={item.label} isActive={pathname === item.href}>
              <Link aria-current="page" color="secondary" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
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
      </NavbarContent>
    </Navbar>
  );
}
