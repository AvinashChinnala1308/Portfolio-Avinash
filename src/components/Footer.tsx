import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { socialLinks } from "../data/portfolio";

export const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-50/50 to-transparent dark:from-primary-950/50"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 glass-card backdrop-blur-xl border-t border-neutral-200/50 dark:border-neutral-700/50">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold font-display gradient-text">Avinash Chinnala</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Passionate Software Engineer crafting digital experiences that make a real impact. 
                Let's build something amazing together.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-300"
                  >
                    <link.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <a href="/" className="block text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                  Home
                </a>
                <a href="/about" className="block text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                  About
                </a>
                <a href="/projects" className="block text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                  Projects
                </a>
                <a href="mailto:avinashchinnala1325@gmail.com" className="block text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                  Contact
                </a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">Email:</span> avinashchinnala1325@gmail.com
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">Location:</span> California, USA
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">Status:</span> Open to opportunities
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
          © 2025 Avinash Chalam Chinnala. All rights reserved.
              </p>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <span>Designed & Built with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart className="text-error" />
                </motion.span>
                <span>by Avinash</span>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
    </footer>
  );
};
