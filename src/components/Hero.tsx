import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-16 px-6"
    >
      {/* Vector line art background */}
      <HeroBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center gap-12 md:pl-[50px]">
          {/* Text Content */}
          <div className="flex flex-col items-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl md:text-3xl text-muted-foreground font-body mb-1"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2" style={{ fontFamily: "'Sour Gummy', sans-serif" }}
            >
              Ashish Kharuk
            </motion.h1>

            {/* Role with Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-4 mt-2"
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-body">
                Software Engineer
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/kharukash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="GitHub"
                >
                  <Github size={18} className="text-background" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashish-kharuk-511b841b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} fill="currentColor" />
                </a>
                <a
                  href="mailto:ashishkharuk2001@gmail.com?subject=Hello%20Ashish&body=Hi%20Ashish%2C%0A%0AI%20wanted%20to%20reach%20out%20to%20you%20regarding%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-[180px] h-[180px] rounded-full border-2 border-border overflow-hidden shrink-0"
          >
            <img
              src={profilePhoto}
              alt="Ashish Kharuk"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center gap-4 -mt-16">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-[150px] h-[150px] rounded-full border-2 border-border overflow-hidden shrink-0"
          >
            <img
              src={profilePhoto}
              alt="Ashish Kharuk"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          <div className="flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl text-muted-foreground font-body"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Sour Gummy', sans-serif" }}
            >
              Ashish Kharuk
            </motion.h1>
          </div>

          {/* Role with Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-4 mt-2"
          >
            <p className="text-xl text-muted-foreground font-body">
              Software Engineer
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/kharukash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="GitHub"
              >
                <Github size={18} className="text-background" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashish-kharuk-511b841b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} fill="currentColor" />
              </a>
              <a
                href="mailto:ashishkharuk2001@gmail.com?subject=Hello%20Ashish&body=Hi%20Ashish%2C%0A%0AI%20wanted%20to%20reach%20out%20to%20you%20regarding%20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
