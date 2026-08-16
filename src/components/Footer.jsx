import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 px-6 lg:px-12 bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left - Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-serif font-bold mb-2">LS</div>
            <p className="text-sm font-mono text-dark-muted">
              © {new Date().getFullYear()} Laksh Sorathiya · Designed & Built with obsessive care
            </p>
          </div>

          {/* Center - Quote */}
          <div className="text-center max-w-md">
            <p className="text-sm italic text-dark-muted font-serif">
              "The best way to predict the future is to invent it."
            </p>
          </div>

          {/* Right - Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-dark-muted hover:text-accent-yellow transition-colors font-mono text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
