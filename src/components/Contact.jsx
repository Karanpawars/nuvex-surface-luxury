import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Lock } from 'lucide-react'

// --- Email submission -------------------------------------------------
// This project ships wired for Formspree (zero backend, works instantly).
// To switch to EmailJS instead, see the commented block in onSubmit below.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID' // TODO: replace with client's Formspree form ID

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [intent, setIntent] = useState('sample')

  const onSubmit = async (data) => {
    setStatus(null)
    try {
      // --- Formspree (default) ---
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(document.getElementById('nuvex-contact-form')),
      })
      if (!res.ok) throw new Error('Request failed')

      // --- EmailJS (alternative) ---
      // import emailjs from '@emailjs/browser'
      // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY')

      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-ivory">
      <div className="container-inner grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start border-t border-black/5">
        {/* Left: contact details */}
        <div className="section-pad bg-cream min-w-0 h-full">
          <p className="eyebrow mb-6">Let&rsquo;s Build the Future Together</p>

          <ul className="space-y-6 text-sm">
            <li className="flex gap-4">
              <Mail size={18} className="text-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-ink/50 uppercase text-xs tracking-wide mb-1">Corporate Desk</p>
                <a href="mailto:sales@nuvexworld.com" className="text-ink hover:text-gold transition-colors">
                  sales@nuvexworld.com
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone size={18} className="text-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-ink/50 uppercase text-xs tracking-wide mb-1">National Trade Line</p>
                <span className="text-ink">[Insert SIM 1 Number Here]</span>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-ink/50 uppercase text-xs tracking-wide mb-1">Operations Matrix</p>
                <span className="text-ink">Mumbai | New Delhi | Bengaluru | Hyderabad | Pune</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <div className="section-pad min-w-0">
          <p className="eyebrow mb-6">Tell Us About Your Project</p>

          <form id="nuvex-contact-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <input type="hidden" name="intent" value={intent} />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  {...register('fullName', { required: true })}
                  name="fullName"
                  placeholder="Full Name *"
                  className="w-full border-b border-ink/20 bg-transparent py-3 text-sm focus:border-gold outline-none placeholder:text-ink/40"
                />
                {errors.fullName && <p className="text-xs text-red-600 mt-1">Full name is required.</p>}
              </div>
              <div>
                <input
                  {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  name="email"
                  type="email"
                  placeholder="Corporate Email *"
                  className="w-full border-b border-ink/20 bg-transparent py-3 text-sm focus:border-gold outline-none placeholder:text-ink/40"
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">A valid email is required.</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  {...register('company', { required: true })}
                  name="company"
                  placeholder="Company / Firm Name *"
                  className="w-full border-b border-ink/20 bg-transparent py-3 text-sm focus:border-gold outline-none placeholder:text-ink/40"
                />
                {errors.company && <p className="text-xs text-red-600 mt-1">Company name is required.</p>}
              </div>
              <div>
                <select
                  {...register('volume', { required: true })}
                  name="volume"
                  defaultValue=""
                  className="w-full border-b border-ink/20 bg-transparent py-3 text-sm focus:border-gold outline-none text-ink/70"
                >
                  <option value="" disabled>Volume Requirements *</option>
                  <option value="sample">Sample only</option>
                  <option value="<100sqm">Under 100 sqm</option>
                  <option value="100-500sqm">100 – 500 sqm</option>
                  <option value="500+sqm">500+ sqm / distributor scale</option>
                </select>
                {errors.volume && <p className="text-xs text-red-600 mt-1">Please select a volume.</p>}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-ink/50 pt-1">
              <Lock size={13} />
              Your information is secure and will only be used to respond to your inquiry.
            </div>

            <div className="flex flex-wrap gap-4 pt-3">
              <button
                type="submit"
                onClick={() => setIntent('sample')}
                disabled={isSubmitting}
                className="btn-gold disabled:opacity-60"
              >
                {isSubmitting && intent === 'sample' ? 'Sending…' : 'Request a Sample'}
              </button>
              <button
                type="submit"
                onClick={() => setIntent('distributor')}
                disabled={isSubmitting}
                className="btn-outline-dark disabled:opacity-60"
              >
                {isSubmitting && intent === 'distributor' ? 'Sending…' : 'Become a Distributor'}
              </button>
            </div>

            {status === 'success' && (
              <p className="text-sm text-green-700">
                Thank you — your inquiry has been sent. Our team will be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600">
                Something went wrong sending your message. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}