import { Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant mt-0">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="font-manrope font-extrabold text-xl text-on-surface tracking-tight">
            Webida
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              to="#"
              className="text-sm font-inter text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Mentions Légales
            </Link>
            <Link
              to="#"
              className="text-sm font-inter text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Confidentialité
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-inter text-on-surface-variant hover:text-primary transition-colors"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-inter text-on-surface-variant hover:text-primary transition-colors"
            >
              <Instagram size={15} />
              Instagram
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm font-inter text-on-surface-variant text-center md:text-right">
            © 2024 Webida.<br className="md:hidden" /> Votre partenaire créatif digital.
          </p>
        </div>
      </div>
    </footer>
  )
}
