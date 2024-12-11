"use client";

import { Drawer } from "@/components/drawer";
import { Button, buttonVariants } from "@/components/ui/button";
import { House, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-[calc(infinity)] select-none bg-background">
      <div className="container mx-auto flex justify-end">
        <Link
          href="/"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          onClick={isOpen ? toggleMenu : () => {}}
        >
          <House />
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <div
        className={`absolute top-full grid h-[calc(100dvh-100%)] w-full place-content-center bg-background pb-12 transition duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <Drawer />
      </div>
    </header>
  );
}
