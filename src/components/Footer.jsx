import { Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'

const footerServices = [
  'Création de sites web',
  'Design graphique & impression',
  'Contenu & réseaux sociaux',
  'SEO & publicité',
  'Photographie / vidéo',
  'Étiquettes Google',
  'Google Business',
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant mt-0">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo + tagline */}
          <div>
            <Link to="/" className="font-manrope font-extrabold text-xl text-on-surface tracking-tight">
              Webiidia
            </Link>
            <p className="font-inter text-sm text-on-surface-variant mt-3 leading-relaxed">
              Votre partenaire créatif digital à Cotonou, Bénin.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-manrope font-bold text-sm text-on-surface tracking-tight uppercase mb-4">
              Nos Services
            </h4>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    to="/expertise"
                    className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-manrope font-bold text-sm text-on-surface tracking-tight uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/expertise', label: 'Expertise' },
                { to: '/projets', label: 'Projets' },
                { to: '/vision', label: 'Vision' },
                { to: '/contact', label: 'Contact' },
                { to: '/devis', label: 'Demander un devis' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-inter text-on-surface-variant">
            © {new Date().getFullYear()} Webiidia. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-sm font-inter text-on-surface-variant hover:text-on-surface transition-colors">
              Mentions Légales
            </Link>
            <Link to="#" className="text-sm font-inter text-on-surface-variant hover:text-on-surface transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
