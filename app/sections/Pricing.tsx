import { Button } from "@/components";
import Image from "next/image";

export function Pricing() {
  return (
    <section id="pricing" className="relative pb-24">
      <Image
        src="watermark.svg"
        alt="Watermark"
        width={225}
        height={409}
        className="absolute -right-24 -top-48"
      />
      <div className="flex flex-col items-center justify-center gap-2 px-5">
        <div data-aos="fade-up" data-aos-delay="0">
          <p className="uppercase font-semibold text-generalColors-secondary">
            pricing
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-full md:w-1/3"
        >
          <h2 className="font-urbanist font-bold text-generalColors-dark lg:text-4xl md:text-3xl text-2xl text-balance text-center">
            Simple transparent pricing no hidden fees
          </h2>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="px-6 py-10 rounded-2xl border border-primaryShades-20"
        >
          <div className="flex flex-col">
            <h3 className="text-generalColors-dark font-urbanist font-bold text-2xl">
              Free Plan
            </h3>
            <p className="font-outfit text-generalColors-paragrah">
              Free for personal payments
            </p>
          </div>
          <span className="flex items-end gap-1 mt-6">
            <p className="text-generalColors-dark text-6xl font-urbanist font-bold">
              $0
            </p>
            <p className="text-generalColors-paragrah font-outfit">/month</p>
          </span>
          <div className="flex items-center justify-center my-6">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border-50 to-transparent"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center">
              <Image
                src="checkmark-circle.svg"
                alt="Separator"
                width={28}
                height={28}
              />
              <p className="font-outfit text-generalColors-paragrah">
                Up to 100 transections per month
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src="checkmark-circle.svg"
                alt="Separator"
                width={28}
                height={28}
              />
              <p className="font-outfit text-generalColors-paragrah">
                Basic proud protection
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src="checkmark-circle.svg"
                alt="Separator"
                width={28}
                height={28}
              />
              <p className="font-outfit text-generalColors-paragrah">
                Email support
              </p>
            </div>
          </div>
          <Button className="mt-6 w-full" variant="outline">
            Get&nbsp;Free&nbsp;Plan
          </Button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="px-6 py-10 rounded-2xl border border-generalColors-dark bg-generalColors-dark"
        >
          <div className="flex flex-col">
            <h3 className="font-urbanist font-bold text-2xl text-generalColors-white">
              Advanced
            </h3>
            <p className="font-outfit text-darkShades-60">
              Minimal fees for advanced transactions
            </p>
          </div>
          <span className="flex items-end gap-1 mt-6">
            <p className="text-generalColors-white text-6xl font-urbanist font-bold">
              $19
            </p>
            <p className="text-darkShades-60 font-outfit">/month</p>
          </span>
          <div className="flex items-center justify-center my-6">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border-50 to-transparent"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center">
              <Image
                src="checkmark-circle-dark.svg"
                alt="Separator"
                width={28}
                height={28}
              />
              <p className="font-outfit text-darkShades-60">
                Up to 1000 transections per month
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src="checkmark-circle-dark.svg"
                alt="Separator"
                width={28}
                height={28}
              />
              <p className="font-outfit text-darkShades-60">
                Advanced proud protection
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src="checkmark-circle-dark.svg"
                alt="Separator"
                width={28}
                height={28}
              />
              <p className="font-outfit text-darkShades-60">
                Detailed transaction reports
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src="checkmark-circle-dark.svg"
                alt="Separator"
                width={28}
                height={28}
              />
              <p className="font-outfit text-darkShades-60">
                Priority email & chat support
              </p>
            </div>
            <Button className="mt-6 w-full" variant="primary">
              Get&nbsp;Advanced&nbsp;Plan
            </Button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="px-6 py-10 rounded-2xl border border-primaryShades-20"
        >
          <div className="flex flex-col">
            <h3 className="text-generalColors-dark font-urbanist font-bold text-2xl">
              Business
            </h3>
            <p className="font-outfit text-generalColors-paragrah">
              Premium business transactions
            </p>
          </div>
          <span className="flex items-end gap-1 mt-6">
            <p className="text-generalColors-dark text-6xl font-urbanist font-bold">
              $29
            </p>
            <p className="text-generalColors-paragrah font-outfit">/month</p>
          </span>
          <div className="flex items-center justify-center my-6">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border-50 to-transparent"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center">
              <Image
                src="checkmark-circle.svg"
                alt="Separator"
                width={28}
                height={28}
              />
              <p className="font-outfit text-generalColors-paragrah">
                Unlimited transections per month
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src="checkmark-circle.svg"
                alt="Separator"
                width={28}
                height={28}
              />
              <p className="font-outfit text-generalColors-paragrah">
                Premium proud protection
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src="checkmark-circle.svg"
                alt="Separator"
                width={28}
                height={28}
              />
              <p className="font-outfit text-generalColors-paragrah">
                Detailed transaction reports
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src="checkmark-circle.svg"
                alt="Separator"
                width={28}
                height={28}
              />
              <p className="font-outfit text-generalColors-paragrah">
                Priority email & chat support
              </p>
            </div>
          </div>
          <Button className="mt-6 w-full" variant="outline">
            Get&nbsp;Business&nbsp;Plan
          </Button>
        </div>
      </div>
    </section>
  );
}
