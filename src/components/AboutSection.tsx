import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, Rocket } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">👤 ABOUT ME</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card-hover p-8 md:p-12"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg md:text-xl">
                I'm a{" "}
                <span className="text-primary font-semibold">
                  detail-oriented digital professional
                </span>{" "}
                specializing in{" "}
                <span className="text-secondary font-semibold">
                  B2B lead generation
                </span>
                , data research, and WordPress development. I love working with
                tools, solving problems, and building clean, structured systems
                that make work easier and faster.
              </p>

              <p className="text-lg md:text-xl">
                I'm currently working at{" "}
                <span className="text-accent font-semibold">Task Minions</span>{" "}
                as a Senior Administrative Assistant & Lead Researcher, while
                also building my skills in web development and AI-powered
                automation.
              </p>

              <div className="pt-6 border-t border-border/50">
                <h3 className="text-foreground font-bold text-xl mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  My Mission
                </h3>
                <div className="glass-card p-6 border-l-4 border-primary">
                  <p className="text-lg">
                    <span className="text-primary">👉</span> Create meaningful
                    digital work and grow into a strong tech-enabled
                    professional.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-border/50"
            >
              {[
                { label: "Years Experience", value: "2+" },
                { label: "Projects Completed", value: "50+" },
                { label: "Leads Generated", value: "10K+" },
                { label: "Happy Clients", value: "20+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
