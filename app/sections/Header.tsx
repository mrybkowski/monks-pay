"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components";
import { twMerge } from "tailwind-merge";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: isScrolled ? "bg-zinc-10/90" : "bg-zinc-10",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={twMerge(
        "fixed w-full px-10 z-50",
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
        <ul className="md:flex flex-row gap-8 font-semibold text-lg text-generalColors-paragrah hidden">
          <li className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-generalColors-primary">
            <Link href="#features">Features</Link>
          </li>
          <li className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-generalColors-primary">
            <Link href="#howItWorks">How it works</Link>
          </li>
          <li className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-generalColors-primary">
            <Link href="#security">Security</Link>
          </li>
          <li className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-generalColors-primary">
            <Link href="#pricing">Pricing</Link>
          </li>
        </ul>
        <Button className="hidden md:block" variant="primary">
          Buy&nbsp;Template
        </Button>
      </div>
    </motion.header>
  );
}
