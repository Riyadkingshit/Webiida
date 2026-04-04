import { Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'

const footerServices = [
  'Création de sites web',
  'Design graphique et impression',
  'Contenu & réseaux sociaux',
  'SEO & publicité',
  'Photographie / vidéo',
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant mt-0">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* Logo + tagline */}
          <div>
            <Link to="/" className="font-manrope font-extrabold text-xl text-on-surface tracking-tight">
              Webiidia
            </Link>
            <p className="font-inter text-xs text-on-surface-variant mt-2 max-w-[200px]">
              Votre partenaire créatif digital à Cotonou, Bénin.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-inter text-xs font-medium text-on-surface uppercase tracking-widest mb-3">Nos Services</p>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    to="/expertise"
                    className="text-sm font-inter text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links & socials */}
          <div className="flex flex-col gap-2">
            <p className="font-inter text-xs font-medium text-on-surface uppercase tracking-widest mb-1">Liens</p>
            <Link to="#" className="text-sm font-inter text-on-surface-variant hover:text-on-surface transition-colors">
              Mentions Légales
            </Link>
            <Link to="#" className="text-sm font-inter text-on-surface-variant hover:text-on-surface transition-colors">
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
        </div>

        {/* Bottom bar */}
        <div className="border-t border-outline-variant pt-6">
          <p className="text-sm font-inter text-on-surface-variant text-center">
            © 2024 Webiidia. Votre partenaire créatif digital.
          </p>
        </div>
      </div>
    </footer>
  )
}
