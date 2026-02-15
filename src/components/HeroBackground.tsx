import heroWaveBg from "@/assets/hero-wave-bg.jpg";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="sticky top-0 h-screen w-full">
        <img
          src={heroWaveBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_35%] dark:invert-[0.85] dark:opacity-90"
        />
        <div className="absolute inset-0 bg-background/10 dark:bg-background/50" />
      </div>
    </div>
  );
};

export default HeroBackground;
