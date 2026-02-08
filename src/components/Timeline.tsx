import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import aspireLogo from "@/assets/aspire-logo.png";
import CareerGrowthModal from "@/components/CareerGrowthModal";

interface CareerPosition {
  title: string;
  duration: string;
  description?: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  skills: string[];
  logo: string;
  careerGrowth: CareerPosition[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Aspire Digital Technologies",
    location: "Remote",
    duration: "2024 – Present",
    skills: ["Implemented End-to-End Quote-to-Cash process for APG CPQ 2.0 Project", "SAP CPQ, Salesforce Integration"],
    logo: aspireLogo,
    careerGrowth: [
      {
        title: "Software Engineer",
        duration: "2024 – Present",
        description: `• Part of APG CPQ Project - Applied Materials.
• Worked across multiple SAP CPQ environments including Development, QA and Production.
• Developed configurable Products, Quote and Custom Tables within SAP CPQ.
• Designed and Implemented efficient pricing for different markets based on Exchange Rates using Python and SQL.
• Created CTX tags for event based Quote Field data population, Quote Visibility control and Document Generation.
• Customized SAP CPQ workflows, Quote approvals and Email notifications.
• Conducted onsite visits to Bangalore during the ITC/UAT phase to ensure smooth testing and coordination.
• Oversaw and Ensured timely resolution of all incidents during the Hypercare phase.
• Currently part of a 2-member CIP team working on future enhancements.`,
      },
      {
        title: "Junior Software Engineer",
        duration: "2023 – 2024",
        description: "• Practical Exposure to SAP CPQ configuration, pricing and quoting.",
      },
    ],
  },
];

// Desktop Experience Card - alternating layout
const DesktopExperienceCard = ({
  item,
  index,
  side,
  onTitleClick,
}: {
  item: ExperienceItem;
  index: number;
  side: "left" | "right";
  onTitleClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="relative flex items-center">
      {/* Left side content or empty space */}
      <div className={`w-[calc(50%-3rem)] ${side === "left" ? "" : "text-right"}`}>
        {side === "left" ? (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div 
              onClick={onTitleClick}
              className="bg-card border border-border rounded-lg p-6 shadow-sm cursor-pointer hover:border-primary/50 transition-colors"
            >
              <p className="text-muted-foreground font-medium">{item.company}</p>
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{item.location}</p>
              <div className="text-sm text-muted-foreground mt-3 space-y-1">
                {item.skills.map((skill, i) => (
                  <p key={i}>• {skill}</p>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">{item.duration}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-end pr-4"
          >
            <p className="text-sm font-medium text-foreground">{item.duration}</p>
            <p className="text-sm text-muted-foreground">{item.location}</p>
          </motion.div>
        )}
      </div>

      {/* Center line with company logo */}
      <div className="relative w-24 flex justify-center items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
          onClick={onTitleClick}
          className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center z-10 overflow-hidden cursor-pointer hover:border-primary transition-colors"
        >
          <img src={item.logo} alt={item.company} className="w-8 h-8 object-contain" />
        </motion.div>
      </div>

      {/* Right side content or empty space */}
      <div className={`w-[calc(50%-3rem)] ${side === "right" ? "" : ""}`}>
        {side === "right" ? (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div 
              onClick={onTitleClick}
              className="bg-card border border-border rounded-lg p-6 shadow-sm cursor-pointer hover:border-primary/50 transition-colors"
            >
              <p className="text-muted-foreground font-medium">{item.company}</p>
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{item.location}</p>
              <div className="text-sm text-muted-foreground mt-3 space-y-1">
                {item.skills.map((skill, i) => (
                  <p key={i}>• {skill}</p>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">{item.duration}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-start pl-4"
          >
            <p className="text-sm font-medium text-foreground">{item.duration}</p>
            <p className="text-sm text-muted-foreground">{item.location}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Mobile Experience Card - LinkedIn style (line on left)
const MobileExperienceCard = ({
  item,
  index,
  isLast,
  onTitleClick,
}: {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
  onTitleClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="relative flex items-start gap-3">
      {/* Left line with logo */}
      <div className="relative flex flex-col items-center shrink-0">
        {/* Vertical line above logo */}
        <div className="w-px h-4 bg-border" />
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
          onClick={onTitleClick}
          className="w-10 h-10 bg-background rounded-full flex items-center justify-center z-10 overflow-hidden shrink-0 cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all border border-border"
        >
          <img src={item.logo} alt={item.company} className="w-5 h-5 object-contain" />
        </motion.div>
        {/* Line below logo */}
        {!isLast && (
          <div className="flex-1 w-px bg-border min-h-[60px]" />
        )}
      </div>

      {/* Content Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex-1 mb-4"
      >
        <div 
          onClick={onTitleClick}
          className="bg-card border border-border rounded-lg p-4 shadow-sm cursor-pointer hover:border-primary/50 transition-colors"
        >
          <p className="text-muted-foreground font-medium">{item.company}</p>
          <h3 className="text-lg font-heading font-bold text-foreground mt-1">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{item.location}</p>
          <div className="text-sm text-muted-foreground mt-3 space-y-1">
            {item.skills.map((skill, i) => (
              <p key={i}>• {skill}</p>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-3">{item.duration}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  return (
    <>
      <section id="experience" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          {/* Section Title - Left aligned like About/Education */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-sm font-heading font-medium text-muted-foreground uppercase tracking-widest mb-4 md:pl-[30px]">
              Experience
            </h2>
            <div className="w-12 h-0.5 bg-accent md:ml-[30px]" />
          </motion.div>

          {/* Timeline - Desktop */}
          {!isMobile && (
            <div className="relative">
              {/* Center vertical line - positioned through the middle of the logo container */}
              <div className="absolute left-[calc(50%+25px)] transform -translate-x-1/2 w-px h-full bg-border" />

              {/* Experience items - alternating left and right */}
              <div className="space-y-16 md:pl-[50px]">
                {experiences.map((exp, index) => (
                  <DesktopExperienceCard
                    key={exp.title + exp.company}
                    item={exp}
                    index={index}
                    side={index % 2 === 0 ? "left" : "right"}
                    onTitleClick={() => setSelectedExperience(exp)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Timeline - Mobile (LinkedIn style) */}
          {isMobile && (
            <div className="relative pl-2">
              {experiences.map((exp, index) => (
                <MobileExperienceCard
                  key={exp.title + exp.company}
                  item={exp}
                  index={index}
                  isLast={index === experiences.length - 1}
                  onTitleClick={() => setSelectedExperience(exp)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Career Growth Modal */}
      {selectedExperience && (
        <CareerGrowthModal
          open={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          company={selectedExperience.company}
          logo={selectedExperience.logo}
          positions={selectedExperience.careerGrowth}
        />
      )}
    </>
  );
};

export default Timeline;
