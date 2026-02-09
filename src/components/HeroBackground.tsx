import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 dark:from-background dark:via-background dark:to-secondary/20" />
      
      {/* Animated SVG line art */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 dark:opacity-15"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Flowing curves */}
        <motion.path
          d="M0 400 Q 480 200 960 400 T 1920 400"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 500 Q 480 300 960 500 T 1920 500"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 600 Q 480 400 960 600 T 1920 600"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, delay: 0.4, ease: "easeInOut" }}
        />
        
        {/* Geometric circles */}
        <motion.circle
          cx="150"
          cy="200"
          r="80"
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="0.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.circle
          cx="1750"
          cy="300"
          r="120"
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="0.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        <motion.circle
          cx="1600"
          cy="800"
          r="60"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="0.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
        
        {/* Dotted grid pattern */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <g key={i}>
              {[...Array(12)].map((_, j) => (
                <circle
                  key={`${i}-${j}`}
                  cx={100 + i * 100}
                  cy={100 + j * 100}
                  r="1"
                  fill="hsl(var(--muted-foreground))"
                />
              ))}
            </g>
          ))}
        </motion.g>
        
        {/* Diagonal lines */}
        <motion.line
          x1="0"
          y1="1080"
          x2="600"
          y2="480"
          stroke="hsl(var(--accent))"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.8, delay: 0.3 }}
        />
        <motion.line
          x1="1920"
          y1="0"
          x2="1320"
          y2="600"
          stroke="hsl(var(--accent))"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.8, delay: 0.5 }}
        />
        
        {/* Abstract polygons */}
        <motion.polygon
          points="100,700 200,650 180,750"
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="0.5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        <motion.polygon
          points="1700,150 1800,100 1820,200 1720,220"
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="0.5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        />
      </svg>
      
      {/* Soft overlay for text readability */}
      <div className="absolute inset-0 bg-background/40 dark:bg-background/50" />
    </div>
  );
};

export default HeroBackground;
