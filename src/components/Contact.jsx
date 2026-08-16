import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Github, Linkedin, Mail } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus({ submitting: false, submitted: true, error: null })
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: null })
      }, 5000)
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again or email me directly.'
      })
    }
  }

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/sorathiyalaksh37-lang',
      label: 'GITHUB'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/laksh-sorathiya-2a895632b',
      label: 'LINKEDIN'
    },
    {
      icon: Mail,
      href: 'mailto:sorathiyalaksh37@gmail.com',
      label: 'EMAIL'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-dark-card relative">
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
            /05 CONTACT
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Heading & Info */}
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-6xl font-serif font-bold mb-8"
              >
                Let's build
                <br />
                <span className="gradient-text italic">something</span>
                <br />
                that thinks.
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-dark-muted leading-relaxed mb-8"
              >
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-4 mb-12">
                <a
                  href="mailto:sorathiyalaksh37@gmail.com"
                  className="block text-dark-text hover:text-accent-yellow transition-colors font-mono text-sm"
                >
                  sorathiyalaksh37@gmail.com
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-dark-muted hover:text-accent-yellow transition-colors group"
                      whileHover={{ x: 10 }}
                    >
                      <Icon size={20} />
                      <span className="font-mono text-sm tracking-wider">{link.label}</span>
                      <motion.span
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-mono tracking-wider text-dark-muted mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-dark-text focus:border-accent-yellow focus:outline-none transition-colors font-mono text-sm"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-mono tracking-wider text-dark-muted mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-dark-text focus:border-accent-yellow focus:outline-none transition-colors font-mono text-sm"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-mono tracking-wider text-dark-muted mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about the system you want to build..."
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border text-dark-text focus:border-accent-yellow focus:outline-none transition-colors font-mono text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full px-8 py-4 bg-accent-yellow text-dark-bg font-mono text-sm tracking-wider hover:bg-accent-yellowDark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={{ scale: status.submitting ? 1 : 1.02 }}
                  whileTap={{ scale: status.submitting ? 1 : 0.98 }}
                >
                  <span>{status.submitting ? 'SENDING...' : 'SEND TRANSMISSION'}</span>
                  <Send size={18} />
                </motion.button>

                {/* Status Messages */}
                {status.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-900/20 border border-green-500/50 text-green-400 text-sm font-mono"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-900/20 border border-red-500/50 text-red-400 text-sm font-mono"
                  >
                    ✗ {status.error}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
