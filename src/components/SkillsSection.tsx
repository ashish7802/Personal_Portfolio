import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Users, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    color: "primary",
    skills: [
      "HTML",
      "CSS",
      "PHP",
      "JavaScript",
      "Python",
      "MongoDB (Basic)",
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "secondary",
    skills: [
      "WordPress Website Development",
      "Theme & Plugin Customization",
      "Hosting & cPanel Setup",
      "Responsive Layouts",
      "VS Code Workflow",
    ],
  },
  {
    title: "Lead Generation & Admin",
    icon: Users,
    color: "accent",
    skills: [
      "B2B Prospect Research",
      "Email Verification & List Cleaning",
      "Google Sheets & Excel Reporting",
      "CRM Data Formatting",
      "AI-based Data Extraction",
      "LinkedIn Decision-Maker Research",
    ],
  },
  {
    title: "Tools I Use Daily",
    icon: Wrench,
    color: "primary",
    skills: [
      "ZoomInfo, LinkedIn, Sales Navigator",
      "Apollo, Seamless.ai, Hunter.io",
      "Clearbit, NeverBounce",
      "WordPress, VS Code",
      "Google Sheets, Excel",
      "ChatGPT, Gemini, Grok, Perplexity, Notion AI",
    ],
  },
];

const colorClasses = {
  primary: {
    icon: "text-primary",
    border: "border-primary/30 hover:border-primary/60",
    glow: "hover:shadow-[0_0_30px_hsl(180_100%_50%/0.3)]",
    bg: "bg-primary/10",
  },
  secondary: {
    icon: "text-secondary",
    border: "border-secondary/30 hover:border-secondary/60",
    glow: "hover:shadow-[0_0_30px_hsl(142_100%_50%/0.3)]",
    bg: "bg-secondary/10",
  },
  accent: {
    icon: "text-accent",
    border: "border-accent/30 hover:border-accent/60",
    glow: "hover:shadow-[0_0_30px_hsl(280_100%_60%/0.3)]",
    bg: "bg-accent/10",
  },
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-card/30">
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
            <span className="gradient-text">🛠️ SKILLS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`glass-card p-6 md:p-8 border ${colors.border} ${colors.glow} transition-all duration-500 group`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${colors.bg}`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15 + skillIndex * 0.05 + 0.3,
                      }}
                      className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <span className={`w-2 h-2 rounded-full ${colors.bg} ${colors.icon}`} />
                      <span className="font-mono text-sm">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
