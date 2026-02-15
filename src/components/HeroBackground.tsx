import bgLight from "@/assets/bg-light.png";
import bgDark from "@/assets/bg-dark.png";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="sticky top-0 h-screen w-full">
        <img
          src={bgLight}
          alt=""
          className="absolute inset-0 h-[85%] w-[85%] object-contain object-[80%_85%] bottom-0 right-0 ml-auto mt-auto dark:hidden"
        />
        <img
          src={bgDark}
          alt=""
          className="absolute inset-0 h-[85%] w-[85%] object-contain object-[80%_85%] bottom-0 right-0 ml-auto mt-auto hidden dark:block"
        />
        <div className="absolute inset-0 bg-background/20 dark:bg-background/45" />
      </div>
    </div>
  );
};

export default HeroBackground;
