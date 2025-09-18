import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo, experiences, projects, skills, socialLinks } from "../data/portfolio";
import { FaCode, FaRocket, FaUsers, FaAward, FaDownload, FaArrowRight } from "react-icons/fa";

export const Home = () => {
  const totalProjects = projects.length;
  const totalExperience = experiences.reduce((acc, exp) => {
    const years = exp.duration.includes('Present') ? 1 : 
                  exp.duration.includes('months') ? 0.5 : 1;
    return acc + years;
  }, 0);
  const totalSkills = skills.length;
  const recentAchievements = experiences[0]?.achievements?.length || 0;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Personal Brand */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Greeting */}
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-lg text-muted-foreground font-medium">
                  Hello, I'm
                </p>
                <h1 className="text-5xl lg:text-7xl font-bold font-display text-balance">
                  <span className="gradient-text">{personalInfo.name}</span>
                </h1>
                <div className="text-2xl lg:text-3xl text-muted-foreground">
          <TypeAnimation
            sequence={[
                      personalInfo.title,
                      2000,
                      personalInfo.subtitle,
                      2000,
                      "Building tomorrow's digital solutions today",
                      2000,
                    ]}
                    speed={50}
            repeat={Infinity}
                    className="font-medium"
          />
        </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  {personalInfo.bio}
                </p>
                
                {/* Key Highlights */}
                <div className="flex flex-wrap gap-3">
                  {[
                    "5+ Years Experience",
                    "Full-Stack Development", 
                    "Cloud Solutions",
                    "Team Leadership"
                  ].map((highlight, index) => (
                    <motion.span
                      key={highlight}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800"
                    >
                      {highlight}
                    </motion.span>
                  ))}
      </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-gradient px-8 py-4 text-lg group"
                >
                  Learn More About Me
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary px-8 py-4 text-lg"
                >
                  View My Work
                </motion.a>
              </motion.div>

              {/* Social Links */}
        <motion.div
                initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="pt-8"
              >
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-xl text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-300"
                    >
                      <link.icon />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
        </motion.div>

            {/* Right Column - Visual Elements */}
        <motion.div
              initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Profile Image with Sophisticated Design */}
              <div className="relative mx-auto max-w-md">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/30 to-accent-purple/30 rounded-3xl blur-2xl animate-pulse-slow"></div>
                
                {/* Main Image Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="relative glass-card rounded-3xl p-8"
                >
                  <div className="aspect-square relative">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg"
                  >
                    <FaCode />
        </motion.div>
                  
        <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent-purple to-accent-pink rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg"
                  >
                    <FaRocket />
                  </motion.div>
                </motion.div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: FaUsers, value: `${Math.round(totalExperience)}+`, label: "Years Experience", color: "primary" },
                  { icon: FaCode, value: `${totalSkills}+`, label: "Technologies", color: "accent-blue" },
                  { icon: FaRocket, value: `${totalProjects}+`, label: "Projects", color: "accent-purple" },
                  { icon: FaAward, value: `${recentAchievements}+`, label: "Recent Achievements", color: "accent-pink" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
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
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50/50 to-accent-blue/5 dark:from-primary-950/50 dark:to-accent-blue/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
              Professional Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering measurable results through innovative technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "99.9%", label: "System Uptime", description: "Reliable applications" },
              { metric: "40%", label: "Team Productivity", description: "Leadership impact" },
              { metric: "60%", label: "Faster Deployments", description: "CI/CD optimization" },
              { metric: "50%", label: "Performance Boost", description: "Query optimization" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
        </motion.div>
            ))}
          </div>
      </div>
      </section>
    </div>
  );
};
