import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Award } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const projectTypes = ['Stratégie', 'Développement Web', 'UI/UX Design', 'E-commerce']

export default function Contact() {
  const [selectedType, setSelectedType] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
    setSelectedType('')
  }

  return (
    <div className="pt-24">
      {/* ── HERO ────────────────────────────── */}
      <section className="relative px-6 py-20 max-w-4xl mx-auto text-center overflow-hidden">
        <div className="geo-shape w-80 h-80 -top-10 -right-16" />
        <div className="geo-shape w-56 h-56 bottom-0 -left-10" />
        <AnimatedSection className="relative z-10">
          <h1 className="font-manrope font-extrabold text-5xl md:text-7xl text-on-surface tracking-tight leading-tight mb-6">
            Discutons de votre
            <br />
            <span className="text-primary">prochain chapitre</span>
            <br />
            digital.
          </h1>
          <p className="font-inter text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Notre équipe est prête à écouter vos projets et à vous proposer
            les meilleures solutions digitales.
          </p>
        </AnimatedSection>
      </section>

      {/* ── CONTENU PRINCIPAL ───────────────── */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Colonne gauche — infos */}
          <AnimatedSection variant="slideLeft">
            <div className="space-y-6">
              {/* Email */}
              <div className="card flex items-start gap-4">
                <div className="w-11 h-11 bg-surface-container-low rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-inter text-xs text-on-surface-variant uppercase tracking-widest mb-1">Email</p>
                  <a
                    href="mailto:contact@webiidia.com"
                    className="font-manrope font-semibold text-on-surface hover:text-primary transition-colors"
                  >
                    contact@webiidia.com
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="card flex items-start gap-4">
                <div className="w-11 h-11 bg-surface-container-low rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-inter text-xs text-on-surface-variant uppercase tracking-widest mb-1">Téléphone</p>
                  <a
                    href="tel:+22901901958"
                    className="font-manrope font-semibold text-on-surface hover:text-primary transition-colors"
                  >
                    +229 01 90 19 58 02
                  </a>
                </div>
              </div>

              {/* Bureau */}
              <div className="card flex items-start gap-4">
                <div className="w-11 h-11 bg-surface-container-low rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-inter text-xs text-on-surface-variant uppercase tracking-widest mb-1">Bureau</p>
                  <p className="font-manrope font-semibold text-on-surface">
                    Quartier Pk10,<br />Cotonou, Bénin
                  </p>
                </div>
              </div>

              {/* Map stylisée */}
              <div className="relative rounded-2xl overflow-hidden h-56 shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Cotonou, Bénin"
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-on-surface/30" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur text-on-surface text-xs font-inter font-medium px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Nous sommes ici
                  </span>
                </div>
                {/* Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lift">
                    <MapPin size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Colonne droite — formulaire */}
          <AnimatedSection variant="slideRight">
            <div className="card p-8">
              <h2 className="font-manrope font-bold text-2xl text-on-surface tracking-tight mb-6">
                Envoyez-nous un message
              </h2>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-green-50 text-green-700 rounded-xl font-inter text-sm"
                >
                  ✓ Votre message a été envoyé ! Nous vous répondrons sous 24h.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-xs text-on-surface-variant uppercase tracking-widest block mb-1.5">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-xs text-on-surface-variant uppercase tracking-widest block mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean@exemple.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Type de projet */}
                <div>
                  <label className="font-inter text-xs text-on-surface-variant uppercase tracking-widest block mb-2">
                    Type de projet
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(selectedType === type ? '' : type)}
                        className={`text-sm font-inter px-4 py-1.5 rounded-full transition-all duration-200 ${
                          selectedType === type
                            ? 'bg-primary text-white'
                            : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-inter text-xs text-on-surface-variant uppercase tracking-widest block mb-1.5">
                    Votre message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Décrivez votre projet en quelques mots..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base py-3.5 rounded-xl">
                  Envoyer le message
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA BAS DE PAGE ─────────────────── */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="bg-primary-gradient rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <h2 className="font-manrope font-bold text-3xl text-white tracking-tight mb-6 relative z-10">
              Prêt à créer quelque chose d'exceptionnel ?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-inter px-4 py-2 rounded-full backdrop-blur">
                <Clock size={14} />
                Réponse sous 24h
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-inter px-4 py-2 rounded-full backdrop-blur">
                <Award size={14} />
                Expertise certifiée
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
