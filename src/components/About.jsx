import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Brain, Rocket, Award } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Engineering',
      description: 'Building production-grade AI systems with PyTorch, TensorFlow, and modern LLM frameworks'
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Creating scalable applications with React, Node.js, FastAPI, and modern cloud technologies'
    },
    {
      icon: Rocket,
      title: 'MLOps & Deployment',
      description: 'Deploying ML models with Docker, Kubernetes, and implementing CI/CD pipelines'
    },
    {
      icon: Award,
      title: 'Problem Solver',
      description: 'Passionate about solving complex real-world problems with elegant, efficient solutions'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-dark-bg relative">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-accent-yellow/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="section-number mb-4">
            /02 ABOUT ME
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-serif font-bold mb-8"
          >
            Building intelligent
            <br />
            <span className="gradient-text">systems that matter</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 mt-16">
            {/* Left Column - Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-dark-muted leading-relaxed">
                I'm a <span className="text-dark-text font-semibold">Software Engineer</span> and{' '}
                <span className="text-dark-text font-semibold">AI/ML Engineer</span> passionate about creating
                innovative solutions that bridge the gap between cutting-edge technology and real-world applications.
              </p>

              <p className="text-lg text-dark-muted leading-relaxed">
                My expertise spans across <span className="text-accent-yellow">full-stack development</span>,{' '}
                <span className="text-accent-yellow">machine learning</span>, and{' '}
                <span className="text-accent-yellow">cloud architecture</span>. I've built everything from
                AI-powered security analysis platforms to emergency medical assistants and interview coaching systems.
              </p>

              <p className="text-lg text-dark-muted leading-relaxed">
                I believe in writing clean, maintainable code and building systems that are not just functional,
                but also scalable, secure, and user-friendly. Every project is an opportunity to push boundaries
                and learn something new.
              </p>

              <div className="pt-8">
                <motion.a
                  href="mailto:sorathiyalaksh37@gmail.com"
                  className="inline-flex items-center space-x-2 text-accent-yellow hover:text-accent-yellowDark transition-colors font-mono text-sm tracking-wider group"
                  whileHover={{ x: 10 }}
                >
                  <span>GET IN TOUCH</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Highlights Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, borderColor: '#ffd700' }}
                    className="p-6 border border-dark-border bg-dark-card hover:bg-dark-border transition-all duration-300 group"
                  >
                    <div className="mb-4">
                      <Icon className="text-accent-yellow group-hover:scale-110 transition-transform" size={32} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-dark-text group-hover:text-accent-yellow transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-dark-muted leading-relaxed">
                      {highlight.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
