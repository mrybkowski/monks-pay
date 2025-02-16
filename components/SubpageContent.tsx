interface ISubpageContentProps {
  header: string;
  texts: string[];
}

export function SubpageContent({ header, texts }: ISubpageContentProps) {
  return (
    <div className="w-full md:w-1/2 m-auto">
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        className="py-5 flex flex-col gap-3"
      >
        <h3 className="font-urbanist font-bold text-2xl text-generalColors-dark">
          {header}
        </h3>
        {texts.map((text, index) => (
          <p key={index} className="text-generalColors-paragrah">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
