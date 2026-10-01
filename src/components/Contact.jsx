import { useState } from 'react'

import { useForm } from 'react-hook-form'

import { Mail, Phone, MapPin, Lock } from 'lucide-react'

import { useReveal } from '../hooks/useReveal'

import useSectionFade from '../hooks/useSectionFade'

// ---------------------------------------------------------
// Formspree endpoint
// Replace YOUR_FORM_ID with the client's actual Formspree ID
// ---------------------------------------------------------

const FORMSPREE_ENDPOINT =
  'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {

  const revealRef = useReveal('.reveal-item', {
    stagger: 0.1,
  })

  const sectionRef = useSectionFade()

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm()

  const [status, setStatus] = useState(null)
  const [intent, setIntent] = useState('sample')

  // ---------------------------------------------------------
  // FORM SUBMISSION
  // ---------------------------------------------------------

  const onSubmit = async () => {

    setStatus(null)

    try {

      const form = document.getElementById(
        'nuvex-contact-form'
      )

      const res = await fetch(
        FORMSPREE_ENDPOINT,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: new FormData(form),
        }
      )

      if (!res.ok) {
        throw new Error('Request failed')
      }

      setStatus('success')
      reset()

    } catch (err) {

      setStatus('error')

    }
  }

  return (

    <section
      id="contact"
      ref={(element) => {
        revealRef.current = element
        sectionRef.current = element
      }}
      className="scroll-fade-section bg-ivory"
    >

      <div className="container-inner grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start border-t border-black/5">

        {/* =================================================
            LEFT — CONTACT DETAILS
            ================================================= */}

        <div className="section-pad bg-cream min-w-0 h-full">

          <p className="reveal-item eyebrow mb-6">
            Let&rsquo;s Build the Future Together
          </p>

          <ul className="reveal-item space-y-6 text-sm">

            {/* EMAIL */}

            <li className="flex gap-4">

              <Mail
                size={18}
                className="text-gold shrink-0 mt-0.5"
              />

              <div>

                <p className="text-ink/50 uppercase text-xs tracking-wide mb-1">
                  Corporate Desk
                </p>

                <a
                  href="mailto:sales@nuvexworld.com"
                  className="text-ink hover:text-gold transition-colors"
                >
                  sales@nuvexworld.com
                </a>

              </div>

            </li>


            {/* PHONE */}

            <li className="flex gap-4">

              <Phone
                size={18}
                className="text-gold shrink-0 mt-0.5"
              />

              <div>

                <p className="text-ink/50 uppercase text-xs tracking-wide mb-1">
                  National Trade Line
                </p>

                <a
                  href="tel:+917303079839"
                  className="text-ink"
                >
                  +91 73030 79839
                </a>

              </div>

            </li>


            {/* LOCATIONS */}

            <li className="flex gap-4">

              <MapPin
                size={18}
                className="text-gold shrink-0 mt-0.5"
              />

              <div>

                <p className="text-ink/50 uppercase text-xs tracking-wide mb-1">
                  Operations Matrix
                </p>

                <span className="text-ink">
                  Mumbai | New Delhi | Bengaluru | Hyderabad | Pune
                </span>

              </div>

            </li>

          </ul>

        </div>


        {/* =================================================
            RIGHT — CONTACT FORM
            ================================================= */}

        <div className="section-pad min-w-0">

          <p className="reveal-item eyebrow mb-6">
            Tell Us About Your Project
          </p>

          <form
            id="nuvex-contact-form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            {/* FORM INTENT */}

            <input
              type="hidden"
              name="intent"
              value={intent}
            />


            {/* =================================================
                NAME + EMAIL
                ================================================= */}

            <div className="reveal-item grid sm:grid-cols-2 gap-5">

              {/* FULL NAME */}

              <div>

                <input
                  {...register('fullName', {
                    required: true,
                  })}
                  name="fullName"
                  placeholder="Full Name *"
                  className="
                    w-full
                    border-b
                    border-ink/20
                    bg-transparent
                    py-3
                    text-sm
                    focus:border-gold
                    outline-none
                    placeholder:text-ink/40
                  "
                />

                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1">
                    Full name is required.
                  </p>
                )}

              </div>


              {/* EMAIL */}

              <div>

                <input
                  {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  name="email"
                  type="email"
                  placeholder="Corporate Email *"
                  className="
                    w-full
                    border-b
                    border-ink/20
                    bg-transparent
                    py-3
                    text-sm
                    focus:border-gold
                    outline-none
                    placeholder:text-ink/40
                  "
                />

                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">
                    A valid email is required.
                  </p>
                )}

              </div>

            </div>


            {/* =================================================
                PHONE + COMPANY
                ================================================= */}

            <div className="reveal-item grid sm:grid-cols-2 gap-5">

              {/* PHONE NUMBER */}

              <div>

                <input
                  {...register('phone', {
                    required: true,
                    pattern: /^\+?[0-9\s-]{10,15}$/,
                  })}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="Phone Number *"
                  className="
                    w-full
                    border-b
                    border-ink/20
                    bg-transparent
                    py-3
                    text-sm
                    focus:border-gold
                    outline-none
                    placeholder:text-ink/40
                  "
                />

                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1">
                    Please enter a valid phone number.
                  </p>
                )}

              </div>


              {/* COMPANY */}

              <div>

                <input
                  {...register('company', {
                    required: true,
                  })}
                  name="company"
                  placeholder="Company / Firm Name *"
                  className="
                    w-full
                    border-b
                    border-ink/20
                    bg-transparent
                    py-3
                    text-sm
                    focus:border-gold
                    outline-none
                    placeholder:text-ink/40
                  "
                />

                {errors.company && (
                  <p className="text-xs text-red-600 mt-1">
                    Company name is required.
                  </p>
                )}

              </div>

            </div>


            {/* =================================================
                VOLUME
                ================================================= */}

            <div className="reveal-item">

              <select
                {...register('volume', {
                  required: true,
                })}
                name="volume"
                defaultValue=""
                className="
                  w-full
                  border-b
                  border-ink/20
                  bg-transparent
                  py-3
                  text-sm
                  focus:border-gold
                  outline-none
                  text-ink/70
                "
              >

                <option
                  value=""
                  disabled
                >
                  Volume Requirements *
                </option>

                <option value="sample">
                  Sample only
                </option>

                <option value="<100sqm">
                  Under 100 sqm
                </option>

                <option value="100-500sqm">
                  100 – 500 sqm
                </option>

                <option value="500+sqm">
                  500+ sqm / distributor scale
                </option>

              </select>

              {errors.volume && (
                <p className="text-xs text-red-600 mt-1">
                  Please select a volume.
                </p>
              )}

            </div>


            {/* =================================================
                PRIVACY MESSAGE
                ================================================= */}

            <div className="reveal-item flex items-center gap-2 text-xs text-ink/50 pt-1">

              <Lock size={13} />

              <span>
                Your information is secure and will only be used
                to respond to your inquiry.
              </span>

            </div>


            {/* =================================================
                ACTION BUTTONS
                ================================================= */}

            <div className="reveal-item flex flex-wrap gap-4 pt-3">

              {/* REQUEST SAMPLE */}

              <button
                type="submit"
                onClick={() => setIntent('sample')}
                disabled={isSubmitting}
                className="btn-gold disabled:opacity-60"
              >
                {isSubmitting && intent === 'sample'
                  ? 'Sending…'
                  : 'Request a Sample'}
              </button>


              {/* DISTRIBUTOR */}

              <button
                type="submit"
                onClick={() => setIntent('distributor')}
                disabled={isSubmitting}
                className="btn-outline-dark disabled:opacity-60"
              >
                {isSubmitting && intent === 'distributor'
                  ? 'Sending…'
                  : 'Become a Distributor'}
              </button>

            </div>


            {/* =================================================
                SUCCESS MESSAGE
                ================================================= */}

            {status === 'success' && (

              <p className="reveal-item text-sm text-green-700">
                Thank you — your inquiry has been sent.
                Our team will be in touch shortly.
              </p>

            )}


            {/* =================================================
                ERROR MESSAGE
                ================================================= */}

            {status === 'error' && (

              <p className="reveal-item text-sm text-red-600">
                Something went wrong sending your message.
                Please try again or email us directly.
              </p>

            )}

          </form>

        </div>

      </div>

    </section>

  )
}