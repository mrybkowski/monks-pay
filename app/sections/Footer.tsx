import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[300px] h-[150px] overflow-hidden rounded-t-full blur-3xl">
        <div className="w-[300px] h-[300px] rounded-full bg-radialBlue -z-10 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-5 mt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="flex flex-col xl:col-span-3 xl:w-1/4"
          >
            <Image
              width={174}
              height={42}
              src="logo.svg"
              alt="logo"
              loading="lazy"
            />
            <p className="font-outfit text-generalColors-paragrah text-balance">
              Monks Pay offers secure, seamless, and fee-free payments for
              effortless global transactions.
            </p>
          </div>
          <div className="grid grid-cols-2 mt-12 md:mt-0 gap-12">
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="font-urbanist font-bold text-xl text-generalColors-dark mb-4">
                Short links
              </p>
              <ul className="flex flex-col gap-3 text-generalColors-paragrah">
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
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="font-urbanist font-bold text-xl text-generalColors-dark mb-4">
                Other pages
              </p>
              <ul className="flex flex-col gap-3 text-generalColors-paragrah">
                <li className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-generalColors-primary">
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
                <li className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-generalColors-primary">
                  <Link href="/terms-and-conditions">Terms & conditionss</Link>
                </li>
                <li className="hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-generalColors-primary">
                  <Link href="/404">404</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-12" />
        <span className="text-generalColors-paragrah font-outfit">
          <p>
            proudly powered by:&nbsp;
            <strong className="text-generalColors-paragrah">
              Marcin Rybkowski
            </strong>
          </p>
        </span>
      </div>
    </footer>
  );
}
