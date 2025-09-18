import { motion } from "framer-motion";
import { projects, personalInfo, socialLinks } from "../data/portfolio";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaMobile, FaGamepad, FaUsers, FaCalendarAlt, FaChevronRight, FaArrowRight } from "react-icons/fa";

export const Projects = () => {
  // Get project statistics
  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const totalTechnologies = new Set(projects.flatMap(p => p.technologies)).size;
  const averageTeamSize = Math.round(projects.reduce((acc, p) => acc + p.teamSize, 0) / projects.length);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-display">
              <span className="gradient-text">My Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              A showcase of innovative solutions and creative implementations that demonstrate my technical expertise and problem-solving abilities
            </p>
          </motion.div>

          {/* Project Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: FaCode, value: `${totalProjects}+`, label: "Projects", color: "primary" },
              { icon: FaRocket, value: `${completedProjects}`, label: "Completed", color: "accent-blue" },
              { icon: FaUsers, value: `${averageTeamSize}`, label: "Avg Team Size", color: "accent-purple" },
              { icon: FaCalendarAlt, value: `${totalTechnologies}+`, label: "Technologies", color: "accent-pink" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card text-center group hover:scale-105"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center text-white text-xl ${
                  stat.color === 'primary' ? 'bg-primary-500' :
                  stat.color === 'accent-blue' ? 'bg-accent-blue' :
                  stat.color === 'accent-purple' ? 'bg-accent-purple' :
                  'bg-accent-pink'
                }`}>
                  <stat.icon />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-interactive group"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                      {project.category === 'Enterprise Web Application' ? <FaRocket /> :
                       project.category === 'IoT & Healthcare' ? <FaMobile /> :
                       project.category === 'Collaborative Platform' ? <FaCode /> :
                       <FaGamepad />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{project.name}</h3>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">{project.category}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-300"
                      >
                        <FaGithub />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent-blue hover:bg-accent-blue/10 transition-all duration-300"
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-primary-500" />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaUsers className="text-primary-500" />
                      {project.teamSize} team members
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-success/20 text-success' :
                      project.status === 'In Progress' ? 'bg-warning/20 text-warning' :
                      'bg-error/20 text-error'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium border border-primary-200 dark:border-primary-800"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <FaChevronRight className="text-primary-500 mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  {project.impact.slice(0, 3).map((impact, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold gradient-text">{impact.value}</div>
                      <div className="text-xs text-muted-foreground">{impact.metric}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-50/50 to-accent-blue/5 dark:from-primary-950/50 dark:to-accent-blue/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="card max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Interested in My Work?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                I'm always excited to work on new projects and collaborate with amazing people.
                Let's discuss how we can bring your ideas to life!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-gradient px-8 py-4 text-lg group"
                >
                  Start a Project
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary px-8 py-4 text-lg"
                >
                  Learn More About Me
                </motion.a>
              </div>

              <div className="mt-12">
                <p className="text-muted-foreground mb-6">Connect with me on social media</p>
                <div className="flex gap-6 justify-center">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-xl text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-300"
                    >
                      <link.icon />
                    </motion.a>
        ))}
      </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
