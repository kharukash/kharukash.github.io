import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 dark:from-background dark:via-background dark:to-secondary/20" />
      
      {/* Flowing wave line art - inspired by reference */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Primary flowing wave group - top right */}
        <g className="opacity-30 dark:opacity-20">
          {[...Array(25)].map((_, i) => (
            <motion.path
              key={`wave-top-${i}`}
              d={`M ${800 + i * 8} -50 Q ${1100 + i * 10} ${150 + i * 15} ${1400 + i * 5} ${300 + i * 8} T ${1920} ${200 + i * 20}`}
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2 + i * 0.05, delay: i * 0.03, ease: "easeOut" }}
            />
          ))}
        </g>

        {/* Secondary wave group - curving from top */}
        <g className="opacity-25 dark:opacity-15">
          {[...Array(20)].map((_, i) => (
            <motion.path
              key={`wave-curve-${i}`}
              d={`M ${600 + i * 12} -100 Q ${900 + i * 15} ${100 + i * 20} ${1200 + i * 8} ${400 + i * 10} Q ${1500 + i * 5} ${600 + i * 8} ${1920} ${500 + i * 12}`}
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2.5 + i * 0.04, delay: 0.5 + i * 0.04, ease: "easeOut" }}
            />
          ))}
        </g>

        {/* Tertiary wave group - bottom flowing */}
        <g className="opacity-20 dark:opacity-12">
          {[...Array(15)].map((_, i) => (
            <motion.path
              key={`wave-bottom-${i}`}
              d={`M ${1000 + i * 15} ${300 + i * 20} Q ${1300 + i * 10} ${500 + i * 15} ${1600 + i * 8} ${700 + i * 10} T ${1920} ${800 + i * 15}`}
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2.8 + i * 0.05, delay: 1 + i * 0.05, ease: "easeOut" }}
            />
          ))}
        </g>

        {/* Accent color wave highlights */}
        <g className="opacity-15 dark:opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={`accent-wave-${i}`}
              d={`M ${700 + i * 25} -20 Q ${1050 + i * 20} ${200 + i * 30} ${1350 + i * 15} ${380 + i * 20} T ${1920} ${350 + i * 35}`}
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2.2, delay: 0.8 + i * 0.1, ease: "easeOut" }}
            />
          ))}
        </g>

        {/* Fine detail lines */}
        <g className="opacity-15 dark:opacity-10">
          {[...Array(30)].map((_, i) => (
            <motion.path
              key={`fine-${i}`}
              d={`M ${850 + i * 6} ${-30 + i * 5} Q ${1150 + i * 8} ${180 + i * 12} ${1450 + i * 4} ${350 + i * 8} T ${1920} ${280 + i * 18}`}
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1.8 + i * 0.03, delay: 0.2 + i * 0.02, ease: "easeOut" }}
            />
          ))}
        </g>
      </svg>
      
      {/* Soft overlay for text readability */}
      <div className="absolute inset-0 bg-background/20 dark:bg-background/30" />
    </div>
  );
};

export default HeroBackground;
