import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
  })

  const projects = [
    {
      number: '01',
      title: 'CodeGuardian AI',
      category: 'AI Security Platform',
      description: 'Enterprise-grade security analysis platform leveraging cutting-edge AI to detect vulnerabilities, suggest fixes, and help development teams write more secure code. Built with modern technologies and designed with UX in mind.',
      tags: ['Python', 'FastAPI', 'React', 'LLMS'],
      image: 'bg-gradient-to-br from-blue-900/20 to-purple-900/20'
    },
    {
      number: '02',
      title: 'RapidCare AI',
      category: 'AI Emergency Medical Assistant',
      description: 'Production-grade AI system guiding bystanders during road accidents through intelligent multi-modal analysis, real-time first-aid guidance, and hospital routing. Addresses critical gaps in emergency response.',
      tags: ['Python', 'FastAPI', 'React', 'PyTorch', 'PostgreSQL', 'Docker'],
      image: 'bg-gradient-to-br from-red-900/20 to-orange-900/20'
    },
    {
      number: '03',
      title: 'ResumeIQ AI',
      category: 'Interview Coach',
      description: 'AI-powered resume analysis and interview preparation platform with multi-modal feedback. Features BERT-powered skill extraction, RAG-enhanced question generation, advanced voice analysis, and facial emotion recognition.',
      tags: ['Python', 'React', 'FastAPI', 'BERT', 'Whisper'],
      image: 'bg-gradient-to-br from-green-900/20 to-teal-900/20'
    },
    {
      number: '04',
      title: 'MeetAI',
      category: 'AI Meeting Assistant',
      description: 'Real-time AI-powered meeting assistant that automatically transcribes conversations, extracts action items using AI, and manages tasks across teams. Eliminates the problem of "Who was supposed to do what?"',
      tags: ['Python', 'FastAPI', 'React', 'NLP'],
      image: 'bg-gradient-to-br from-indigo-900/20 to-blue-900/20'
    },
    {
      number: '05',
      title: 'Message Notification Router',
      category: 'Complete AI Ecosystem',
      description: 'AI-powered system for WhatsApp and 10+ platforms that intelligently decides which messages deserve immediate attention, which should wait, and which should be muted. Advanced notification prioritization.',
      tags: ['Python', 'Node.js', 'MongoDB', 'Redis'],
      image: 'bg-gradient-to-br from-purple-900/20 to-pink-900/20'
    },
    {
      number: '06',
      title: 'QuickGPT',
      category: 'AI Chat Application',
      description: 'Full-stack AI chat application with text and image generation capabilities, featuring a credit system, user authentication, and community gallery. Built with modern web technologies.',
      tags: ['React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Gemini'],
      image: 'bg-gradient-to-br from-yellow-900/20 to-orange-900/20'
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="work" className="py-32 px-6 lg:px-12 bg-dark-card relative">
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
            /03 SELECTED WORK
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-serif font-bold mb-16"
          >
            Projects that make
            <br />
            <span className="gradient-text">an impact</span>
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative border border-dark-border bg-dark-bg hover:border-accent-yellow/50 transition-all duration-500 overflow-hidden"
              >
                {/* Project Image/Gradient Background */}
                <div className={`h-64 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                  <div className="absolute top-6 left-6">
                    <span className="font-mono text-6xl font-bold text-white/10 group-hover:text-accent-yellow/20 transition-colors">
                      {project.number}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-accent-yellow text-dark-bg flex items-center justify-center hover:bg-accent-yellowDark transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <Github size={20} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <p className="text-xs font-mono text-accent-yellow tracking-widest mb-3">
                    {project.category}
                  </p>
                  
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:text-accent-yellow transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-mono border border-dark-border text-dark-muted hover:border-accent-yellow hover:text-accent-yellow transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent-yellow/0 group-hover:border-accent-yellow transition-colors duration-500" />
              </motion.article>
            ))}
          </div>

          {/* View More Link */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.a
              href="https://github.com/sorathiyalaksh37-lang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-accent-yellow hover:text-accent-yellowDark transition-colors font-mono text-sm tracking-wider group"
              whileHover={{ scale: 1.05 }}
            >
              <span>VIEW ALL PROJECTS ON GITHUB</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
