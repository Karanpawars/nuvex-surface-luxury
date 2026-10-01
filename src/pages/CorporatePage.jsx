import { Link, } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import corporateImage from '../assets/images/coporate.png'

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

export default function CorporatePage() {

  return (
    <div className="bg-ink text-white min-h-screen overflow-hidden">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">

        <img
          src={corporateImage}
          alt="NUVEX corporate interior"
          className="absolute inset-0 w-full h-full object-contain"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24">

          <p className="text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-5">
            NUVEX™ Surface Luxury
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
            Corporate
            <br />
            Public Spaces
          </h1>

          <div className="mt-6 h-px w-24 bg-gold" />

        </div>
      </section>


      {/* INTRO */}
      <section className="bg-sand text-ink px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          <div>

            <p className="text-xs tracking-[0.3em] uppercase text-ink/50 mb-5">
              Corporate Environments
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Designed for spaces
              <br />
              that move people.
            </h2>

          </div>

          <div className="lg:pt-10">

            <p className="text-base md:text-lg leading-relaxed text-ink/70">
              Contemporary corporate environments need to balance identity,
              performance and everyday functionality. NUVEX™ surfaces bring
              a refined material language to workplaces and public-facing
              spaces where design meets constant activity.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-ink/70">
              From reception areas and executive spaces to meeting rooms,
              workstations and collaborative environments, NUVEX™ helps
              create a consistent architectural expression across the
              workplace.
            </p>

          </div>

        </div>
      </section>


      {/* IMAGE + CONTENT */}
      <section className="bg-ink px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[650px]">

          <div className="relative min-h-[450px] lg:min-h-full overflow-hidden">

            <img
              src={corporateImage}
              alt="NUVEX corporate surface application"
              className="absolute inset-0 w-full h-full object-contain"
            />

            <div className="absolute inset-0 bg-black/20" />

          </div>


          <div className="bg-[#151515] px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-center">

            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">
              Built for business
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Performance meets
              <br />
              workplace design.
            </h2>

            <p className="mt-8 text-white/60 leading-relaxed text-base md:text-lg">
              A corporate interior is experienced throughout the day. Surfaces
              need to support movement, interaction and everyday use while
              maintaining the character of the space.
            </p>

            <p className="mt-5 text-white/60 leading-relaxed text-base md:text-lg">
              NUVEX™ allows designers to carry one sophisticated material
              language across different areas, creating spaces that feel
              connected, considered and distinctly contemporary.
            </p>

          </div>

        </div>
      </section>


      {/* CORPORATE ADVANTAGE */}
      <section className="bg-[#111111] px-6 md:px-12 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-16">

            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-5">
              NUVEX™ Advantage
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
              Built around
              <br />
              the modern workplace.
            </h2>

          </div>


          <div className="grid md:grid-cols-2 border-t border-white/15">

            {/* 01 */}
            <div className="border-b md:border-r border-white/15 p-8 md:p-12">

              <span className="text-gold text-sm">
                01
              </span>

              <h3 className="mt-8 text-2xl md:text-3xl font-light">
                Seamless
              </h3>

              <p className="mt-5 text-white/55 leading-relaxed">
                Create uninterrupted visual transitions across counters,
                walls, work areas and architectural details for a clean,
                cohesive interior language.
              </p>

            </div>


            {/* 02 */}
            <div className="border-b border-white/15 p-8 md:p-12">

              <span className="text-gold text-sm">
                02
              </span>

              <h3 className="mt-8 text-2xl md:text-3xl font-light">
                Durable
              </h3>

              <p className="mt-5 text-white/55 leading-relaxed">
                Corporate environments experience constant movement and
                interaction. NUVEX™ surfaces are designed to complement
                demanding everyday spaces while maintaining a refined finish.
              </p>

            </div>


            {/* 03 */}
            <div className="border-b md:border-r border-white/15 p-8 md:p-12">

              <span className="text-gold text-sm">
                03
              </span>

              <h3 className="mt-8 text-2xl md:text-3xl font-light">
                Adaptable
              </h3>

              <p className="mt-5 text-white/55 leading-relaxed">
                From reception counters and workstations to meeting spaces
                and custom architectural elements, NUVEX™ adapts to diverse
                corporate requirements.
              </p>

            </div>


            {/* 04 */}
            <div className="border-b border-white/15 p-8 md:p-12">

              <span className="text-gold text-sm">
                04
              </span>

              <h3 className="mt-8 text-2xl md:text-3xl font-light">
                Refined
              </h3>

              <p className="mt-5 text-white/55 leading-relaxed">
                A considered material palette helps corporate spaces express
                confidence, professionalism and contemporary architectural
                character.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* LARGE IMAGE */}
      <section className="relative min-h-[70vh] overflow-hidden">

        <img
          src={corporateImage}
          alt="NUVEX corporate environment"
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
              impression to everyday work.
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
              Bring a consistent material identity across corporate
              environments with surfaces designed to support both
              architectural expression and everyday use.
            </p>

          </div>


          <div className="border-t border-ink/20">

            <Application
              title="Reception & Welcome Areas"
              text="Create a confident first impression with refined reception desks, counters and welcoming public environments."
            />

            <Application
              title="Executive Spaces"
              text="Introduce a sophisticated material language across executive cabins, private offices and leadership environments."
            />

            <Application
              title="Meeting & Conference Spaces"
              text="Create cohesive meeting environments with considered surfaces that complement contemporary corporate interiors."
            />

            <Application
              title="Collaborative Workspaces"
              text="Support flexible working environments with surfaces that bring visual continuity to shared and interactive spaces."
            />

            <Application
              title="Workstations & Counters"
              text="Combine practical workplace requirements with a refined surface treatment across everyday work areas."
            />

            <Application
              title="Public & Hospitality Areas"
              text="Extend the corporate design language into lounges, breakout spaces and other high-visibility environments."
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
            Corporate environments can be functional, welcoming and
            architecturally distinctive at the same time. NUVEX™ surfaces
            help bring performance and design together across the workplace.
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
              corporate spaces.
            </h2>

            <p className="max-w-xl mx-auto mt-7 text-white/55 leading-relaxed">
              Tell us about your corporate project and explore how NUVEX™
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


      {/* FOOTER */}
      <Footer />

      <BackToTop />

    </div>
  )
}