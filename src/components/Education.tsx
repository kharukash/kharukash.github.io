import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface EducationItem {
  degree: string;
  institution: string;
  grade: string;
  duration: string;
}

const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Terna Engineering College",
    grade: "9.14 CGPA",
    duration: "2019 – 2023",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-heading font-medium text-muted-foreground uppercase tracking-widest mb-4 md:pl-[40px]">
            Education
          </h2>
          <div className="w-12 h-0.5 bg-accent mb-8 md:ml-[40px]" />

          <div className="space-y-6 md:pl-[20px]">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {edu.institution} | {edu.grade}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{edu.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
