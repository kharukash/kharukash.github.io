import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/*
        Sticky keeps the background visually fixed while the Home section is visible,
        but it disappears as soon as the next section (About) scrolls in.
      */}
      <div className="sticky top-0 h-screen w-full">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 dark:from-background dark:via-background dark:to-secondary/20" />

        {/* Flowing wave line art - inspired by reference */}
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Primary flowing wave group */}
          <g className="opacity-45 dark:opacity-30">
            {[...Array(26)].map((_, i) => (
              <motion.path
                key={`wave-top-${i}`}
                d={`M ${700 + i * 10} -80 Q ${1050 + i * 12} ${120 + i * 18} ${1380 + i * 6} ${320 + i * 10} T 1920 ${240 + i * 18}`}
                fill="none"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="0.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 2.1 + i * 0.03, delay: i * 0.025, ease: "easeOut" }}
              />
            ))}
          </g>

          {/* Secondary wave group */}
          <g className="opacity-35 dark:opacity-24">
            {[...Array(20)].map((_, i) => (
              <motion.path
                key={`wave-curve-${i}`}
                d={`M ${560 + i * 14} -120 Q ${900 + i * 16} ${90 + i * 22} ${1220 + i * 9} ${420 + i * 12} Q ${1500 + i * 6} ${620 + i * 10} 1920 ${520 + i * 12}`}
                fill="none"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="0.6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 2.5 + i * 0.03, delay: 0.35 + i * 0.03, ease: "easeOut" }}
              />
            ))}
          </g>

          {/* Accent highlight waves */}
          <g className="opacity-22 dark:opacity-16">
            {[...Array(10)].map((_, i) => (
              <motion.path
                key={`accent-wave-${i}`}
                d={`M ${720 + i * 22} -20 Q ${1080 + i * 20} ${210 + i * 30} ${1360 + i * 14} ${400 + i * 18} T 1920 ${370 + i * 32}`}
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 2.2, delay: 0.7 + i * 0.08, ease: "easeOut" }}
              />
            ))}
          </g>

          {/* Fine detail lines */}
          <g className="opacity-20 dark:opacity-14">
            {[...Array(28)].map((_, i) => (
              <motion.path
                key={`fine-${i}`}
                d={`M ${820 + i * 7} ${-40 + i * 6} Q ${1140 + i * 9} ${180 + i * 13} ${1460 + i * 4} ${360 + i * 9} T 1920 ${300 + i * 18}`}
                fill="none"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="0.35"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.55 }}
                transition={{ duration: 1.9 + i * 0.02, delay: 0.15 + i * 0.02, ease: "easeOut" }}
              />
            ))}
          </g>
        </svg>

        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-background/35 dark:bg-background/50" />
      </div>
    </div>
  );
};

export default HeroBackground;
