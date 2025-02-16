import { Button, SubpageHeader } from "@/components";

import Image from "next/image";

export default function Custom404() {
  return (
    <section id="404" className="container mx-auto px-5 mt-5">
      <SubpageHeader title="404 Error" />
      <div className="w-full md:w-1/2 m-auto flex flex-col items-center gap-5">
        <div data-aos="fade-up" data-aos-delay="0">
          <Image
            src="/404.webp"
            alt="404 error"
            width={2048}
            height={1207}
            loading="lazy"
          />
        </div>
        <div>
          <div data-aos="fade-up" data-aos-delay="0">
            <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-generalColors-dark text-center">
              There&apos;s something wrong
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="0">
            <p className="text-generalColors-paragrah text-center">
              The page are looking for doesn&apos;t exist or has been moved
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="0">
          <Button variant="primary" href="/">
            Go&nbsp;to&nbsp;Home&nbsp;Page
          </Button>
        </div>
      </div>
    </section>
  );
}
