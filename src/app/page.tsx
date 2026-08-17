import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Journey } from "@/components/sections/journey";
import { Territories } from "@/components/sections/territories";
import { WellnessBand } from "@/components/sections/wellness-band";
import { Partners } from "@/components/sections/partners";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Journey />
      <Territories />
      <WellnessBand />
      <Partners />
      <CtaBand />
    </>
  );
}
