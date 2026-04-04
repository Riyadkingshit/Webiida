import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function CTABanner({
  title = 'Prêt à transformer votre image ?',
  primaryLabel = 'Parlons-en maintenant',
  primaryTo = '/contact',
  secondaryLabel = 'Voir nos réalisations',
  secondaryTo = '/projets',
}) {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <AnimatedSection>
        <div className="bg-primary-gradient rounded-2xl p-10 md:p-14 relative overflow-hidden">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 text-center">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-white mb-4 tracking-tight">
              {title}
            </h2>
            <p className="font-inter text-white/70 mb-8 max-w-md mx-auto">
              Démarrons ensemble votre projet digital dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to={primaryTo}
                className="inline-flex items-center gap-2 bg-white text-primary font-inter font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                {primaryLabel}
                <ArrowRight size={16} />
              </Link>
              <Link
                to={secondaryTo}
                className="btn-ghost-white text-sm"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
