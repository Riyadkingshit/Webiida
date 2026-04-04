import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Globe,
  Palette,
  SearchCheck,
  Camera,
  TrendingUp,
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import CTABanner from '../components/CTABanner'

const services = [
  {
    icon: <Sparkles size={22} />,
    title: 'Création de Contenu',
    desc: 'Stratégie éditoriale, copywriting et production de contenus qui convertissent.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Sites Web',
    desc: 'Conception et développement de sites performants, modernes et optimisés.',
  },
  {
    icon: <Palette size={22} />,
    title: 'Graphisme',
    desc: 'Identité visuelle, charte graphique et supports de communication impactants.',
  },
  {
    icon: <SearchCheck size={22} />,
    title: 'SEO & Stratégie',
    desc: 'Référencement naturel, audit technique et stratégie de visibilité en ligne.',
  },
  {
    icon: <Camera size={22} />,
    title: 'Photographie',
    desc: 'Shooting professionnel, reportage corporate et photographie produit.',
  },
]

const expertiseCards = [
  {
    id: 1,
    type: 'image-bg',
    title: 'Stratégie Digitale',
    desc: 'Une vision à 360° de votre présence en ligne pour maximiser votre impact.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    cols: 'md:col-span-2',
  },
  {
    id: 2,
    type: 'primary',
    title: 'Performance SEO',
    desc: 'Classez-vous en première page et attirez des visiteurs qualifiés.',
    icon: <TrendingUp size={28} />,
    cols: 'md:col-span-1',
  },
  {
    id: 3,
    type: 'surface',
    title: 'Design UI/UX',
    desc: 'Interfaces intuitives et expériences utilisateur mémorables.',
    icon: <Palette size={28} />,
    cols: 'md:col-span-1',
  },
  {
    id: 4,
    type: 'horizontal',
    title: 'Développement Web',
    desc: 'Applications web robustes et sites haute performance.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    cols: 'md:col-span-2',
  },
]

const servicePills = [
  'Création de contenu',
  'Sites web',
  'Graphisme',
  'SEO',
  'Photographie',
]

export default function Home() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' })
    }
  }

  return (
    <div className="pt-24">
      {/* ── HERO ─────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background geometric shapes */}
        <div className="geo-shape w-96 h-96 -top-20 -left-20" />
        <div className="geo-shape w-72 h-72 top-1/4 -right-16" />
        <div className="geo-shape w-48 h-48 bottom-10 left-1/4" />

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <span className="pill-badge mb-6 inline-block">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Agence de Communication Digitale
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="font-manrope font-extrabold text-5xl md:text-7xl text-on-surface tracking-tight leading-[1.05] mb-6"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
          >
            Votre partenaire
            <br />
            <span className="text-primary">créatif digital</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-inter text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            Webida conçoit des stratégies digitales sur mesure pour propulser votre marque
            au cœur du numérique — à Cotonou et au-delà.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/devis" className="btn-primary text-base px-7 py-3.5 rounded-xl">
              Démarrer un projet
              <ArrowRight size={18} />
            </Link>
            <Link to="/projets" className="btn-secondary text-base px-7 py-3.5 rounded-xl">
              Voir nos réalisations
            </Link>
          </motion.div>

          {/* Service pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.6 }}
          >
            {servicePills.map((pill) => (
              <span
                key={pill}
                className="text-sm font-inter text-on-surface-variant bg-surface-container-lowest px-4 py-1.5 rounded-full"
                style={{ border: '1px solid rgba(195,197,217,0.30)' }}
              >
                {pill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── NOTRE EXPERTISE ──────────────────── */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <AnimatedSection className="mb-12">
          <span className="section-label block mb-3">Ce que nous faisons</span>
          <h2 className="font-manrope font-bold text-4xl md:text-5xl text-on-surface tracking-tight">
            Notre <span className="text-primary">Expertise</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" stagger={0.1}>
          {/* Card 1 — image background, large */}
          <StaggerItem className="md:col-span-2">
            <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 shadow-card group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                alt="Stratégie Digitale"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-inter text-xs tracking-widest uppercase text-white/60 mb-1">01</p>
                <h3 className="font-manrope font-bold text-2xl tracking-tight">Stratégie Digitale</h3>
                <p className="font-inter text-sm text-white/70 mt-1 max-w-xs">
                  Une vision à 360° pour maximiser votre impact en ligne.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Card 2 — primary blue */}
          <StaggerItem>
            <div className="bg-primary-gradient rounded-2xl p-6 h-64 md:h-80 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                <TrendingUp size={22} />
              </div>
              <div>
                <p className="font-inter text-xs tracking-widest uppercase text-white/50 mb-1">02</p>
                <h3 className="font-manrope font-bold text-2xl text-white tracking-tight">Performance SEO</h3>
                <p className="font-inter text-sm text-white/70 mt-2">
                  Classez-vous en première page et attirez des visiteurs qualifiés.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Card 3 — surface */}
          <StaggerItem>
            <div className="card h-64 flex flex-col justify-between">
              <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary">
                <Palette size={22} />
              </div>
              <div>
                <p className="font-inter text-xs tracking-widest uppercase text-on-surface-variant/50 mb-1">03</p>
                <h3 className="font-manrope font-bold text-xl text-on-surface tracking-tight">Design UI/UX</h3>
                <p className="font-inter text-sm text-on-surface-variant mt-2">
                  Interfaces intuitives et expériences utilisateur mémorables.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Card 4 — horizontal with code image */}
          <StaggerItem className="md:col-span-2">
            <div className="card h-64 flex flex-col md:flex-row overflow-hidden p-0">
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary">
                  <Globe size={22} />
                </div>
                <div>
                  <p className="font-inter text-xs tracking-widest uppercase text-on-surface-variant/50 mb-1">04</p>
                  <h3 className="font-manrope font-bold text-xl text-on-surface tracking-tight">Développement Web</h3>
                  <p className="font-inter text-sm text-on-surface-variant mt-2">
                    Applications web robustes et sites haute performance.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-40 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                  alt="Développement Web"
                  className="w-full h-full object-cover rounded-r-2xl"
                />
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* ── NOS SERVICES ─────────────────────── */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="section-label block mb-3">Ce que nous offrons</span>
                <h2 className="font-manrope font-bold text-4xl text-on-surface tracking-tight">
                  Nos <span className="text-primary">Services</span>
                </h2>
              </div>
              <div className="hidden md:flex gap-2">
                <button
                  onClick={() => scroll(-1)}
                  className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-card"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scroll(1)}
                  className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shadow-card"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </AnimatedSection>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex-shrink-0 w-72 bg-surface-container-lowest rounded-2xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="w-11 h-11 bg-surface-container-low rounded-xl flex items-center justify-center text-primary mb-4">
                  {svc.icon}
                </div>
                <h3 className="font-manrope font-bold text-lg text-on-surface tracking-tight mb-2">{svc.title}</h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────── */}
      <CTABanner />
    </div>
  )
}
