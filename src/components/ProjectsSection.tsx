import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Code, Database, Chrome, Layout, Bot, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import generated images
import projectWordpress from "@/assets/project-wordpress.jpg";
import projectAi from "@/assets/project-ai.jpg";
import projectFrontend from "@/assets/project-frontend.jpg";
import projectScraping from "@/assets/project-scraping.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectExtension from "@/assets/project-extension.jpg";

const projects = [
  {
    title: "WordPress Portfolio Website",
    description:
      "A clean, responsive website built to showcase my skills, projects, and experience.",
    tech: ["WordPress", "PHP", "Custom CSS"],
    status: "Personal Project",
    icon: Layout,
    color: "primary",
    image: projectWordpress,
    category: "web",
  },
  {
    title: "AI Automation Workflow",
    description:
      "Created automated workflows using AI tools to speed up research, verify data, and filter prospects.",
    tech: ["ChatGPT", "Perplexity", "Google Sheets"],
    status: "Faster turnaround, improved accuracy",
    icon: Bot,
    color: "secondary",
    image: projectAi,
    category: "automation",
  },
  {
    title: "Frontend Practice Projects",
    description:
      "Small landing pages and UI components built during HTML, CSS & JS practice.",
    tech: ["HTML", "CSS", "JavaScript", "VS Code"],
    status: "In Progress",
    icon: Code,
    color: "accent",
    image: projectFrontend,
    category: "web",
  },
  {
    title: "Data Scraping Tool",
    description:
      "Python automation tool for efficient web data extraction and processing.",
    tech: ["Python", "BeautifulSoup", "Selenium"],
    status: "Active Development",
    icon: Database,
    color: "primary",
    image: projectScraping,
    category: "automation",
  },
  {
    title: "Lead Enrichment Dashboard",
    description:
      "Real-time analytics dashboard for B2B prospect data visualization and insights.",
    tech: ["React", "Chart.js", "API Integration"],
    status: "Completed",
    icon: Terminal,
    color: "secondary",
    image: projectDashboard,
    category: "web",
  },
  {
    title: "Chrome Extension for Research",
    description:
      "Browser automation tool for streamlining research and data collection workflows.",
    tech: ["JavaScript", "Chrome APIs", "HTML/CSS"],
    status: "Beta Testing",
    icon: Chrome,
    color: "accent",
    image: projectExtension,
    category: "tools",
  },
];

const colorClasses = {
  primary: {
    border: "border-primary/30 group-hover:border-primary/60",
    glow: "group-hover:shadow-[0_0_40px_hsl(180_100%_50%/0.2)]",
    icon: "text-primary",
    bg: "bg-primary/10",
  },
  secondary: {
    border: "border-secondary/30 group-hover:border-secondary/60",
    glow: "group-hover:shadow-[0_0_40px_hsl(142_100%_50%/0.2)]",
    icon: "text-secondary",
    bg: "bg-secondary/10",
  },
  accent: {
    border: "border-accent/30 group-hover:border-accent/60",
    glow: "group-hover:shadow-[0_0_40px_hsl(280_100%_60%/0.2)]",
    icon: "text-accent",
    bg: "bg-accent/10",
  },
};

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Dev" },
  { id: "automation", label: "Automation" },
  { id: "tools", label: "Tools" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">🚀 PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={`font-mono text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                layout
                whileHover={{ y: -10 }}
                className={`group glass-card overflow-hidden ${colors.border} ${colors.glow} transition-all duration-500`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <motion.div 
                    className={`absolute top-4 right-4 p-2 rounded-lg ${colors.bg}`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`w-5 h-5 ${colors.icon}`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.3 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between">
                    <motion.span 
                      className={`text-xs font-mono ${colors.icon}`}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {project.status}
                    </motion.span>
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 rounded-lg ${colors.bg} ${colors.icon} opacity-0 group-hover:opacity-100 transition-opacity`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
