import { Link } from 'react-router-dom'
import { Globe, Palette, Sparkles, SearchCheck, Camera, Check, ArrowRight } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import CTABanner from '../components/CTABanner'

const processSteps = [
  {
    num: '01',
    title: 'Immersion & Audit',
    desc: 'Nous plongeons dans votre univers pour comprendre vos enjeux, analyser vos concurrents et identifier les opportunités à saisir.',
  },
  {
    num: '02',
    title: 'Conception & Design',
    desc: 'Nos équipes créatives élaborent des concepts sur mesure, testés et validés pour maximiser l\'impact visuel et l\'expérience utilisateur.',
  },
  {
    num: '03',
    title: 'Déploiement & Suivi',
    desc: 'Nous mettons en ligne, mesurons les résultats et optimisons en continu pour garantir une performance maximale.',
  },
]

export default function Expertise() {
  return (
    <div className="pt-24">
      {/* ── HERO ────────────────────────────── */}
      <section className="relative px-6 py-20 max-w-5xl mx-auto text-center overflow-hidden">
        <div className="geo-shape w-80 h-80 -top-10 -right-20" />
        <div className="geo-shape w-56 h-56 bottom-0 -left-10" />

        <AnimatedSection className="relative z-10">
          <span className="section-label block mb-4">Nos Domaines d'Expertise</span>
          <h1 className="font-manrope font-extrabold text-5xl md:text-7xl text-on-surface tracking-tight leading-tight mb-6">
            L'art de sculpter
            <br />
            <span className="text-primary">le numérique.</span>
          </h1>
          <p className="font-inter text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            De la stratégie à l'exécution, nous maîtrisons chaque facette du digital
            pour transformer votre vision en réalité.
          </p>
        </AnimatedSection>
      </section>

      {/* ── GRILLE SERVICES ─────────────────── */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" stagger={0.08}>
          {/* Sites Web */}
          <StaggerItem>
            <div className="card h-full">
              <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary mb-5">
                <Globe size={22} />
              </div>
              <h3 className="font-manrope font-bold text-xl text-on-surface tracking-tight mb-3">Sites Web</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-5">
                Des sites performants qui convertissent vos visiteurs en clients.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'E-Commerce', 'Performance'].map((tag) => (
                  <span key={tag} className="text-xs font-inter bg-surface-container-low text-primary px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Centre — image glassmorphism */}
          <StaggerItem>
            <div className="relative rounded-2xl overflow-hidden h-64 md:h-auto md:min-h-[280px] shadow-card">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80"
                alt="Équipe Webida"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-on-surface/40 backdrop-blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-manrope font-extrabold text-4xl tracking-tight opacity-20">DIGITAL</p>
                  <p className="font-inter text-sm text-white/80 mt-2">Cotonou, Bénin</p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Graphisme */}
          <StaggerItem>
            <div className="card h-full relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-manrope font-extrabold text-7xl text-primary/5 select-none">DESIGN</span>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary mb-5">
                  <Palette size={22} />
                </div>
                <h3 className="font-manrope font-bold text-xl text-on-surface tracking-tight mb-3">Graphisme</h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                  Identité visuelle forte, supports de communication percutants et charte graphique cohérente.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Création de contenu */}
          <StaggerItem className="md:col-span-2">
            <div className="card h-full flex flex-col md:flex-row gap-6 overflow-hidden p-0">
              <div className="flex-1 p-6">
                <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary mb-5">
                  <Sparkles size={22} />
                </div>
                <h3 className="font-manrope font-bold text-xl text-on-surface tracking-tight mb-3">Création de Contenu</h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                  Stratégie éditoriale, copywriting impactant et production de contenus multicanaux pour engager votre audience.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
                  alt="Équipe contenu"
                  className="w-full h-full object-cover md:rounded-r-2xl"
                />
              </div>
            </div>
          </StaggerItem>

          {/* SEO & Stratégie */}
          <StaggerItem>
            <div className="card h-full">
              <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary mb-5">
                <SearchCheck size={22} />
              </div>
              <h3 className="font-manrope font-bold text-xl text-on-surface tracking-tight mb-4">SEO & Stratégie</h3>
              <ul className="space-y-2">
                {['Audit Technique', 'Analyse Concurrentielle', 'Reporting Mensuel'].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-inter text-sm text-on-surface-variant">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Photographie — blue */}
          <StaggerItem className="md:col-span-2">
            <div className="bg-primary-gradient rounded-2xl p-6 h-full flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-lift min-h-[200px]">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-5">
                <Camera size={22} />
              </div>
              <div>
                <h3 className="font-manrope font-bold text-2xl text-white tracking-tight mb-2">Photographie</h3>
                <p className="font-inter text-sm text-white/70 mb-4">
                  Shooting professionnel, reportage corporate et photographie produit pour valoriser votre marque.
                </p>
                <Link
                  to="/projets"
                  className="inline-flex items-center gap-1.5 text-sm font-inter font-medium text-white/80 hover:text-white transition-colors"
                >
                  Voir le portfolio <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ── PROCESSUS COLLABORATIF ─────────── */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image gauche */}
            <AnimatedSection variant="slideLeft">
              <div className="relative rounded-2xl overflow-hidden h-80 md:h-[480px] shadow-lift">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  alt="Équipe au travail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/20 via-transparent" />
              </div>
            </AnimatedSection>

            {/* Droite — processus */}
            <AnimatedSection variant="slideRight">
              <span className="section-label block mb-4">Notre méthode</span>
              <h2 className="font-manrope font-bold text-4xl text-on-surface tracking-tight mb-8">
                Processus <span className="text-primary">Collaboratif</span>
              </h2>
              <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-surface-container-lowest rounded-xl flex items-center justify-center shadow-card">
                      <span className="font-manrope font-bold text-sm text-primary">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="font-manrope font-bold text-lg text-on-surface tracking-tight mb-1">{step.title}</h3>
                      <p className="font-inter text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <CTABanner
        title="Prêt à réinventer votre présence digitale ?"
        primaryLabel="Demander un devis"
        primaryTo="/devis"
        secondaryLabel="Voir nos réalisations"
        secondaryTo="/projets"
      />
    </div>
  )
}

