import { Button } from "@/components";

import Image from "next/image";

export function HowItWorks() {
  return (
    <section id="howItWorks" className="bg-darkShades-20 px-5">
      <div className="container mx-auto py-28 flex flex-col gap-12">
        <div className="flex flex-row items-end justify-between">
          <div>
            <div className="flex flex-col gap-2">
              <div data-aos="fade-up" data-aos-delay="0">
                <p className="uppercase font-semibold text-generalColors-secondary">
                  how it works
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
                <h2 className="font-urbanist font-bold text-generalColors-dark lg:text-4xl md:text-3xl text-2xl text-balance w-full md:w-1/2">
                  Make payments, transfers, and more in 3 simple steps
                </h2>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <Button className="hidden md:block" variant="primary">
              Get&nbsp;Started&nbsp;Now
            </Button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="grid grid-cols-1 xl:grid-cols-5 xl:place-items-center gap-6 bg-generalColors-white rounded-2xl p-6"
        >
          <div>
            <Image
              src="download-monks-pay.svg"
              alt="Download Monks Pay"
              width={75}
              height={96}
              loading="lazy"
            />
            <h3 className="font-bold text-xl text-generalColors-dark font-urbanist ">
              Download Monks Pay
            </h3>
            <p className="text-generalColors-paragrah text-balance">
              Get the Monks Pay app today from the App Store or Google Play
              hassle free.
            </p>
          </div>
          <Image
            src="separator.svg"
            alt="Separator"
            className="hidden xl:block"
            width={2}
            height={1}
            loading="lazy"
          />
          <hr className="xl:hidden" />
          <div>
            <Image
              src="link-your-bank-or-card.svg"
              alt="Link your bank or card"
              width={95}
              height={96}
              loading="lazy"
            />
            <h3 className="font-bold text-xl text-generalColors-dark font-urbanist ">
              Link your bank or card
            </h3>
            <p className="text-generalColors-paragrah text-balance">
              Easily connect your account in seconds with advanced security for
              peace of mind.
            </p>
          </div>
          <Image
            src="separator.svg"
            alt="Separator"
            className="hidden xl:block"
            width={2}
            height={1}
            loading="lazy"
          />
          <hr className="xl:hidden" />
          <div>
            <Image
              src="start-paying.svg"
              alt="Start paying"
              width={90}
              height={96}
              loading="lazy"
            />
            <h3 className="font-bold text-xl text-generalColors-dark font-urbanist ">
              Start paying
            </h3>
            <p className="text-generalColors-paragrah text-balance">
              Easily split bills, send money to friends, and make smooth online
              payments instantly.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="0">
          <Button className="block md:hidden" variant="primary">
            Get&nbsp;Started&nbsp;Now
          </Button>
        </div>
        <div data-aos="fade-up" data-aos-delay="0">
          <video
            src="https://framerusercontent.com/assets/AEAUoR5ZxTyDnTZ1AepyPSe0ng.mp4"
            controls={true}
            loop={false}
            className="rounded-2xl w-full border border-border-10"
          />
        </div>
      </div>
    </section>
  );
}
