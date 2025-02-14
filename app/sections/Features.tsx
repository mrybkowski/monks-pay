import Image from "next/image";

export function Features() {
  return (
    <section
      id="features"
      className="container mx-auto pt-28 px-5 flex flex-col items-center justify-center gap-12"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div data-aos="fade-up" data-aos-delay="0">
          <p className="uppercase font-semibold text-generalColors-secondary">
            features
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="font-urbanist font-bold text-generalColors-dark lg:text-4xl md:text-3xl text-2xl text-balance text-center">
            Why choose Monks Pay
            <br />
            for effortless payments?
          </h2>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col items-center justify-center gap-6 bg-primaryShades-10 rounded-2xl p-8"
        >
          <Image
            src="instant-payments.svg"
            alt="Instant payments"
            width={60}
            height={60}
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <h3 className="font-bold text-xl text-generalColors-dark font-urbanist text-center">
              Instant payments
            </h3>
            <p className="text-center text-generalColors-paragrah">
              Send money to friends or family in real-time, for free.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col items-center justify-center gap-6 bg-warning-20 rounded-2xl p-8"
        >
          <Image
            src="no-hidden-fees.svg"
            alt="No hidden fees"
            width={60}
            height={60}
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <h3 className="font-bold text-xl text-generalColors-dark font-urbanist text-center">
              No hidden fees
            </h3>
            <p className="text-center text-generalColors-paragrah">
              Clear and simple pricing. Always be aware of your costs.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col items-center justify-center gap-6 bg-tertiary-20 rounded-2xl p-8"
        >
          <Image
            src="digital-wallet.svg"
            alt="Digital wallet"
            width={60}
            height={60}
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <h3 className="font-bold text-xl text-generalColors-dark font-urbanist text-center">
              Digital wallet
            </h3>
            <p className="text-center text-generalColors-paragrah">
              Store money securely and make fast transfers or purchases.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-col items-center justify-center gap-6 bg-secondaryShades-10 rounded-2xl p-8"
        >
          <Image
            src="secure-transactions.svg"
            alt="Secure transactions"
            width={60}
            height={60}
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <h3 className="font-bold text-xl text-generalColors-dark font-urbanist text-center">
              Secure transactions
            </h3>
            <p className="text-center text-generalColors-paragrah">
              End-to-end encryption for all transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
