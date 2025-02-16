import { Button } from "@/components";

export function CTA() {
  return (
    <section
      id="cta"
      className="container mx-auto py-28 bg-ctaMobile md:bg-cta bg-cover flex flex-col items-center justify-center gap-5 rounded-2xl"
    >
      <div data-aos="fade-up" data-aos-delay="0" className="w-full md:w-1/2">
        <p className="font-urbanist font-bold text-4xl text-generalColors-white text-balance text-center">
          Ready to experience seamless secure payments globally
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" className="w-full md:w-1/2">
        <p className="font-outfit text-balance text-generalColors-white text-center">
          Ready for hassle-free, secure payments anywhere in the world? Start
          using Monks Pay today it&lsquo;s fast, free, and focused on keeping
          your transactions secure!
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex flex-col items-center justify-center md:flex-row gap-5 mt-5"
      >
        <Button variant="primary" href="#">
          Download&nbsp;the&nbsp;App
        </Button>
        <Button
          className="border-generalColors-white text-generalColors-white"
          variant="outline"
          href="#"
        >
          Get&nbsp;Started&nbsp;Now
        </Button>
      </div>
    </section>
  );
}
