import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/expertise', label: 'Expertise' },
  { to: '/projets', label: 'Projets' },
  { to: '/vision', label: 'Vision' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
      >
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-full backdrop-blur-xl bg-white/70 transition-shadow duration-300 ${
            scrolled ? 'shadow-lift' : ''
          }`}
          style={{ border: '1px solid rgba(195,197,217,0.20)' }}
        >
          {/* Logo */}
          <Link to="/" className="font-manrope font-extrabold text-xl text-on-surface tracking-tight">
            Webida
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-inter font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:block">
            <Link
              to="/devis"
              className="btn-primary text-sm px-5 py-2.5 rounded-full"
            >
              Démarrer un projet
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-surface-container-low transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-lift"
            style={{ border: '1px solid rgba(195,197,217,0.20)' }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-inter font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-primary bg-surface-container-low'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/devis"
                className="btn-primary text-sm mt-2 justify-center rounded-xl"
              >
                Démarrer un projet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
