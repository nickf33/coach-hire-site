import HeroWrap from "./_components/sections/hero/HeroWrap";
import GridWrap from "./_components/sections/grid/GridWrap";
import SliderWrap from "./_components/sections/slider/SliderWrap";
import FAQWrap from "./_components/sections/faq/FAQWrap";
import BlogWrap from "./_components/sections/blog/BlogWrap";
import FooterWrap from "./_components/layout/footer/FooterWrap";

export default function Home() {
  return (
    <main className="h-screen">
      <HeroWrap />
      <GridWrap />
      <SliderWrap />
      <FAQWrap />
      {/* <BlogWrap /> */}
      <FooterWrap />
    </main>
  );
}
