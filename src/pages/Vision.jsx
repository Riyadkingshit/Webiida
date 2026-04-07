import { Link } from 'react-router-dom'
import { Lightbulb, Cpu, ArrowRight } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import CTABanner from '../components/CTABanner'

const team = [
  {
    name: 'Kofi Mensah',
    role: 'Directeur Général',
    initials: 'KM',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    name: 'Aïcha Boni',
    role: 'Directrice Artistique',
    initials: 'AB',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    name: 'Stéphane Dossou',
    role: 'Développeur Web',
    initials: 'SD',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    name: 'Fatou Yémadjè',
    role: 'Photographe',
    initials: 'FY',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
  },
]

export default function Vision() {
  return (
    <div className="pt-24">
      {/* ── HERO ────────────────────────────── */}
      <section className="relative px-6 py-20 max-w-5xl mx-auto text-center overflow-hidden">
        <div className="geo-shape w-96 h-96 -top-20 -right-20" />
        <div className="geo-shape w-64 h-64 bottom-0 -left-16" />
        <AnimatedSection className="relative z-10">
          <h1 className="font-manrope font-extrabold text-5xl md:text-7xl text-on-surface tracking-tight leading-tight mb-6">
            Architectes du
            <br />
            <em className="not-italic text-primary">Futur Numérique.</em>
          </h1>
          <p className="font-inter text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Chez Webiidia, nous ne suivons pas les tendances — nous les créons. Notre vision est de
            devenir le catalyseur de la transformation digitale en Afrique de l'Ouest.
          </p>
        </AnimatedSection>
      </section>

      {/* ── VALEURS ─────────────────────────── */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <AnimatedSection className="mb-10">
          <span className="section-label block mb-3">Nos Valeurs</span>
          <h2 className="font-manrope font-bold text-4xl text-on-surface tracking-tight">
            Ce qui nous <span className="text-primary">anime</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" stagger={0.1}>
          <StaggerItem>
            <div className="card h-full min-h-[260px] flex flex-col justify-between">
              <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary">
                <Lightbulb size={22} />
              </div>
              <div>
                <p className="font-inter text-xs font-medium text-on-surface-variant/50 tracking-widest uppercase mb-2">
                  01 / INNOVATION
                </p>
                <h3 className="font-manrope font-bold text-xl text-on-surface tracking-tight mb-2">
                  Repousser les limites du possible.
                </h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                  Nous explorons sans cesse de nouvelles approches pour anticiper les besoins de demain.
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-primary-gradient rounded-2xl p-6 min-h-[260px] flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <p className="font-inter text-xs font-medium text-white/50 tracking-widest uppercase mb-2">
                  02 / CRÉATIVITÉ
                </p>
                <h3 className="font-manrope font-bold text-xl text-white tracking-tight mb-1">
                  L'art de la précision.
                </h3>
                <p className="font-inter text-sm text-white/70 leading-relaxed">
                  Chaque pixel est une intention. Chaque mot, une stratégie.
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card h-full min-h-[260px] flex flex-col justify-between">
              <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary">
                <Cpu size={22} />
              </div>
              <div>
                <p className="font-inter text-xs font-medium text-on-surface-variant/50 tracking-widest uppercase mb-2">
                  03 / TECHNOLOGIE
                </p>
                <h3 className="font-manrope font-bold text-xl text-on-surface tracking-tight mb-2">
                  Robuste & Évolutif.
                </h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                  Des solutions techniques pérennes qui grandissent avec votre entreprise.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Citation */}
        <AnimatedSection className="mt-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-on-surface rounded-2xl p-8 md:p-12 flex items-center">
              <div>
                <p className="font-manrope font-bold text-2xl md:text-3xl text-white leading-tight tracking-tight mb-4">
                  "Le design est la face visible de la technologie."
                </p>
                <p className="font-inter text-sm text-white/50">— Philosophie Webiidia</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48 md:h-auto shadow-card">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80"
                alt="Vision Webiidia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── L'ÉQUIPE ────────────────────────── */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label block mb-3">Notre Équipe</span>
            <h2 className="font-manrope font-bold text-4xl text-on-surface tracking-tight mb-4">
              Le Collectif <span className="text-primary">Webiidia</span>
            </h2>
            <p className="font-inter text-on-surface-variant max-w-xl mx-auto">
              Une équipe multidisciplinaire unie par une passion commune.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" stagger={0.12}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="text-center group">
                  <div className="relative w-48 h-48 mx-auto mb-5 rounded-2xl overflow-hidden shadow-card">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/10 via-transparent" />
                  </div>
                  <h3 className="font-manrope font-bold text-lg text-on-surface tracking-tight">{member.name}</h3>
                  <p className="font-inter text-sm text-primary mt-1">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <CTABanner
        title="Prêt à réinventer votre présence ?"
        primaryLabel="Travaillons ensemble"
        primaryTo="/devis"
        secondaryLabel="Découvrir nos projets"
        secondaryTo="/projets"
      />
    </div>
  )
}
