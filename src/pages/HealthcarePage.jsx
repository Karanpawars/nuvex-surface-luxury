import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

import healthcareImage from '../assets/images/healthcare/healthcare-hero.jpg'
import seamless from '../assets/images/healthcare/seamless.png'
import durable from '../assets/images/healthcare/durable.png'
import cleanliness from '../assets/images/healthcare/cleanliness.png'
import adaptable from '../assets/images/healthcare/adaptable.png'

function Application({ title, text }) {
  return (
    <div className="group py-6 border-b border-ink/20 transition-all duration-300 hover:bg-ink/5">
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

export default function HealthcarePage() {

  return (
    <div className="bg-ink text-white min-h-screen overflow-hidden">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">

        <img
          src={healthcareImage}
          alt="NUVEX healthcare interior"
          className="absolute inset-0 w-full h-full object-contain"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24">

          <p className="text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-5">
            NUVEX™ Surface Luxury
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
            Healthcare
          </h1>

          <div className="mt-6 h-px w-24 bg-gold" />

        </div>
      </section>

      {/* INTRO */}
      <section className="bg-sand text-ink px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-ink/50 mb-5">
              Healthcare Design
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Designed for cleaner,
              <br />
              calmer healthcare spaces.
            </h2>
          </div>

          <div className="lg:pt-10">

            <p className="text-base md:text-lg leading-relaxed text-ink/70">
              Healthcare environments demand materials that combine visual
              warmth with practical performance. NUVEX™ surfaces are designed
              to support contemporary healthcare interiors with clean lines,
              seamless detailing and adaptable applications.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-ink/70">
              From reception areas and patient rooms to nursing stations and
              clinical environments, the surface becomes part of the
              architecture rather than simply an additional finish.
            </p>

          </div>

        </div>
      </section>

      {/* IMAGE + CONTENT */}
      <section className="bg-ink px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[650px]">

          <div className="relative min-h-[450px] lg:min-h-full overflow-hidden">

            <img
              src={healthcareImage}
              alt="NUVEX healthcare surface application"
              className="absolute inset-0 w-full h-full object-contain"
            />

            <div className="absolute inset-0 bg-black/20" />

          </div>

          <div className="bg-[#151515] px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-center">

            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">
              Built around care
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Performance meets
              <br />
              thoughtful design.
            </h2>

            <p className="mt-8 text-white/60 leading-relaxed text-base md:text-lg">
              A healthcare interior needs to feel reassuring while meeting
              the demands of everyday use. NUVEX™ brings a refined material
              language to spaces where cleanliness, durability and usability
              are essential.
            </p>

            <p className="mt-5 text-white/60 leading-relaxed text-base md:text-lg">
              Carefully considered surfaces can create a consistent visual
              identity throughout an entire healthcare environment.
            </p>

          </div>

        </div>
      </section>

      {/* FOUR PRINCIPLES */}
      <section className="bg-[#111111] px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-16">

            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-5">
              NUVEX™ Advantage
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
              Designed around
              <br />
              healthcare needs.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 border-t border-white/15">

            {/* 01 - SEAMLESS */}
            <div className="border-b md:border-r border-white/15 p-8 md:p-12">

              <div className="w-full h-40 md:h-30 mb-2 overflow-hidden">
                <img
                  src={seamless}
                  alt="Seamless healthcare surfaces"
                  className="w-[100px] h-[100px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-light">
                Seamless
              </h3>

              <p className="mt-5 text-white/55 leading-relaxed">
                Clean visual transitions help create calm and cohesive
                interiors. Seamless detailing can reduce visual interruptions
                and allow architecture to take centre stage.
              </p>

            </div>

            {/* 02 - DURABLE */}
            <div className="border-b border-white/15 p-8 md:p-12">

              <div className="w-full h-40 md:h-30 mb-2 overflow-hidden">
                <img
                  src={durable}
                  alt="Durable healthcare surfaces"
                  className="w-[100px] h-[100px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-light">
                Durable
              </h3>

              <p className="mt-5 text-white/55 leading-relaxed">
                Healthcare interiors experience continuous activity. Material
                choices need to complement the demands of busy environments
                while maintaining a sophisticated appearance.
              </p>

            </div>

            {/* 03 - CLEANLINESS */}
            <div className="border-b md:border-r border-white/15 p-8 md:p-12">

              <div className="w-full h-40 md:h-30 mb-1 overflow-hidden">
                <img
                  src={cleanliness}
                  alt="Clean healthcare surfaces"
                  className="w-[100px] h-[100px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-light">
                Cleanliness
              </h3>

              <p className="mt-5 text-white/55 leading-relaxed">
                Surfaces play an important role in maintaining a visually
                clean and controlled healthcare environment. NUVEX™ supports
                a refined, uninterrupted surface language across interiors.
              </p>

            </div>

            {/* 04 - ADAPTABLE */}
            <div className="border-b border-white/15 p-8 md:p-12">

              <div className="w-full h-40 md:h-30 mb-1 overflow-hidden">
                <img
                  src={adaptable}
                  alt="Adaptable healthcare surfaces"
                  className="w-[100px] h-[100px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-light">
                Adaptable
              </h3>

              <p className="mt-5 text-white/55 leading-relaxed">
                Healthcare spaces are diverse. From reception desks and
                counters to wall applications and work surfaces, NUVEX™ can
                support a wide range of interior design requirements.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* LARGE IMAGE */}
      <section className="relative min-h-[70vh] overflow-hidden">

        <img
          src={healthcareImage}
          alt="NUVEX healthcare environment"
          className="absolute inset-0 w-full h-full object-contain"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="relative z-10 min-h-[70vh] flex items-end px-6 md:px-12 lg:px-20 py-16 md:py-24">

          <div className="max-w-3xl">

            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-5">
              Every space matters
            </p>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
              From reception
              <br />
              to patient care.
            </h2>

          </div>

        </div>

      </section>

      {/* APPLICATIONS */}
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
              Create a consistent visual identity across healthcare
              environments with considered surface applications throughout
              the space.
            </p>

          </div>

          <div className="border-t border-ink/20">

            <Application
              title="Reception & Waiting"
              text="Create welcoming reception counters and waiting environments with a sophisticated material palette."
            />

            <Application
              title="Nursing Stations"
              text="Bring practical work areas together with a clean and cohesive surface treatment."
            />

            <Application
              title="Patient Rooms"
              text="Introduce warm, refined finishes that contribute to a calmer and more comfortable environment."
            />

            <Application
              title="Clinical Areas"
              text="Support demanding environments with durable surfaces and carefully considered detailing."
            />

            <Application
              title="Workstations"
              text="Design functional healthcare work areas without compromising the overall visual language."
            />

            <Application
              title="Wash & Utility Areas"
              text="Extend the material palette into practical spaces for a more consistent interior."
            />

          </div>

        </div>
      </section>

      {/* DESIGN WITHOUT COMPROMISE */}
      <section className="bg-ink px-6 md:px-12 lg:px-20 py-24 md:py-36">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-6">
            NUVEX™ Surface Luxury
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95]">
            Design without
            <br />
            compromise.
          </h2>

          <p className="max-w-2xl mx-auto mt-10 text-white/55 text-base md:text-lg leading-relaxed">
            Healthcare interiors can be functional, reassuring and visually
            sophisticated at the same time. NUVEX™ helps designers create
            spaces where performance and architectural expression work
            together.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#151515] px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto">

          <div className="border border-white/10 p-8 md:p-14 lg:p-20 text-center">

            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-6">
              Start a conversation
            </p>

            <h2 className="text-4xl md:text-6xl font-light">
              Let’s build better
              <br />
              healthcare spaces.
            </h2>

            <p className="max-w-xl mx-auto mt-7 text-white/55 leading-relaxed">
              Tell us about your healthcare project and explore how NUVEX™
              surfaces can become part of your design vision.
            </p>

            <a
              href="/nuvex-surface-luxury/#contact"
              className="inline-flex mt-10 items-center justify-center px-8 py-4 border border-gold text-gold text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-gold hover:text-ink"
            >
              Discuss Your Project
            </a>

          </div>

        </div>
      </section>

      {/* BACK TO MATERIALS */}
      {/* BACK TO MATERIALS */}
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

      {/* FOOTER */}
      <Footer />

      <BackToTop />

    </div>
  )
}