import { motion } from "framer-motion";
import { personalInfo, experiences, education, skills, achievements, certifications, socialLinks } from "../data/portfolio";
import { FaDownload, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap, FaAward, FaCode, FaUsers, FaRocket, FaChevronRight } from "react-icons/fa"; 


export const About = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

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
              <span className="gradient-text">About Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              {personalInfo.tagline}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Personal Story */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="card"
              >
                <h2 className="text-3xl font-bold mb-6 gradient-text">My Story</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-pretty">
                  <p className="text-lg">
                Hello! I'm{" "}
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">
                      {personalInfo.name}
              </span>
                    , {personalInfo.bio}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <FaMapMarkerAlt className="text-primary-500" />
                        <span className="font-medium">Location</span>
                      </div>
                      <p className="text-muted-foreground">{personalInfo.location}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <FaCalendarAlt className="text-primary-500" />
                        <span className="font-medium">Experience</span>
                      </div>
                      <p className="text-muted-foreground">5+ years in software development</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <FaUsers className="text-primary-500" />
                        <span className="font-medium">Status</span>
                      </div>
                      <p className="text-muted-foreground">{personalInfo.status}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <FaRocket className="text-primary-500" />
                        <span className="font-medium">Specialization</span>
          </div>
                      <p className="text-muted-foreground">Full-Stack & Cloud Solutions</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Education Timeline */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card"
              >
                <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-3">
                  <FaGraduationCap />
                  Education
                </h2>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
            </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {edu.degree} in {edu.field}
                          </h3>
                          <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
                            {edu.institution}
                          </p>
                          <p className="text-muted-foreground">{edu.location}</p>
                          <p className="text-sm text-muted-foreground">{edu.duration} • GPA: {edu.gpa}</p>
                          
                          {edu.achievements.length > 0 && (
                            <div className="mt-4">
                              <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                              <ul className="space-y-1">
                                {edu.achievements.map((achievement, idx) => (
                                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <FaChevronRight className="text-primary-500 mt-1 flex-shrink-0" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                  </div>
                          )}
            </div>
          </div>
                      {index < education.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-primary-300 to-primary-500"></div>
                      )}
                    </motion.div>
                  ))}
        </div>
              </motion.div>

              {/* Skills Showcase */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="card"
              >
                <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-3">
                  <FaCode />
                  Technical Expertise
                </h2>
                <div className="space-y-8">
                  {Object.entries(skillsByCategory).map(([category, categorySkills], groupIndex) => (
                    <div key={category}>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{category}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {categorySkills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: (groupIndex * 0.1) + (index * 0.05) 
                            }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="card-interactive group"
                          >
                            <div className="text-center">
                              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                                <skill.icon />
                              </div>
                              <h4 className="font-semibold text-foreground mb-1">{skill.name}</h4>
                              <p className="text-xs text-muted-foreground mb-2">{skill.description}</p>
                              <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>{skill.level}</span>
                                <span>{skill.years}y exp</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="card"
              >
                <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-3">
                  <FaAward />
                  Achievements & Recognition
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 bg-gradient-to-r from-primary-50 to-accent-blue/5 dark:from-primary-950/50 dark:to-accent-blue/5 rounded-xl border border-primary-200 dark:border-primary-800"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                          <FaAward />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">{achievement.date}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Experience Timeline */}
            <div className="lg:col-span-1">
                <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="card sticky top-8"
              >
                <h2 className="text-2xl font-bold mb-8 gradient-text">Professional Journey</h2>
                
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`w-3 h-3 rounded-full ${
                            index === 0 ? 'bg-primary-500' : 'bg-neutral-300 dark:bg-neutral-700'
                          }`}></div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-foreground text-sm">{exp.position}</h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">{exp.company}</p>
                          <p className="text-xs text-muted-foreground">{exp.duration}</p>
                          <p className="text-xs text-muted-foreground">{exp.location}</p>
                        </div>
                  </div>
                      {index < experiences.length - 1 && (
                        <div className="absolute left-1.5 top-6 w-0.5 h-6 bg-gradient-to-b from-primary-300 to-primary-500"></div>
                      )}
                </motion.div>
                  ))}
          </div>
          
                <div className="mt-8 space-y-4">
                  <motion.a
                    href="/projects"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-gradient w-full group"
                  >
                    View My Projects
                    <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  
                  <motion.a
                    href="/src/assets/Avinash_Resume.pdf"
                    download="Avinash_Resume.pdf"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-secondary w-full group"
                  >
                    <FaDownload className="mr-2" />
                    Download Resume
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50/50 to-accent-blue/5 dark:from-primary-950/50 dark:to-accent-blue/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="card max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
            I'm currently open to new{" "}
                <span className="text-primary-600 dark:text-primary-400 font-semibold">
              opportunities and collaborations
            </span>
            . Whether you have a project in mind, a question, or just want to
            say hi, my inbox is always open.{" "}
                <span className="text-accent-blue font-semibold">
              I'll try my best to get back to you!
            </span>
              </p>
              
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-gradient px-8 py-4 text-lg inline-block"
              >
                Get In Touch
              </motion.a>

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
