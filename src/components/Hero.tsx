import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-6"
    >
      {/* Fixed background */}
      <div
        className="fixed inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlay */}
      <div className="fixed inset-0 -z-10 bg-background/70 dark:bg-background/80" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Social Icons - Above Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-foreground text-background rounded-md hover:opacity-80 transition-opacity"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-foreground text-background rounded-md hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        {/* Avatar and Name Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-secondary border-2 border-border flex items-center justify-center text-3xl md:text-4xl font-heading font-semibold text-foreground shrink-0"
          >
            AK
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground"
          >
            Ashish Kharuk
          </motion.h1>
        </div>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground font-body mt-6"
        >
          Software Engineer
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
