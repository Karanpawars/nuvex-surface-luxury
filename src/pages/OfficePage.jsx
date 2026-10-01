import { Link, } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import officeImage from '../assets/images/office.png'

function OfficeFeature({ number, title, text }) {
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

export default function OfficePage() {

  return (
    <div className="bg-ink text-white min-h-screen overflow-hidden">

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[75vh] flex items-end overflow-hidden">

        <img
          src={officeImage}
          alt="NUVEX office interior"
          className="absolute inset-0 w-full h-full object-contain"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24">

          <p className="text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-5">
            NUVEX™ Surface Luxury
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
            Office
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
              Modern Workspaces
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Surfaces designed
              <br />
              for the way
              <br />
              work happens.
            </h2>

          </div>


          <div className="lg:pt-10">

            <p className="text-base md:text-lg leading-relaxed text-ink/70">
              Modern offices are no longer defined by desks and meeting
              rooms alone. They are dynamic environments where people
              collaborate, connect, focus and create.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-ink/70">
              NUVEX™ surfaces bring a refined architectural language to
              contemporary workplaces, combining sophisticated aesthetics
              with practical performance for spaces that are designed to
              evolve with the people who use them.
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
              src={officeImage}
              alt="NUVEX office surface application"
              className="absolute inset-0 w-full h-full object-contain"
            />

            <div className="absolute inset-0 bg-black/20" />

          </div>


          <div className="bg-[#151515] px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-center">

            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">
              Built for the workplace
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Where performance
              <br />
              meets design.
            </h2>

            <p className="mt-8 text-white/60 leading-relaxed text-base md:text-lg">
              Office surfaces are experienced every day, from the first
              interaction at reception to collaborative meetings and
              focused individual work.
            </p>

            <p className="mt-5 text-white/60 leading-relaxed text-base md:text-lg">
              NUVEX™ creates opportunities for continuity across these
              environments, helping designers develop workplaces that feel
              sophisticated, cohesive and distinctly contemporary.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          OFFICE ADVANTAGE
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
              modern work.
            </h2>

          </div>


          <div className="grid md:grid-cols-2 border-t border-white/15">

            <OfficeFeature
              number="01"
              title="Seamless"
              text="Create visually continuous surfaces across reception desks, workstations, counters and architectural details for a clean and considered workplace."
            />

            <OfficeFeature
              number="02"
              title="Durable"
              text="Designed for environments where people interact with surfaces throughout the day, supporting the demands of busy contemporary workplaces."
            />

            <OfficeFeature
              number="03"
              title="Adaptable"
              text="From collaborative areas and meeting rooms to private offices and custom furniture, NUVEX™ adapts to a wide range of workplace requirements."
            />

            <OfficeFeature
              number="04"
              title="Refined"
              text="Sophisticated surfaces help transform functional office environments into spaces that communicate identity, confidence and architectural character."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          LARGE VISUAL SECTION
      ===================================================== */}

      <section className="relative min-h-[70vh] overflow-hidden">

        <img
          src={officeImage}
          alt="NUVEX modern office environment"
          className="absolute inset-0 w-full h-full object-contain"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="relative z-10 min-h-[70vh] flex items-end px-6 md:px-12 lg:px-20 py-16 md:py-24">

          <div className="max-w-3xl">

            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-5">
              Designed for every interaction
            </p>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
              From first
              <br />
              impression to
              <br />
              everyday work.
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
              Bring a consistent material identity across the workplace with
              surfaces designed to support architectural expression,
              collaboration and everyday use.
            </p>

          </div>


          <div className="border-t border-ink/20">

            <Application
              title="Reception & Welcome Areas"
              text="Create a distinctive first impression with refined reception desks, counters and welcoming entrance environments."
            />

            <Application
              title="Workstations & Desks"
              text="Bring continuity and sophistication to everyday work areas with surfaces that complement modern workstation design."
            />

            <Application
              title="Meeting & Conference Rooms"
              text="Create cohesive meeting environments with considered surfaces for conference tables, counters and architectural details."
            />

            <Application
              title="Collaborative Spaces"
              text="Support flexible working environments with surfaces designed around shared interaction, communication and movement."
            />

            <Application
              title="Executive Offices"
              text="Introduce a sophisticated material palette across private offices, executive cabins and leadership environments."
            />

            <Application
              title="Breakout & Lounge Areas"
              text="Extend the workplace design language into informal spaces, lounges and employee interaction areas."
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
            Workspaces with
            <br />
            a point of view.
          </h2>

          <p className="max-w-2xl mx-auto mt-10 text-white/55 text-base md:text-lg leading-relaxed">
            The modern workplace can be functional, comfortable and
            architecturally distinctive at the same time. NUVEX™ surfaces
            help bring these qualities together through considered material
            design.
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
              Let’s build better
              <br />
              office spaces.
            </h2>

            <p className="max-w-xl mx-auto mt-7 text-white/55 leading-relaxed">
              Tell us about your workplace project and explore how NUVEX™
              surfaces can become part of your architectural vision.
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