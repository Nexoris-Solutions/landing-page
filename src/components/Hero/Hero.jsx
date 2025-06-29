import HeroContet from "./components/HeroContet";
import HeroVisual from "./components/HeroVisual";


function Hero() {
  return (
    <section
      className="w-full min-h-screen max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center bg-white relative overflow-hidden"
      role="region"
      aria-label="Hero section"
      id="hero"
    >
      <HeroContet />
      <HeroVisual />
    </section>
  );
}

export default Hero;
