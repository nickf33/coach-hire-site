import HeroWrap from "./_components/sections/hero/HeroWrap";
import GridWrap from "./_components/sections/grid/GridWrap";
import SliderWrap from "./_components/sections/slider/SliderWrap";
import FAQWrap from "./_components/sections/faq/FAQWrap";
import FooterWrap from "./_components/layout/footer/FooterWrap";

export default function Home() {
  return (
    <main className="relative">
      <HeroWrap />
      <GridWrap />
      <SliderWrap />
      <FAQWrap />
      <FooterWrap />
      {/* <div className="z-[999] h-[50rem] w-[50rem] absolute bottom-[-6%] left-[-25%] bg-gradient-radial from-accent via-transparent to-transparent opacity-40" /> */}
    </main>
  );
}
