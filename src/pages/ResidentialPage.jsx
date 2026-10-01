import { Link, } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import residentialImage from '../assets/images/residential.png'

function ResidentialFeature({ number, title, text }) {
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

export default function ResidentialPage() {

  return (
    <div className="bg-ink text-white min-h-screen overflow-hidden">

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[75vh] flex items-end overflow-hidden">

        <img
          src={residentialImage}
          alt="NUVEX residential interior"
          className="absolute inset-0 w-full h-full object-contain"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24">

          <p className="text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-5">
            NUVEX™ Surface Luxury
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
            Residential
            <br />
            Spaces
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
              Residential Environments
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Surfaces made
              <br />
              for refined
              <br />
              everyday living.
            </h2>

          </div>


          <div className="lg:pt-10">

            <p className="text-base md:text-lg leading-relaxed text-ink/70">
              A home should feel personal, comfortable and effortlessly
              considered. NUVEX™ surfaces bring a refined material language
              to residential interiors where beauty and everyday function
              come together.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-ink/70">
              From kitchens and bathrooms to living spaces, bedrooms and
              custom architectural details, NUVEX™ creates opportunities
              for seamless transitions and cohesive interior design.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-ink/70">
              Thoughtful surfaces become part of the architecture itself,
              helping homeowners and designers create spaces that feel
              sophisticated, timeless and uniquely their own.
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
              src={residentialImage}
              alt="NUVEX residential surface application"
              className="absolute inset-0 w-full h-full object-contain"
            />

            <div className="absolute inset-0 bg-black/20" />

          </div>


          <div className="bg-[#151515] px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-center">

            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">
              Crafted for living
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Everyday spaces,
              <br />
              elevated.
            </h2>

            <p className="mt-8 text-white/60 leading-relaxed text-base md:text-lg">
              Residential interiors demand more than visual appeal. Surfaces
              become part of everyday routines, from preparing meals and
              getting ready in the morning to gathering with family and
              entertaining guests.
            </p>

            <p className="mt-5 text-white/60 leading-relaxed text-base md:text-lg">
              NUVEX™ combines a sophisticated visual language with surfaces
              designed to support the practical demands of contemporary
              residential environments.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESIDENTIAL ADVANTAGE
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
              the way you live.
            </h2>

          </div>


          <div className="grid md:grid-cols-2 border-t border-white/15">

            <ResidentialFeature
              number="01"
              title="Seamless"
              text="Create smooth visual transitions across countertops, walls, furniture and architectural details for a cohesive residential interior."
            />

            <ResidentialFeature
              number="02"
              title="Practical"
              text="Thoughtfully selected surfaces support everyday residential use while maintaining a refined and sophisticated appearance."
            />

            <ResidentialFeature
              number="03"
              title="Adaptable"
              text="From kitchens and bathrooms to living areas and custom furniture, NUVEX™ surfaces can become part of a wide range of residential applications."
            />

            <ResidentialFeature
              number="04"
              title="Personal"
              text="A considered palette of materials and finishes allows homeowners and designers to create interiors that reflect individual character and lifestyle."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          LARGE VISUAL SECTION
      ===================================================== */}

      <section className="relative min-h-[70vh] overflow-hidden">

        <img
          src={residentialImage}
          alt="NUVEX luxury residential interior"
          className="absolute inset-0 w-full h-full object-contain"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="relative z-10 min-h-[70vh] flex items-end px-6 md:px-12 lg:px-20 py-16 md:py-24">

          <div className="max-w-3xl">

            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-5">
              Designed for living
            </p>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
              From everyday
              <br />
              moments to
              <br />
              lasting impressions.
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
              Many possibilities.
            </h2>

            <p className="mt-8 max-w-md text-ink/60 leading-relaxed">
              Extend a consistent material identity throughout the home with
              surfaces designed for both architectural expression and
              everyday living.
            </p>

          </div>


          <div className="border-t border-ink/20">

            <Application
              title="Kitchens & Countertops"
              text="Create sophisticated kitchen environments with refined worktops, islands, backsplashes and integrated surface details."
            />

            <Application
              title="Bathrooms & Vanity Areas"
              text="Bring a calm, cohesive material language to vanity tops, wall surfaces and contemporary bathroom environments."
            />

            <Application
              title="Living & Dining Spaces"
              text="Extend the material palette into living rooms, dining areas and entertainment spaces with considered architectural details."
            />

            <Application
              title="Bedrooms & Private Spaces"
              text="Introduce refined surfaces into bedrooms, dressing areas and personal spaces while maintaining a cohesive interior language."
            />

            <Application
              title="Furniture & Custom Elements"
              text="Create distinctive tables, consoles, storage elements and bespoke furniture pieces with a consistent NUVEX™ finish."
            />

            <Application
              title="Architectural Details"
              text="Carry the material language across wall features, partitions, shelving and other custom architectural elements."
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
            A home shaped
            <br />
            by detail.
          </h2>

          <p className="max-w-2xl mx-auto mt-10 text-white/55 text-base md:text-lg leading-relaxed">
            Residential design is built through the details people see,
            touch and experience every day. NUVEX™ surfaces bring material,
            function and architectural character together to create spaces
            that feel distinctly personal.
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
              beautiful homes.
            </h2>

            <p className="max-w-xl mx-auto mt-7 text-white/55 leading-relaxed">
              Tell us about your residential project and explore how NUVEX™
              surfaces can become part of your home's architectural vision.
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


      {/* BACK */}
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