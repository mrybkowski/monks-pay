import {
  CTA,
  Features,
  Hero,
  HowItWorks,
  Partners,
  Pricing,
  Security,
} from "./sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Partners />
      <HowItWorks />
      <Security />
      <Pricing />
      <CTA />
    </main>
  );
}
