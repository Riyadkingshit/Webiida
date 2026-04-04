import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const filters = ['Tous', 'Web', 'Branding', 'SEO']

const projects = [
  {
    id: 1,
    title: "L'Élite Urbaine",
    category: 'Web',
    label: 'WEB DEVELOPMENT',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80',
    dark: true,
    size: 'large',
  },
  {
    id: 2,
    title: 'Solaris Tech',
    category: 'Branding',
    label: 'BRANDING',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    dark: false,
    size: 'small',
  },
  {
    id: 3,
    title: 'Echo Magazine',
    category: 'SEO',
    label: 'SEO & WEB',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    dark: false,
    size: 'small',
  },
  {
    id: 4,
    title: 'Accélération Nexa',
    category: 'Web',
    label: 'STRATÉGIE DIGITALE',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    dark: true,
    size: 'large',
  },
  {
    id: 5,
    title: 'Vogue Paris',
    category: 'Branding',
    label: 'BRANDING',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
    dark: true,
    size: 'equal',
  },
  {
    id: 6,
    title: 'DataStream',
    category: 'SEO',
    label: 'SEO',
    img: 'https://images.unsplash.com/photo-1585399000684-d2f72d519997?auto=format&fit=crop&w=600&q=80',
    dark: false,
    size: 'equal',
  },
  {
    id: 7,
    title: 'Koda SaaS',
    category: 'Web',
    label: 'WEB',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    dark: false,
    size: 'equal',
  },
]

function ProjectCard({ project, className = '' }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-card ${className}`}
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className={`absolute inset-0 transition-opacity duration-300 ${project.dark ? 'bg-on-surface/50 group-hover:bg-on-surface/40' : 'bg-transparent group-hover:bg-on-surface/20'}`} />

      {/* Label badge */}
      <div className="absolute top-4 left-4">
        <span className="text-xs font-inter font-medium bg-primary text-white px-3 py-1 rounded-full">
          {project.label}
        </span>
      </div>

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
          <h3 className="font-manrope font-bold text-lg text-white tracking-tight">{project.title}</h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-sm font-inter text-white/80 hover:text-white mt-1 transition-colors"
          >
            Voir l'étude de cas <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projets() {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const filtered = activeFilter === 'Tous'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  const row1 = filtered.filter((p) => p.id === 1 || p.id === 2)
  const row2 = filtered.filter((p) => p.id === 3 || p.id === 4)
  const row3 = filtered.filter((p) => [5, 6, 7].includes(p.id))

  return (
    <div className="pt-24">
      {/* ── HERO ────────────────────────────── */}
      <section className="relative px-6 py-20 max-w-5xl mx-auto text-center overflow-hidden">
        <div className="geo-shape w-72 h-72 -top-10 -right-10" />
        <div className="geo-shape w-48 h-48 bottom-0 left-10" />
        <AnimatedSection className="relative z-10">
          <span className="section-label block mb-4">Nos Réalisations</span>
          <h1 className="font-manrope font-extrabold text-5xl md:text-7xl text-on-surface tracking-tight leading-tight mb-6">
            Nos <span className="text-primary">Projets.</span>
          </h1>
          <p className="font-inter text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Chaque projet est une histoire de transformation — découvrez comment nous aidons
            nos clients à atteindre leurs objectifs digitaux.
          </p>
        </AnimatedSection>
      </section>

      {/* ── FILTRES ─────────────────────────── */}
      <section className="px-6 mb-10 max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-inter font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-primary text-white shadow-lift'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── GRILLE PROJETS ─────────────────── */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <AnimatePresence>
          {/* Row 1 */}
          {(row1.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {filtered.find((p) => p.id === 1) && (
                <ProjectCard project={filtered.find((p) => p.id === 1)} className="md:col-span-2 h-80 md:h-96" />
              )}
              {filtered.find((p) => p.id === 2) && (
                <ProjectCard project={filtered.find((p) => p.id === 2)} className="h-80 md:h-96" />
              )}
            </div>
          )}

          {/* Row 2 */}
          {(row2.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {filtered.find((p) => p.id === 3) && (
                <ProjectCard project={filtered.find((p) => p.id === 3)} className="h-72 md:h-80" />
              )}
              {filtered.find((p) => p.id === 4) && (
                <ProjectCard project={filtered.find((p) => p.id === 4)} className="md:col-span-2 h-72 md:h-80" />
              )}
            </div>
          )}

          {/* Row 3 */}
          {(row3.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[5, 6, 7].map((id) => {
                const p = filtered.find((proj) => proj.id === id)
                return p ? <ProjectCard key={id} project={p} className="h-64 md:h-72" /> : null
              })}
            </div>
          )}

          {/* Aucun résultat */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-on-surface-variant font-inter"
            >
              Aucun projet dans cette catégorie pour l'instant.
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="bg-primary-gradient rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-white tracking-tight mb-4 relative z-10">
              Prêt à créer votre prochain succès ?
            </h2>
            <p className="font-inter text-white/70 mb-7 relative z-10">
              Rejoignez nos clients qui ont transformé leur présence digitale.
            </p>
            <Link
              to="/devis"
              className="relative z-10 inline-flex items-center gap-2 bg-white text-primary font-inter font-semibold px-7 py-3.5 rounded-xl hover:scale-[1.02] transition-transform shadow-lg"
            >
              Lancez-vous maintenant <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
