import { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Globe, Sparkles, TrendingUp, Lock, Clock, MessageSquare, Award } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const services = [
  {
    id: 'branding',
    icon: <Palette size={22} />,
    title: 'Branding',
    desc: 'Identité visuelle, logo, charte graphique.',
  },
  {
    id: 'web',
    icon: <Globe size={22} />,
    title: 'Web Design',
    desc: 'Site vitrine, e-commerce, application web.',
  },
  {
    id: 'contenu',
    icon: <Sparkles size={22} />,
    title: 'Contenu',
    desc: 'Stratégie éditoriale, copywriting, réseaux sociaux.',
  },
  {
    id: 'ads',
    icon: <TrendingUp size={22} />,
    title: 'Digital Ads',
    desc: 'Campagnes publicitaires, SEO, analytics.',
  },
]

const budgets = [
  { id: 'small', label: '500k — 1,5M FCFA' },
  { id: 'medium', label: '1,5M — 5M FCFA' },
  { id: 'large', label: '5M+ FCFA' },
]

const promises = [
  { icon: <Clock size={20} />, title: 'Réponse rapide', desc: '48h max' },
  { icon: <MessageSquare size={20} />, title: 'Atelier offert', desc: '30min consulting' },
  { icon: <Award size={20} />, title: 'Expertise Senior', desc: '10+ ans' },
]

export default function Devis() {
  const [selectedService, setSelectedService] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')
  const [form, setForm] = useState({ name: '', email: '', description: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', email: '', description: '' })
    setSelectedService('')
    setSelectedBudget('')
  }

  return (
    <div className="pt-24">
      {/* ── HERO ────────────────────────────── */}
      <section className="relative px-6 py-20 max-w-4xl mx-auto text-center overflow-hidden">
        <div className="geo-shape w-80 h-80 -top-10 -right-16" />
        <div className="geo-shape w-56 h-56 bottom-0 -left-10" />
        <AnimatedSection className="relative z-10">
          <span className="pill-badge mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Co-création
          </span>
          <h1 className="font-manrope font-extrabold text-4xl md:text-6xl text-on-surface tracking-tight leading-tight mb-5">
            Parlons de votre prochain
            <br />
            <span className="text-primary">grand projet.</span>
          </h1>
          <p className="font-inter text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Remplissez ce formulaire et notre équipe vous répondra sous 48h avec une
            proposition personnalisée.
          </p>
        </AnimatedSection>
      </section>

      {/* ── FORMULAIRE ──────────────────────── */}
      <section className="px-6 pb-20 max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-card">
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl font-inter text-sm"
              >
                ✓ Votre demande a été envoyée ! Nous vous contacterons sous 48h.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 01 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 bg-primary text-white text-xs font-manrope font-bold rounded-lg flex items-center justify-center">01</span>
                  <h2 className="font-manrope font-bold text-xl text-on-surface tracking-tight">Qui êtes-vous ?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-xs text-on-surface-variant uppercase tracking-widest block mb-1.5">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Koffi"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-xs text-on-surface-variant uppercase tracking-widest block mb-1.5">
                      Email professionnel
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean@societe.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-outline-variant" />

              {/* Section 02 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 bg-primary text-white text-xs font-manrope font-bold rounded-lg flex items-center justify-center">02</span>
                  <h2 className="font-manrope font-bold text-xl text-on-surface tracking-tight">Quel est votre besoin ?</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((svc) => (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => setSelectedService(selectedService === svc.id ? '' : svc.id)}
                      className={`text-left p-4 rounded-xl transition-all duration-200 ${
                        selectedService === svc.id
                          ? 'bg-primary/5 ring-2 ring-primary/30'
                          : 'bg-surface-container-low hover:bg-surface-container-highest'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                        selectedService === svc.id ? 'bg-primary text-white' : 'bg-surface-container-lowest text-primary'
                      }`}>
                        {svc.icon}
                      </div>
                      <p className="font-manrope font-bold text-sm text-on-surface tracking-tight">{svc.title}</p>
                      <p className="font-inter text-xs text-on-surface-variant mt-0.5">{svc.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-outline-variant" />

              {/* Section 03 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 bg-primary text-white text-xs font-manrope font-bold rounded-lg flex items-center justify-center">03</span>
                  <h2 className="font-manrope font-bold text-xl text-on-surface tracking-tight">Budget estimé</h2>
                </div>
                <div className="space-y-3">
                  {budgets.map((b) => (
                    <label
                      key={b.id}
                      className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedBudget === b.id
                          ? 'bg-primary/5 ring-2 ring-primary/30'
                          : 'bg-surface-container-low hover:bg-surface-container-highest'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          selectedBudget === b.id ? 'border-primary' : 'border-on-surface-variant/30'
                        }`}
                      >
                        {selectedBudget === b.id && (
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="budget"
                        value={b.id}
                        checked={selectedBudget === b.id}
                        onChange={() => setSelectedBudget(b.id)}
                        className="sr-only"
                      />
                      <span className="font-inter font-medium text-sm text-on-surface">{b.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-outline-variant" />

              {/* Section 04 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 bg-primary text-white text-xs font-manrope font-bold rounded-lg flex items-center justify-center">04</span>
                  <h2 className="font-manrope font-bold text-xl text-on-surface tracking-tight">Dites-nous tout</h2>
                </div>
                <textarea
                  rows={5}
                  required
                  placeholder="Décrivez votre projet, vos objectifs, vos délais, vos inspirations..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="input-field resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="flex items-center gap-2 font-inter text-xs text-on-surface-variant">
                  <Lock size={13} />
                  Vos données sont protégées et ne seront jamais partagées.
                </p>
                <button
                  type="submit"
                  className="btn-primary text-base px-8 py-3.5 rounded-xl whitespace-nowrap"
                >
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </section>

      {/* ── PROMESSES ───────────────────────── */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {promises.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card text-center py-8"
              >
                <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  {p.icon}
                </div>
                <p className="font-manrope font-bold text-on-surface tracking-tight">{p.title}</p>
                <p className="font-inter text-sm text-primary mt-1">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
