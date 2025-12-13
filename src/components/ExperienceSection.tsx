import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const responsibilities = [
  "Finding high-quality B2B leads using industry tools",
  "Cleaning data lists & verifying emails",
  "Building organized Google Sheets & Excel reports",
  "Using AI for research automation",
  "Finding decision makers through LinkedIn and websites",
  "Supporting clients with admin tasks & documentation",
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
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
            <span className="gradient-text">💼 WORK EXPERIENCE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative pl-8 md:pl-0 md:pr-0"
          >
            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 animate-glow-pulse z-10"
            />

            <div className="md:w-[calc(50%-2rem)] md:ml-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card-hover p-6 md:p-8"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        Senior Administrative Assistant
                      </h3>
                    </div>
                    <p className="text-lg text-secondary font-semibold">
                      Lead Researcher
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-mono text-primary">
                      2023 – Present
                    </span>
                  </div>
                </div>

                {/* Company */}
                <div className="mb-6 p-4 rounded-lg bg-muted/50 border border-border/50">
                  <p className="text-lg font-semibold text-foreground">
                    Task Minions
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Digital Solutions & Lead Generation
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {responsibilities.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
