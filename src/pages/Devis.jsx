import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lock, Clock, MessageSquare, Award } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const serviceCards = [
  { id: 'web', emoji: '\uD83C\uDF10', title: 'Création de sites web' },
  { id: 'design', emoji: '\uD83C\uDFA8', title: 'Design graphique & impression' },
  { id: 'social', emoji: '\uD83D\uDCF2', title: 'Contenu & réseaux sociaux' },
  { id: 'seo', emoji: '\uD83D\uDCC8', title: 'SEO & publicité' },
  { id: 'photo', emoji: '\uD83D\uDCF7', title: 'Photographie / vidéo' },
  { id: 'tags', emoji: '\uD83C\uDFF7\uFE0F', title: 'Étiquettes Google' },
  { id: 'business', emoji: '\uD83D\uDCCD', title: 'Google Business (création & gestion)' },
  { id: 'print', emoji: '\uD83D\uDDA8\uFE0F', title: 'Impression (flyers, cartes, affiches)' },
]

const budgetOptions = [
  { id: 'xs', label: 'Moins de 500 000 FCFA' },
  { id: 'sm', label: '500 000 — 1 500 000 FCFA' },
  { id: 'md', label: '1 500 000 — 5 000 000 FCFA' },
  { id: 'lg', label: 'Plus de 5 000 000 FCFA' },
  { id: 'unknown', label: 'Je ne sais pas encore' },
]

const delaiOptions = [
  'Moins de 2 semaines',
  '2 à 4 semaines',
  '1 à 2 mois',
  '2 à 3 mois',
  'Pas de deadline précise',
]

const promises = [
  { icon: <Clock size={20} />, title: 'Réponse sous 48h', desc: 'Rapide et fiable' },
  { icon: <MessageSquare size={20} />, title: 'Consultation offerte', desc: '30 min gratuites' },
  { icon: <Award size={20} />, title: 'Expertise certifiée', desc: 'Professionnels qualifiés' },
]

export default function Devis() {
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedBudget, setSelectedBudget] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    description: '',
    delai: '',
    website: '',
  })
  const [sent, setSent] = useState(false)

  const toggleService = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', email: '', phone: '', company: '', sector: '', description: '', delai: '', website: '' })
    setSelectedServices([])
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
              {/* ── Section 01 — Qui êtes-vous ? ── */}
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
                  <div>
                    <label className="font-inter text-xs text-on-surface-variant uppercase tracking-widest block mb-1.5">
                      Téléphone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+229 01 90 19 58 02"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-xs text-on-surface-variant uppercase tracking-widest block mb-1.5">
                      Nom entreprise
                    </label>
                    <input
                      type="text"
                      placeholder="Ma Société SARL"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="input-field"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="font-inter text-xs text-on-surface-variant uppercase tracking-widest block mb-1.5">
                      Secteur d'activité
                    </label>
                    <input
                      type="text"
                      placeholder="Commerce, Tech, Restauration, Santé..."
                      value={form.sector}
                      onChange={(e) => setForm({ ...form, sector: e.target.value })}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-outline-variant" />

              {/* ── Section 02 — Quel est votre besoin ? ── */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 bg-primary text-white text-xs font-manrope font-bold rounded-lg flex items-center justify-center">02</span>
                  <h2 className="font-manrope font-bold text-xl text-on-surface tracking-tight">Quel est votre besoin ?</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceCards.map((svc) => (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => toggleService(svc.id)}
                      className={`text-left p-4 rounded-xl transition-all duration-200 ${
                        selectedServices.includes(svc.id)
                          ? 'bg-primary/5 ring-2 ring-primary/30'
                          : 'bg-surface-container-low hover:bg-surface-container-highest'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 text-lg ${
                        selectedServices.includes(svc.id) ? 'bg-primary text-white' : 'bg-surface-container-lowest'
                      }`}>
                        {selectedServices.includes(svc.id) ? '✓' : svc.emoji}
                      </div>
                      <p className="font-manrope font-bold text-sm text-on-surface tracking-tight">{svc.title}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-outline-variant" />

              {/* ── Section 03 — Budget estimé ── */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 bg-primary text-white text-xs font-manrope font-bold rounded-lg flex items-center justify-center">03</span>
                  <h2 className="font-manrope font-bold text-xl text-on-surface tracking-tight">Budget estimé (en FCFA)</h2>
                </div>
                <div className="space-y-3">
                  {budgetOptions.map((b) => (
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

              <div className="h-px bg-outline-variant" />

              {/* ── Section 04 — Votre projet ── */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 bg-primary text-white text-xs font-manrope font-bold rounded-lg flex items-center justify-center">04</span>
                  <h2 className="font-manrope font-bold text-xl text-on-surface tracking-tight">Votre projet</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="font-inter text-xs text-on-surface-variant uppercase tracking-widest block mb-1.5">
                      Description du projet
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Décrivez votre projet, vos objectifs, vos inspirations..."
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      className="input-field resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-inter text-xs text-on-surface-variant uppercase tracking-widest block mb-1.5">
                        Délai souhaité
                      </label>
                      <select
                        value={form.delai}
                        onChange={(e) => setForm({ ...form, delai: e.target.value })}
                        className="input-field"
                      >
                        <option value="">Sélectionnez un délai</option>
                        {delaiOptions.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="font-inter text-xs text-on-surface-variant uppercase tracking-widest block mb-1.5">
                        Site web existant (optionnel)
                      </label>
                      <input
                        type="url"
                        placeholder="https://monsite.com"
                        value={form.website}
                        onChange={(e) => setForm({ ...form, website: e.target.value })}
                        className="input-field"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Submit ── */}
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
