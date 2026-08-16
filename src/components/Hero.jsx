import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sorathiyalaksh37-lang', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/laksh-sorathiya-2a895632b', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sorathiyalaksh37@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="section-number mb-4"
            >
              /01 INTRODUCTION
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
            >
              Laksh
              <br />
              <span className="gradient-text">Sorathiya</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4 mb-8"
            >
              <p className="text-xl md:text-2xl text-dark-muted font-light">
                Software Engineer & AI/ML Engineer
              </p>
              <p className="text-base md:text-lg text-dark-muted max-w-xl leading-relaxed">
                I build intelligent systems that solve real-world problems. Specializing in full-stack development,
                machine learning, and creating production-grade AI applications that make an impact.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center space-x-6 mb-8"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-muted hover:text-accent-yellow transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-accent-yellow text-dark-bg font-mono text-sm tracking-wider hover:bg-accent-yellowDark transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LET'S BUILD SOMETHING
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('work')}
                className="px-8 py-4 border border-dark-border text-dark-text font-mono text-sm tracking-wider hover:border-accent-yellow hover:text-accent-yellow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VIEW MY WORK
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image/Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 border border-accent-yellow/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-8 border border-accent-yellow/10 rounded-full"
              />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-9xl font-serif font-bold text-accent-yellow/10"
                  >
                    AI
                  </motion.div>
                  <p className="text-sm font-mono text-dark-muted tracking-widest mt-4">
                    BUILDING THE FUTURE
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-dark-muted hover:text-accent-yellow transition-colors"
        >
          <span className="text-xs font-mono tracking-widest mb-2">SCROLL</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero
