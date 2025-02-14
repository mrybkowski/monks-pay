import { CircleCheck, TrendingUp } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-hero bg-cover rounded-b-3xl mx-5 sm:mx-10 px-5 pt-32 xl:pt-20">
      <div className="container mx-auto grid md:grid-cols-2 items-end gap-5">
        <div className="flex flex-col gap-10 h-full justify-center items-center md:items-start">
          <div className="flex flex-col gap-2">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="uppercase font-semibold text-generalColors-secondary text-center md:text-left"
            >
              <p>easy payment</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h1 className="font-urbanist font-bold text-generalColors-dark lg:text-6xl md:text-5xl text-4xl text-balance text-center md:text-left">
                Pay&nbsp;
                <span className="relative inline-block">
                  fast and smarter
                  <Image
                    width={144}
                    height={48}
                    src="underline.svg"
                    alt="underline"
                    className="absolute bottom-[-5px] left-0 w-full h-auto"
                  />
                </span>
                from anywhere
              </h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-generalColors-paragrah text-lg text-balance text-center md:text-left">
                Experience the future of payments: fast, secure, and tailored
                for the next generation&apos;s convenience and trust.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 pb-5">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex item-center justify-start gap-3"
            >
              <Link href="https://www.apple.com/">
                <Image
                  width={144}
                  height={48}
                  src={"apple-store.svg"}
                  alt="Apple Store Icon"
                />
              </Link>
              <Link href="https://play.google.com/store/games/">
                <Image
                  width={144}
                  height={48}
                  src={"google-play.svg"}
                  alt={"Google Play Icon"}
                />
              </Link>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center justify-start gap-3 text-darkShades-90"
            >
              <span className="flex items-center gap-1">
                <CircleCheck />
                <p>No Card required</p>
              </span>
              <span className="flex items-center gap-1">
                <CircleCheck />
                <p>Fast acceptance</p>
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div data-aos="fade-up" data-aos-delay="0">
            <Image
              width={611}
              height={620}
              src={"/hero-new.webp"}
              alt={"Hero"}
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="absolute top-[85%] xl:top-[75%] left-0 bg-generalColors-white rounded-lg p-5 shadow-sm"
          >
            <p className="font-urbanist font-semibold text-generalColors-dark text-base">
              Payment Received
            </p>
            <p className="font-urbanist text-generalColors-primary font-bold text-lg">
              +35,890.00
            </p>
            <div className="flex flex-row items-center justify-center gap-10">
              <p className="font-outfit text-generalColors-paragrah text-sm">
                1th Jan, 2024
              </p>
              <div className="text-badge-success flex flex-row items-center gap-2">
                <p className="font-outfit text-sm">3.09%</p>
                <TrendingUp size={14} />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="absolute top-[45%] right-0 bg-generalColors-white rounded-lg p-5 shadow-sm flex flex-row gap-5"
          >
            <Image width={96} height={40} src={"avatars.svg"} alt="Avatars" />
            <div className="flex flex-col">
              <p className="text-generalColors-dark font-urbanist font-bold">
                120K+
              </p>
              <p className="text-generalColors-paragrah font-outfit text-sm">
                Active users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
