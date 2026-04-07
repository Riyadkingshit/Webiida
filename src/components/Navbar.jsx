import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/expertise', label: 'Expertise' },
  { to: '/projets', label: 'Projets' },
  { to: '/vision', label: 'Vision' },
  { to: '/contact', label: 'Contact' },
]

const mobileNavLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/projets', label: 'Projets' },
  { to: '/vision', label: 'Vision' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false)
      }
    }
    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileOpen])

  return (
    <div
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
    >
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-full backdrop-blur-xl bg-white/70 transition-shadow duration-300 ${
            scrolled ? 'shadow-lift' : ''
          }`}
          style={{ border: '1px solid rgba(195,197,217,0.20)' }}
        >
          {/* Logo */}
          <Link to="/">
            <svg height="44" viewBox="0 0 520 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#003ec7'}}/>
                  <stop offset="100%" style={{stopColor:'#0052ff'}}/>
                </linearGradient>
              </defs>
              <polygon points="38,2 68,18 68,54 38,70 8,54 8,18" fill="url(#g1)"/>
              <polyline points="17,24 26,52 38,34 50,52 59,24"
                stroke="white" strokeWidth="5.5"
                strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <text x="78" y="60"
                fontFamily="Manrope,sans-serif" fontWeight="800"
                fontSize="48" letterSpacing="-2" fill="#191c1e">Web</text>
              <rect x="195" y="25" width="7" height="36" rx="3.5" fill="#191c1e"/>
              <rect x="211" y="25" width="7" height="36" rx="3.5" fill="#191c1e"/>
              <circle cx="198.5" cy="14" r="6" fill="url(#g1)"/>
              <circle cx="214.5" cy="14" r="6" fill="url(#g1)"/>
              <path d="M 191 68 Q 207 83 223 68"
                stroke="url(#g1)" strokeWidth="3.2"
                strokeLinecap="round" fill="none"/>
              <polyline points="217,64 223,68 217,72"
                stroke="url(#g1)" strokeWidth="3.2"
                strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <text x="222" y="60"
                fontFamily="Manrope,sans-serif" fontWeight="800"
                fontSize="48" letterSpacing="-2" fill="#191c1e">dia</text>
            </svg>
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

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/devis" className="btn-primary text-sm px-5 py-2.5 rounded-full">
              Démarrer un projet
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-surface-container-low transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu — slide down */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mt-2 bg-white rounded-2xl shadow-lift overflow-hidden"
            style={{ border: '1px solid rgba(195,197,217,0.20)' }}
          >
            <div className="flex flex-col items-center gap-1 p-4">
              {mobileNavLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `w-full text-center px-4 py-4 rounded-xl font-manrope font-bold text-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-primary bg-surface-container-low'
                        : 'text-on-surface hover:text-primary hover:bg-surface-container-low'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/devis"
                className="btn-primary w-full text-base mt-3 justify-center rounded-xl py-3.5"
              >
                Démarrer un projet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
