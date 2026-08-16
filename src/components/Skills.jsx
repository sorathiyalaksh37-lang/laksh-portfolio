import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      number: '01',
      title: 'Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C++']
    },
    {
      number: '02',
      title: 'AI / ML',
      skills: ['PyTorch', 'TensorFlow', 'BERT', 'Whisper', 'RAG', 'LangChain', 'Vector DBs', 'Computer Vision']
    },
    {
      number: '03',
      title: 'Backend & Data',
      skills: ['FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Microservices']
    },
    {
      number: '04',
      title: 'MLOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'MLflow', 'Model Serving']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-dark-bg relative">
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
            /04 CAPABILITIES
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-serif font-bold mb-16"
          >
            Technologies &<br />
            <span className="gradient-text">expertise</span>
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-dark-border p-8 hover:border-accent-yellow transition-all duration-300 group"
              >
                <div className="mb-6">
                  <span className="font-mono text-4xl font-bold text-accent-yellow/20 group-hover:text-accent-yellow/40 transition-colors">
                    {category.number}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold mb-6 group-hover:text-accent-yellow transition-colors">
                  {category.title}
                </h3>

                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 * skillIndex }}
                      className="flex items-center space-x-3 text-dark-muted group-hover:text-dark-text transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full" />
                      <span className="font-mono text-sm">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 border border-dark-border bg-dark-card"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-serif font-bold text-accent-yellow mb-2">6+</div>
                <div className="text-sm font-mono text-dark-muted tracking-wider">MAJOR PROJECTS</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-accent-yellow mb-2">15+</div>
                <div className="text-sm font-mono text-dark-muted tracking-wider">TECHNOLOGIES</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-accent-yellow mb-2">100%</div>
                <div className="text-sm font-mono text-dark-muted tracking-wider">COMMITMENT</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
