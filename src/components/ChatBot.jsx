import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, MessageCircle } from 'lucide-react'

const WELCOME_MSG = "Bonjour ! Je suis l'assistant Webiidia. Je peux vous renseigner sur nos services, nos tarifs et vous aider à démarrer votre projet. Comment puis-je vous aider ?"

const keywordResponses = [
  {
    keywords: ['prix', 'coût', 'tarif', 'combien'],
    response: "Nos tarifs varient selon le projet :\n• Site vitrine : à partir de 150 000 FCFA\n• Site e-commerce : à partir de 400 000 FCFA\n• Logo + identité : à partir de 75 000 FCFA\n• Gestion réseaux sociaux : à partir de 80 000 FCFA/mois\n• SEO : à partir de 100 000 FCFA/mois\n• Photo/vidéo : à partir de 60 000 FCFA\nSouhaitez-vous un devis personnalisé ?",
  },
  {
    keywords: ['site web', 'site internet', 'site vitrine', 'e-commerce'],
    response: "Nous créons des sites vitrines, e-commerce et applications web sur mesure. Nos sites sont rapides, responsive et optimisés pour Google. Délai moyen : 2 à 4 semaines.\nVous voulez en savoir plus sur les tarifs ?",
  },
  {
    keywords: ['logo', 'design', 'graphisme', 'identité visuelle', 'charte'],
    response: "Notre équipe de design crée votre identité visuelle complète : logo, charte graphique, cartes de visite, flyers et supports print.\nUn logo professionnel démarre à 75 000 FCFA.",
  },
  {
    keywords: ['réseaux', 'social', 'instagram', 'facebook', 'tiktok', 'community'],
    response: "Nous gérons vos réseaux sociaux de A à Z : stratégie, création de contenu, publication et community management.\nForfaits à partir de 80 000 FCFA/mois.",
  },
  {
    keywords: ['seo', 'google', 'référencement', 'ads', 'publicité'],
    response: "Nous optimisons votre visibilité sur Google avec le SEO naturel et les campagnes Google Ads & Meta Ads.\nAudit SEO gratuit inclus dans tout devis.",
  },
  {
    keywords: ['photo', 'vidéo', 'shooting', 'film', 'reportage'],
    response: "Notre photographe réalise vos shootings produit, portraits corporate et films institutionnels à Cotonou.\nTarifs à partir de 60 000 FCFA.",
  },
  {
    keywords: ['google business', 'fiche google', 'google maps', 'my business'],
    response: "Nous créons et optimisons votre fiche Google Business pour apparaître sur Google Maps et les recherches locales à Cotonou et au Bénin.",
  },
  {
    keywords: ['impression', 'flyer', 'carte', 'affiche', 'kakémono', 'print'],
    response: "Nous concevons et gérons vos impressions : cartes de visite, flyers, affiches, kakémonos et tous supports print.\nDesign + impression livrés chez vous.",
  },
  {
    keywords: ['devis', 'commencer', 'projet', 'lancer'],
    response: "Super ! Cliquez ici pour remplir votre demande de devis :\n[Demander un devis →](/devis)\nNotre équipe vous répond sous 48h !",
  },
  {
    keywords: ['bonjour', 'salut', 'bonsoir', 'hello', 'hi', 'yo', 'coucou'],
    response: "Bonjour ! Bienvenue chez Webiidia 😊 Comment puis-je vous aider aujourd'hui ?",
  },
  {
    keywords: ['merci', 'thanks'],
    response: "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 😊",
  },
]

const DEFAULT_RESPONSE = "Je ne suis pas sûr de comprendre votre demande. Voici ce que je peux faire : répondre sur nos services, tarifs et délais.\nOu contactez-nous directement : hello@webiidia.agency"

function getResponse(message) {
  const lower = message.toLowerCase()
  for (const entry of keywordResponses) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.response
    }
  }
  return DEFAULT_RESPONSE
}

function formatMessage(text) {
  const parts = text.split(/(\[.*?\]\(.*?\))/g)
  return parts.map((part, i) => {
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/)
    if (linkMatch) {
      return (
        <Link
          key={i}
          to={linkMatch[2]}
          className="text-primary underline hover:text-primary/80 font-semibold"
        >
          {linkMatch[1]}
        </Link>
      )
    }
    return part.split('\n').map((line, j) => (
      <span key={`${i}-${j}`}>
        {j > 0 && <br />}
        {line}
      </span>
    ))
  })
}

function TypingIndicator() {
  return (
    <div className="flex gap-1 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-on-surface-variant/40"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}

function timestamp() {
  return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: WELCOME_MSG, time: timestamp() },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg = { from: 'user', text: trimmed, time: timestamp() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const botResponse = getResponse(trimmed)
      setTyping(false)
      setMessages((prev) => [...prev, { from: 'bot', text: botResponse, time: timestamp() }])
    }, 1000)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-primary-gradient rounded-full flex items-center justify-center shadow-lift hover:scale-105 transition-transform"
          >
            <MessageCircle size={24} className="text-white" />
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-card">
              <span className="font-manrope font-extrabold text-[9px] text-primary">IA</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-[9999] w-[360px] h-[480px] max-h-[85vh] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ border: '1px solid rgba(195,197,217,0.25)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-primary-gradient">
              {/* Mini hexagon logo */}
              <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="18" height="20" viewBox="0 0 38 40" fill="none">
                  <polygon points="19,1 35,10 35,30 19,39 3,30 3,10" fill="rgba(255,255,255,0.3)" />
                  <polyline points="9,14 14,28 19,20 24,28 29,14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-manrope font-bold text-sm text-white tracking-tight">Assistant Webiidia</p>
                <p className="font-inter text-[11px] text-white/60">En ligne</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-surface-container-lowest">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
                  {msg.from === 'bot' && (
                    <div className="w-7 h-7 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg width="12" height="14" viewBox="0 0 38 40" fill="none">
                        <polygon points="19,1 35,10 35,30 19,39 3,30 3,10" fill="rgba(255,255,255,0.3)" />
                        <polyline points="9,14 14,28 19,20 24,28 29,14" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  )}
                  <div className={`max-w-[75%] ${msg.from === 'user' ? 'order-1' : ''}`}>
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm font-inter leading-relaxed ${
                        msg.from === 'user'
                          ? 'bg-primary text-white rounded-br-md'
                          : 'bg-white text-on-surface shadow-card rounded-bl-md'
                      }`}
                      style={msg.from === 'bot' ? { border: '1px solid rgba(195,197,217,0.15)' } : undefined}
                    >
                      {formatMessage(msg.text)}
                    </div>
                    <p className={`text-[10px] font-inter text-on-surface-variant/50 mt-1 ${msg.from === 'user' ? 'text-right' : ''}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="12" height="14" viewBox="0 0 38 40" fill="none">
                      <polygon points="19,1 35,10 35,30 19,39 3,30 3,10" fill="rgba(255,255,255,0.3)" />
                      <polyline points="9,14 14,28 19,20 24,28 29,14" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md shadow-card px-2 py-1" style={{ border: '1px solid rgba(195,197,217,0.15)' }}>
                    <TypingIndicator />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 bg-white border-t border-outline-variant">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Tapez votre message..."
                  className="flex-1 font-inter text-sm text-on-surface bg-surface-container-low rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 transition-shadow placeholder:text-on-surface-variant/50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-primary-gradient rounded-xl flex items-center justify-center text-white disabled:opacity-40 hover:opacity-90 transition-opacity flex-shrink-0"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
