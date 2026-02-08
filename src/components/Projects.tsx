import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";
import portfolioPreview from "@/assets/portfolio-preview.png";
import superstoreDashboard from "@/assets/superstore-dashboard.png";
import phishingDetector from "@/assets/phishing-detector.png";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  previewImage?: string;
}

const projects: Project[] = [
  {
    title: "Featured Project",
    subtitle: "A Machine Learning Approach For Phishing Attack Detection",
    description: "Developed a system using Python that distinguished between legitimate and phishing websites. Implemented ML algorithms including Logistic Regression, SVM, Decision Tree, Random Forest, and XG Boost. Achieved highest accuracy of 98.80% with Random Forest. Research Paper published in Scopus indexed Journal.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
    githubUrl: "https://github.com/kharukash/A_Machine_Learning_Approach_for_Phishing_Attack_Detection",
    previewImage: phishingDetector,
  },
  {
    title: "Featured Project",
    subtitle: "Super Store Dashboard Using Power BI",
    description: "Created an intuitive appealing dashboard for analyzing the sales and profit of Super Store. Applied Time Series analysis to generate sales forecast for better business decisions.",
    technologies: ["Power BI", "DAX", "SQL", "Data Visualization"],
    githubUrl: "https://github.com/kharukash/Superstore-Dashboard",
    previewImage: superstoreDashboard,
  },
  {
    title: "Featured Project",
    subtitle: "Portfolio Website",
    description: "Vibecoded personal website with the help of Lovable AI and UX Pilot, emphasizing modern UI patterns.",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript"],
    githubUrl: "https://github.com/kharukash/kharukash.github.io",
    previewImage: portfolioPreview,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center mb-20`}
    >
      {/* Project Image */}
      <div className="w-full lg:w-1/2">
        <div className="bg-secondary/50 rounded-2xl aspect-video flex items-center justify-center border border-border overflow-hidden">
          {project.previewImage ? (
            <img 
              src={project.previewImage} 
              alt={project.subtitle} 
              className="w-full h-full object-contain"
              loading="eager"
            />
          ) : (
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{index + 1}</span>
              </div>
              <p className="text-muted-foreground text-sm">Project Preview</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className={`w-full lg:w-1/2 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
          {project.subtitle}
        </h3>
        
        <div className={`bg-card border border-border rounded-lg p-6 shadow-sm mb-4 ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className={`flex flex-wrap items-center gap-3 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-sm text-muted-foreground font-mono"
            >
              {tech}
            </span>
          ))}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary whitespace-nowrap">
              Things I've Built
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.subtitle} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
