"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";

import { Button } from "@/components";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header>
      <motion.div
        initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
        animate={{
          backgroundColor: isScrolled ? "bg-zinc-10/90" : "bg-zinc-10",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={twMerge(
          "fixed w-full px-10 z-10",
          isScrolled && "backdrop-blur-md"
        )}
      >
        <div className="flex my-5 container mx-auto items-center justify-between w-full">
          <Link href="/">
            <Image
              width={144}
              height={48}
              src="logo.svg"
              alt="logo"
              loading="lazy"
            />
          </Link>
          <ul className="hidden xl:flex flex-row gap-8 font-semibold text-lg text-generalColors-paragrah">
            {["Features", "How it works", "Security", "Pricing"].map((item) => (
              <li
                key={item}
                className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-generalColors-primary"
              >
                <Link href={`#${item.replace(/\s+/g, "").toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center gap-5">
            <Button className="hidden md:block" variant="primary" href="#">
              Buy&nbsp;Template
            </Button>
            <Menu className="xl:hidden cursor-pointer" onClick={openMenu} />
          </div>
        </div>
      </motion.div>

      <div
        ref={menuRef}
        className={twMerge(
          "fixed left-0 z-20 h-auto w-full px-10 pb-10 bg-generalColors-primary/60 backdrop-blur-md rounded-b-2xl transition-all duration-200 ease-in-out",
          isMenuOpen ? "top-0" : "-top-[100%]"
        )}
      >
        <div className="container mx-auto flex items-center justify-between pt-10">
          <Link onClick={closeMenu} href="/">
            <Image
              width={144}
              height={48}
              src="logo-white.svg"
              alt="logo"
              loading="lazy"
            />
          </Link>
          <X
            className="cursor-pointer text-generalColors-white"
            onClick={closeMenu}
          />
        </div>
        <div className="container mx-auto flex justify-start items-start flex-col h-full gap-12">
          <ul className="pt-12 font-semibold text-generalColors-white">
            {["Features", "How it works", "Security", "Pricing"].map((item) => (
              <li
                key={item}
                onClick={closeMenu}
                className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-generalColors-primary"
              >
                <Link href={`#${item.replace(/\s+/g, "").toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
            <li
              onClick={closeMenu}
              className="hover:cursor-pointer font-black transition-all duration-300 ease-in-out hover:text-generalColors-primary pt-5"
            >
              <Link href="#">Buy Template</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
