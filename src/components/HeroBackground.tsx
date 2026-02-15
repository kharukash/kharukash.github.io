import bgLight from "@/assets/bg-light.png";
import bgDark from "@/assets/bg-dark.png";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="sticky top-0 h-screen w-full">
        <img
          src={bgLight}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[78%_18%] dark:hidden"
        />
        <img
          src={bgDark}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[78%_18%] hidden dark:block"
        />
        <div className="absolute inset-0 bg-background/20 dark:bg-background/45" />
      </div>
    </div>
  );
};

export default HeroBackground;
