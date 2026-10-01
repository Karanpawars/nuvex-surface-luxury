import { Link, } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import retailImage from '../assets/images/retail.png'

function RetailFeature({ number, title, text }) {
  return (
    <div className="border-b border-white/15 p-8 md:p-12">
      <span className="text-gold text-sm">
        {number}
      </span>

      <h3 className="mt-8 text-2xl md:text-3xl font-light">
        {title}
      </h3>

      <p className="mt-5 text-white/55 leading-relaxed">
        {text}
      </p>
    </div>
  )
}

function Application({ title, text }) {
  return (
    <div className="py-6 border-b border-ink/20 transition-all duration-300 hover:bg-ink/5">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-lg md:text-xl text-dark font-bold">
            {title}
          </h3>

          <p className="mt-2 max-w-xl text-sm md:text-base text-dark leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function RetailPage() {

  return (
    <div className="bg-ink text-white min-h-screen overflow-hidden">

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[75vh] flex items-end overflow-hidden">

        <img
          src={retailImage}
          alt="NUVEX retail interior"
          className="absolute inset-0 w-full h-full object-contain"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24">

          <p className="text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-5">
            NUVEX™ Surface Luxury
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
            Retail
            <br />
            Environments
          </h1>

          <div className="mt-6 h-px w-24 bg-gold" />

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="bg-sand text-ink px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          <div>

            <p className="text-xs tracking-[0.3em] uppercase text-ink/50 mb-5">
              Retail Environments
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Designed to make
              <br />
              every interaction
              <br />
              memorable.
            </h2>

          </div>


          <div className="lg:pt-10">

            <p className="text-base md:text-lg leading-relaxed text-ink/70">
              Retail spaces are experienced before a product is ever
              touched. The architecture, materials and details of a store
              work together to shape how customers see and experience a
              brand.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-ink/70">
              NUVEX™ surfaces bring a refined material language to retail
              environments, helping designers create spaces that feel
              distinctive, cohesive and aligned with the identity of the
              brand.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE + CONTENT
      ===================================================== */}

      <section className="bg-ink px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[650px]">

          <div className="relative min-h-[450px] lg:min-h-full overflow-hidden">

            <img
              src={retailImage}
              alt="NUVEX retail surface application"
              className="absolute inset-0 w-full h-full object-contain"
            />

            <div className="absolute inset-0 bg-black/20" />

          </div>


          <div className="bg-[#151515] px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-center">

            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">
              Built for brand experience
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Where retail
              <br />
              becomes experience.
            </h2>

            <p className="mt-8 text-white/60 leading-relaxed text-base md:text-lg">
              Every surface contributes to the atmosphere of a retail
              environment. From counters and display areas to walls,
              partitions and customer touchpoints, material selection plays
              an important role in creating a memorable space.
            </p>

            <p className="mt-5 text-white/60 leading-relaxed text-base md:text-lg">
              NUVEX™ allows designers to create a consistent material
              expression across the customer journey while supporting the
              practical requirements of busy retail environments.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          RETAIL ADVANTAGE
      ===================================================== */}

      <section className="bg-[#111111] px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-16">

            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-5">
              NUVEX™ Advantage
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
              Designed around
              <br />
              the customer journey.
            </h2>

          </div>


          <div className="grid md:grid-cols-2 border-t border-white/15">

            <RetailFeature
              number="01"
              title="Distinctive"
              text="Create memorable retail environments with a sophisticated surface language that supports the identity and character of each brand."
            />

            <RetailFeature
              number="02"
              title="Durable"
              text="Retail spaces experience constant movement and interaction. NUVEX™ surfaces are designed to complement demanding everyday environments."
            />

            <RetailFeature
              number="03"
              title="Seamless"
              text="Carry one material language across counters, walls, displays and architectural details to create a cohesive customer experience."
            />

            <RetailFeature
              number="04"
              title="Adaptable"
              text="From boutique stores to large commercial environments, NUVEX™ can become part of diverse retail concepts and custom applications."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          LARGE VISUAL SECTION
      ===================================================== */}

      <section className="relative min-h-[70vh] overflow-hidden">

        <img
          src={retailImage}
          alt="NUVEX retail environment"
          className="absolute inset-0 w-full h-full object-contain"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="relative z-10 min-h-[70vh] flex items-end px-6 md:px-12 lg:px-20 py-16 md:py-24">

          <div className="max-w-3xl">

            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-5">
              Designed for every touchpoint
            </p>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
              From entrance
              <br />
              to checkout.
            </h2>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="bg-sand text-ink px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24">

          <div>

            <p className="text-xs tracking-[0.3em] uppercase text-ink/50 mb-5">
              Applications
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              One surface
              <br />
              language.
              <br />
              Many experiences.
            </h2>

            <p className="mt-8 max-w-md text-ink/60 leading-relaxed">
              Bring a consistent material identity across retail spaces with
              surfaces designed to support brand expression, customer
              interaction and everyday performance.
            </p>

          </div>


          <div className="border-t border-ink/20">

            <Application
              title="Retail Counters"
              text="Create distinctive checkout, service and consultation counters that become an integral part of the store environment."
            />

            <Application
              title="Product Display Areas"
              text="Frame products with refined surface treatments that complement merchandise while maintaining a cohesive visual identity."
            />

            <Application
              title="Feature Walls"
              text="Transform architectural surfaces into memorable visual elements that strengthen the atmosphere and character of the retail space."
            />

            <Application
              title="Fitting & Consultation Areas"
              text="Create considered customer-facing environments where material, lighting and spatial design work together."
            />

            <Application
              title="Reception & Welcome Areas"
              text="Make a strong first impression with sophisticated entrance zones, reception desks and branded customer touchpoints."
            />

            <Application
              title="Hospitality & Lounge Areas"
              text="Extend the retail experience into waiting, lounge and hospitality spaces with a consistent premium material language."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          CLOSING STATEMENT
      ===================================================== */}

      <section className="bg-ink px-6 md:px-12 lg:px-20 py-24 md:py-36">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-6">
            NUVEX™ Surface Luxury
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95]">
            Spaces that
            <br />
            tell your story.
          </h2>

          <p className="max-w-2xl mx-auto mt-10 text-white/55 text-base md:text-lg leading-relaxed">
            Retail design is about more than displaying products. It is
            about creating an environment customers remember. NUVEX™
            surfaces help transform that experience through material,
            detail and architectural expression.
          </p>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#151515] px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto">

          <div className="border border-white/10 p-8 md:p-14 lg:p-20 text-center">

            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-6">
              Start a conversation
            </p>

            <h2 className="text-4xl md:text-6xl font-light">
              Let’s build
              <br />
              memorable retail spaces.
            </h2>

            <p className="max-w-xl mx-auto mt-7 text-white/55 leading-relaxed">
              Tell us about your retail project and explore how NUVEX™
              surfaces can become part of your brand experience.
            </p>

            <Link
              to="/#contact"
              className="inline-flex mt-10 items-center justify-center px-8 py-4 border border-gold text-gold text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-gold hover:text-ink"
            >
              Discuss Your Project
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          BACK BUTTON
      ===================================================== */}

      <div className="border-b border-white/10 bg-[#171717] px-6 py-4 md:px-10 lg:px-16">

        <a
          href="/nuvex-surface-luxury/#materials"
          className="group inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-white/55 transition-colors duration-300 hover:text-[#c9a96e]"
        >
          <span className="text-sm transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          BACK
        </a>

      </div>


      <Footer />

      <BackToTop />

    </div>
  )
}