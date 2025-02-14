"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export function Partners() {
  const partners = [
    { src: "logo-ipsum-1.svg", alt: "Logo ipsum 1", width: 179 },
    { src: "logo-ipsum-2.svg", alt: "Logo ipsum 2", width: 187 },
    { src: "logo-ipsum-3.svg", alt: "Logo ipsum 3", width: 105 },
    { src: "logo-ipsum-4.svg", alt: "Logo ipsum 4", width: 161 },
    { src: "logo-ipsum-5.svg", alt: "Logo ipsum 5", width: 155 },
    { src: "logo-ipsum-6.svg", alt: "Logo ipsum 6", width: 182 },
  ];

  const numberOfLoops = 10;

  return (
    <div className="overflow-hidden w-full pt-16 bg-white pb-28">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: numberOfLoops * 20,
          ease: "linear",
        }}
      >
        {[...Array(numberOfLoops)]
          .flatMap(() => partners)
          .map((partner, index) => (
            <div key={index} className="mx-10 flex-shrink-0">
              <Image
                src={partner.src}
                alt={partner.alt}
                height={40}
                width={partner.width}
                loading="lazy"
              />
            </div>
          ))}
      </motion.div>
    </div>
  );
}
