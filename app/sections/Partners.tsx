"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

export function Partners() {
  const partners = [
    { src: "logo-ipsum-1.svg", alt: "Logo ipsum 1", width: 179 },
    { src: "logo-ipsum-2.svg", alt: "Logo ipsum 2", width: 187 },
    { src: "logo-ipsum-3.svg", alt: "Logo ipsum 3", width: 105 },
    { src: "logo-ipsum-4.svg", alt: "Logo ipsum 4", width: 161 },
    { src: "logo-ipsum-5.svg", alt: "Logo ipsum 5", width: 155 },
    { src: "logo-ipsum-6.svg", alt: "Logo ipsum 6", width: 182 },
  ];

  // Swiper 9+ wprowadził nowy sposób działania trybu loop:
  // zamiast duplikować slajdy, dynamicznie je przestawia.
  //
  // Wymaganie: liczba slajdów musi być co najmniej 2x większa
  // niż wartość `slidesPerView`.
  //
  // Źródło: https://swiperjs.com/migration-guide-v9#loop-mode
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="overflow-hidden w-full pt-16 bg-white pb-28">
      <Swiper
        spaceBetween={40}
        loop
        autoplay={{
          delay: 0,
        }}
        speed={5000}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: partners.length / 2,
          },
          768: {
            slidesPerView: (partners.length / 3) * 2,
          },
          1024: {
            slidesPerView: partners.length,
          },
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <SwiperSlide key={index}>
            <Image
              src={partner.src}
              alt={partner.alt}
              height={40}
              width={partner.width}
              loading="lazy"
              className="cursor-grab"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
