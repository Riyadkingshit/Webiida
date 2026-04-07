import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Globe,
  Palette,
  Megaphone,
  SearchCheck,
  Camera,
  TrendingUp,
  Tag,
  MapPin,
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import CTABanner from '../components/CTABanner'

const services = [
  {
    icon: <Globe size={22} />,
    title: 'Création de sites web',
    desc: 'Conception et développement de sites vitrines, e-commerce et applications web sur mesure.',
  },
  {
    icon: <Palette size={22} />,
    title: 'Design graphique & impression',
    desc: 'Identité visuelle, logo, charte graphique, flyers, cartes de visite et tous supports print.',
  },
  {
    icon: <Megaphone size={22} />,
    title: 'Contenu & réseaux sociaux',
    desc: 'Stratégie éditoriale, création de contenu et community management pour vos réseaux.',
  },
  {
    icon: <SearchCheck size={22} />,
    title: 'SEO & publicité',
    desc: 'Référencement naturel, Google Ads, Meta Ads et optimisation de votre visibilité en ligne.',
  },
  {
    icon: <Camera size={22} />,
    title: 'Photographie / vidéo',
    desc: 'Shooting professionnel, reportage corporate, vidéo institutionnelle et contenu visuel.',
  },
  {
    icon: <Tag size={22} />,
    title: 'Étiquettes Google',
    desc: 'Configuration Google Tag Manager & Analytics pour suivre et optimiser vos performances.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Google Business',
    desc: 'Création et optimisation de votre fiche Google Business pour la visibilité locale.',
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
  'Sites web',
  'Design graphique',
  'Réseaux sociaux',
  'SEO & publicité',
  'Photographie',
  'Google Business',
]

const teamMembers = [
  {
    initials: 'RW',
    name: 'Riyad Walker',
    role: 'CEO & Fondateur',
    skills: ['Web Design', 'Réseaux Informatiques', 'Graphisme', 'IA'],
  },
  {
    initials: 'SF',
    name: 'S. Farid',
    role: 'Graphiste & Créateur de Contenu',
    skills: ['Graphisme', 'Création de contenu', 'Identité visuelle'],
  },
  {
    initials: 'OR',
    name: 'O. Romaric',
    role: 'Photographe',
    skills: ['Photo produit', 'Portrait corporate', 'Vidéo'],
  },
  {
    initials: 'FM',
    name: 'F. Mariano',
    role: 'Développeur Full Stack',
    skills: ['React', 'Node.js', 'Next.js', 'Base de données'],
  },
]

export default function Home() {
  return (
    <div className="pt-24">
      {/* ── HERO ─────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        <div className="geo-shape w-96 h-96 -top-20 -left-20" />
        <div className="geo-shape w-72 h-72 top-1/4 -right-16" />
        <div className="geo-shape w-48 h-48 bottom-10 left-1/4" />

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <span className="pill-badge mb-6 inline-block">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Agence de Communication Digitale
            </span>
          </motion.div>

          <motion.h1
            className="font-manrope font-extrabold text-5xl md:text-7xl text-on-surface tracking-tight leading-[1.05] mb-6"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7 }}
          >
            Votre partenaire
            <br />
            <span className="text-primary">créatif digital</span>
          </motion.h1>

          <motion.p
            className="font-inter text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            Webiidia conçoit des stratégies digitales sur mesure pour propulser votre marque
            au cœur du numérique — à Cotonou et au-delà.
          </motion.p>

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

      {/* ── NOS SERVICES — CARROUSEL ─────────── */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-10">
              <span className="section-label block mb-3">Ce que nous offrons</span>
              <h2 className="font-manrope font-bold text-4xl text-on-surface tracking-tight">
                Nos <span className="text-primary">Services</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* CSS-only snap carousel */}
          <div
            className="flex gap-4 pb-4"
            style={{
              overflowX: 'scroll',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{ scrollSnapAlign: 'start', flexShrink: 0, width: '260px' }}
                className="bg-surface-container-lowest rounded-2xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="w-11 h-11 bg-surface-container-low rounded-xl flex items-center justify-center text-primary mb-4">
                  {svc.icon}
                </div>
                <h3 className="font-manrope font-bold text-lg text-on-surface tracking-tight mb-2">{svc.title}</h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {services.map((_, i) => (
              <span
                key={i}
                className={`rounded-full transition-all duration-300 ${i === 0 ? 'w-4 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-on-surface-variant/20'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTRE ÉQUIPE ────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label block mb-3">Notre Équipe</span>
            <h2 className="font-manrope font-bold text-4xl md:text-5xl text-on-surface tracking-tight mb-4">
              Notre <span className="text-primary">Équipe</span>
            </h2>
            <p className="font-inter text-on-surface-variant max-w-xl mx-auto">
              Des experts passionnés au service de votre croissance digitale.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" stagger={0.1}>
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary-gradient flex items-center justify-center shadow-card group-hover:-translate-y-1 transition-transform duration-300">
                    <span className="font-manrope font-extrabold text-xl text-white">{member.initials}</span>
                  </div>
                  <h3 className="font-manrope font-bold text-sm text-on-surface tracking-tight">{member.name}</h3>
                  <p className="font-inter text-xs text-primary mt-0.5 mb-2">{member.role}</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {member.skills.slice(0, 2).map((skill) => (
                      <span key={skill} className="text-[10px] font-inter bg-surface-container-low text-on-surface-variant px-2 py-0.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-10">
            <Link
              to="/vision"
              className="inline-flex items-center gap-2 font-inter font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Voir toute l'équipe <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────── */}
      <CTABanner />
    </div>
  )
}
