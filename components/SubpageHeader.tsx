interface ISubpageHeaderProps {
  title: string;
}

export function SubpageHeader({ title }: ISubpageHeaderProps) {
  return (
    <div className="bg-heroMobile md:bg-hero bg-cover rounded-3xl bg-bottom mb-12">
      <div data-aos="fade-up" data-aos-delay="0">
        <h2 className="text-5xl font-urbanist font-bold pt-40 pb-20 text-center text-generalColors-dark">
          {title}
        </h2>
      </div>
    </div>
  );
}
