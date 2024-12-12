"use client";

import { Menu } from "@/components/menu";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  HomeIcon,
  MarkGithubIcon,
  MoonIcon,
  SunIcon,
  ThreeBarsIcon,
  XIcon,
} from "@primer/octicons-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function Header() {
  const searchParams = useSearchParams();
  const isError = searchParams.get("error") === "true";

  const [isOpen, setIsOpen] = useState(isError);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-[calc(infinity)] select-none bg-background">
      <div className="container mx-auto flex justify-end">
        <Link
          href="/"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          onClick={isOpen ? toggleMenu : () => {}}
        >
          <HomeIcon />
        </Link>
        <Link
          href="https://github.com/nkfr26/my-personal-website"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          target="_blank"
          rel="noreferrer"
        >
          <MarkGithubIcon />
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Button variant="ghost" size="icon" onClick={toggleMenu}>
          {isOpen ? <XIcon /> : <ThreeBarsIcon />}
        </Button>
      </div>

      <div
        className={`absolute top-full grid h-[calc(100dvh-100%)] w-full place-content-center bg-background pb-12 transition duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <Menu isError={isError} />
      </div>
    </header>
  );
}
