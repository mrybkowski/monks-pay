export function Security() {
  return (
    <section id="security" className="container mx-auto py-28">
      <div className="flex flex-col md:flex-row items-end justify-between">
        <div>
          <div className="flex flex-col gap-2">
            <div data-aos="fade-up" data-aos-delay="0">
              <p className="uppercase font-semibold text-generalColors-secondary text-center md:text-left">
                security
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h2 className="font-urbanist font-bold text-generalColors-dark lg:text-4xl md:text-3xl text-2xl text-balance w-full md:w-3/4 text-center md:text-left">
                We protect your money at every step with Monks Pay
              </h2>
            </div>
          </div>
        </div>
        <div
          className="w-full xl:w-1/4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-generalColors-paragrah text-balance text-center md:text-left">
            Monks Pay ensures your money is protected at every step with
            advanced encryption, real-time monitoring, and multi-factor
            authentication.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-10 rounded-2xl gap-x-5 gap-y-12 bg-hero bg-cover mt-12"
      >
        <div>
          <div className="flex justify-center md:justify-start pb-6">
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 bg-generalColors-primary rounded-full animate-ping"></div>
              <div className="absolute inset-0 bg-generalColors-primary rounded-full"></div>
            </div>
          </div>
          <h3 className="font-urbanist text-generalColors-dark font-bold text-xl text-center md:text-left">
            Two-factor authentication
          </h3>
          <p className="font-outfit text-generalColors-paragrah text-balance text-center md:text-left">
            Two-factor authentication ensures added protection by using
            verification steps.
          </p>
        </div>
        <div>
          <div className="flex justify-center md:justify-start pb-6">
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 bg-danger-100 rounded-full animate-ping"></div>
              <div className="absolute inset-0 bg-danger-100 rounded-full"></div>
            </div>
          </div>
          <h3 className="font-urbanist text-generalColors-dark font-bold text-xl text-center md:text-left">
            Fraud detection and alerts
          </h3>
          <p className="font-outfit text-generalColors-paragrah text-balance text-center md:text-left">
            Fraud detection safeguards your money, sending instant alerts for
            any activity.
          </p>
        </div>
        <div>
          <div className="flex justify-center md:justify-start pb-6">
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 bg-success-100 rounded-full animate-ping"></div>
              <div className="absolute inset-0 bg-success-100 rounded-full"></div>
            </div>
          </div>
          <h3 className="font-urbanist text-generalColors-dark font-bold text-xl text-center md:text-left">
            Transaction notifications
          </h3>
          <p className="font-outfit text-generalColors-paragrah text-balance text-center md:text-left">
            Instant notifications for transaction keep you informed to manage
            your finances.
          </p>
        </div>
        <div>
          <div className="flex justify-center md:justify-start pb-6">
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 bg-tertiary-100 rounded-full animate-ping"></div>
              <div className="absolute inset-0 bg-tertiary-100 rounded-full"></div>
            </div>
          </div>
          <h3 className="font-urbanist text-generalColors-dark font-bold text-xl text-center md:text-left">
            Biometric access
          </h3>
          <p className="font-outfit text-generalColors-paragrah text-balance text-center md:text-left">
            Easily and securely log in with biometric features, and facial
            recognition.
          </p>
        </div>
        <div>
          <div className="flex justify-center md:justify-start pb-6">
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 bg-warning-100 rounded-full animate-ping"></div>
              <div className="absolute inset-0 bg-warning-100 rounded-full"></div>
            </div>
          </div>
          <h3 className="font-urbanist text-generalColors-dark font-bold text-xl text-center md:text-left">
            End-to-end encryption
          </h3>
          <p className="font-outfit text-generalColors-paragrah text-balance text-center md:text-left">
            By encryption, protecting your data from unauthorized access.
          </p>
        </div>
        <div>
          <div className="flex justify-center md:justify-start pb-6">
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 bg-generalColors-secondary rounded-full animate-ping"></div>
              <div className="absolute inset-0 bg-generalColors-secondary rounded-full"></div>
            </div>
          </div>
          <h3 className="font-urbanist text-generalColors-dark font-bold text-xl text-center md:text-left">
            24/7 Protection support
          </h3>
          <p className="font-outfit text-generalColors-paragrah text-balance text-center md:text-left">
            Our dedicated team is available around the clock to help you.
          </p>
        </div>
      </div>
    </section>
  );
}
