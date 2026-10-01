import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import commercialImage from "../assets/images/solid-surface/commercial.jpg";
import counterTopImage from "../assets/images/solid-surface/counter-top.jpg";
import healthcareImage from "../assets/images/solid-surface/healthcare.jpg";
import modernStoreImage from "../assets/images/solid-surface/modern-store.jpg";

const SolidSurface = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />

      <main className="bg-[#111111] text-white min-h-screen">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">

          <img
            src={commercialImage}
            alt="NUVEX Solid Surface commercial interior"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 max-w-6xl w-full mx-auto">

            <p className="text-[#C9A96E] tracking-[0.35em] text-sm md:text-base uppercase mb-6">
              Solid Surface Series
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
              NUVEX™
              <br />
              <span className="font-semibold">SOLID SURFACE</span>
            </h1>

            <div className="mt-10 max-w-3xl">
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                Advanced solid surface technology engineered for seamless
                commercial interiors, specialized environments, and
                high-traffic architectural installations.
              </p>
            </div>

          </div>
        </section>


        {/* =====================================================
            OVERVIEW
        ===================================================== */}
        <section className="bg-[#E9E6DF] text-[#181818] px-6 md:px-12 py-24 md:py-32">

          <div className="max-w-6xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div>

                <p className="text-[#9C7A43] tracking-[0.3em] text-sm uppercase mb-5">
                  01 — Overview
                </p>

                <h2 className="text-4xl md:text-6xl font-light mb-10">
                  Advanced Material
                  <br />
                  Surface Technology
                </h2>

                <p className="max-w-4xl text-lg md:text-xl leading-relaxed text-gray-700">
                  Nuvex™ Solid Surface is an advanced material blend of
                  high-purity acrylic resins and refined mineral fillers.
                  Calibrated for flawless consistency and uniform color
                  stability across high-volume runs, it is the premier choice
                  for seamless commercial counters, specialized corporate
                  interiors, and high-traffic public installations.
                </p>

              </div>

              <div className="h-[400px] md:h-[520px] overflow-hidden">

                <img
                  src={counterTopImage}
                  alt="NUVEX Solid Surface countertop"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            KEY APPLICATIONS
        ===================================================== */}
        <section className="bg-[#151515] px-6 md:px-12 py-24 md:py-32">

          <div className="max-w-6xl mx-auto">

            <p className="text-[#C9A96E] tracking-[0.3em] text-sm uppercase mb-5">
              02 — Key Applications
            </p>

            <h2 className="text-4xl md:text-6xl font-light mb-16">
              Designed for
              <br />
              demanding spaces
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {/* APPLICATION 01 */}
              <div className="border border-white/10 bg-white/[0.03] overflow-hidden group">

                <div className="h-64 md:h-72 overflow-hidden">

                  <img
                    src={commercialImage}
                    alt="Solid Surface commercial application"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="p-8 md:p-10">

                  <span className="text-[#C9A96E] text-sm tracking-[0.2em]">
                    APPLICATION 01
                  </span>

                  <h3 className="text-2xl md:text-3xl font-medium mt-6 mb-5">
                    Commercial Countertops
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    Seamless work surfaces for office pantries, retail
                    checkouts, corporate cafeterias, and high-traffic service
                    counters.
                  </p>

                </div>

              </div>


              {/* APPLICATION 02 */}
              <div className="border border-white/10 bg-white/[0.03] overflow-hidden group">

                <div className="h-64 md:h-72 overflow-hidden">

                  <img
                    src={healthcareImage}
                    alt="Solid Surface healthcare environment"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="p-8 md:p-10">

                  <span className="text-[#C9A96E] text-sm tracking-[0.2em]">
                    APPLICATION 02
                  </span>

                  <h3 className="text-2xl md:text-3xl font-medium mt-6 mb-5">
                    Healthcare Environments
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    Seamless, hygienic wall panels, laboratory benchtops, and
                    scrub sinks requiring zero dirt-trapping joints or visible
                    seams.
                  </p>

                </div>

              </div>


              {/* APPLICATION 03 */}
              <div className="border border-white/10 bg-white/[0.03] overflow-hidden group">

                <div className="h-64 md:h-72 overflow-hidden">

                  <img
                    src={modernStoreImage}
                    alt="Solid Surface modern architectural interior"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="p-8 md:p-10">

                  <span className="text-[#C9A96E] text-sm tracking-[0.2em]">
                    APPLICATION 03
                  </span>

                  <h3 className="text-2xl md:text-3xl font-medium mt-6 mb-5">
                    Monolithic Feature Walls
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    Expansive interior public spaces requiring unified, clean
                    surface layouts with inconspicuous joints over extensive
                    lengths.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TECHNICAL ADVANTAGES
        ===================================================== */}
        <section className="bg-[#E9E6DF] text-[#181818] px-6 md:px-12 py-24 md:py-32">

          <div className="max-w-6xl mx-auto">

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20 items-center">

              <div>

                <p className="text-[#9C7A43] tracking-[0.3em] text-sm uppercase mb-5">
                  03 — Technical Advantages
                </p>

                <h2 className="text-4xl md:text-6xl font-light">
                  Engineered for
                  <br />
                  seamless performance
                </h2>

              </div>

              <div className="h-[350px] md:h-[500px] overflow-hidden">

                <img
                  src={healthcareImage}
                  alt="NUVEX Solid Surface healthcare application"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>


            <div className="grid md:grid-cols-3 gap-8 mt-16">

              {/* ADVANTAGE 01 */}
              <div className="border-t border-black/20 pt-6">

                <span className="text-sm text-gray-500">
                  ADVANTAGE 01
                </span>

                <div className="text-[#9C7A43] text-4xl md:text-5xl font-light mt-6 mb-8">
                  01
                </div>

                <h3 className="text-2xl md:text-3xl mb-5">
                  Inconspicuous Joins
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Panels are chemically bonded on-site to create entirely
                  seamless, continuous installations of any size or length
                  without visible gaps.
                </p>

              </div>


              {/* ADVANTAGE 02 */}
              <div className="border-t border-black/20 pt-6">

                <span className="text-sm text-gray-500">
                  ADVANTAGE 02
                </span>

                <div className="text-[#9C7A43] text-4xl md:text-5xl font-light mt-6 mb-8">
                  02
                </div>

                <h3 className="text-2xl md:text-3xl mb-5">
                  Superior Hygiene
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Engineered with an ultra-dense structure that ensures
                  bacteria, mold, and daily grime have no deep microscopic
                  crevices to easily penetrate or breed in.
                </p>

              </div>


              {/* ADVANTAGE 03 */}
              <div className="border-t border-black/20 pt-6">

                <span className="text-sm text-gray-500">
                  ADVANTAGE 03
                </span>

                <div className="text-[#9C7A43] text-4xl md:text-5xl font-light mt-6 mb-8">
                  03
                </div>

                <h3 className="text-2xl md:text-3xl mb-5">
                  Renewable &amp; Repairable
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Minor scratches, surface marks, or deep daily wear can be
                  easily buffed and polished out on-site using standard
                  sanding protocols, fully restoring the original finish.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MATERIAL CHARACTERISTICS
        ===================================================== */}
        <section className="bg-[#111111] px-6 md:px-12 py-24 md:py-32">

          <div className="max-w-6xl mx-auto">

            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-20 items-center">

              <div className="h-[350px] md:h-[500px] overflow-hidden">

                <img
                  src={modernStoreImage}
                  alt="NUVEX Solid Surface modern interior"
                  className="w-full h-full object-cover"
                />

              </div>

              <div>

                <p className="text-[#C9A96E] tracking-[0.3em] text-sm uppercase mb-5">
                  04 — Material Characteristics
                </p>

                <h2 className="text-4xl md:text-6xl font-light mb-16">
                  Built for
                  <br />
                  continuous use
                </h2>

              </div>

            </div>


            <div className="grid md:grid-cols-3 gap-6 mt-16">

              {/* CHARACTERISTIC 01 */}
              <div className="border border-white/10 p-8 md:p-10">

                <div className="text-[#C9A96E] text-4xl mb-8">
                  AC
                </div>

                <h3 className="text-2xl mb-5">
                  High-Purity Acrylic
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Advanced acrylic resin composition engineered to provide
                  consistency, durability, and reliable surface performance
                  across demanding architectural applications.
                </p>

              </div>


              {/* CHARACTERISTIC 02 */}
              <div className="border border-white/10 p-8 md:p-10">

                <div className="text-[#C9A96E] text-4xl mb-8">
                  MF
                </div>

                <h3 className="text-2xl mb-5">
                  Refined Mineral Fillers
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Refined mineral fillers contribute to the dense, uniform
                  structure required for consistent color and high-performance
                  solid surface fabrication.
                </p>

              </div>


              {/* CHARACTERISTIC 03 */}
              <div className="border border-white/10 p-8 md:p-10">

                <div className="text-[#C9A96E] text-4xl mb-8">
                  SS
                </div>

                <h3 className="text-2xl mb-5">
                  Seamless Surface
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Designed for chemically bonded installations that create
                  continuous surface layouts with minimal visible joints and
                  clean architectural transitions.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            COLLECTION CTA
        ===================================================== */}
        <section className="bg-[#E9E6DF] text-[#181818] px-6 py-24 text-center">

          <p className="text-[#9C7A43] tracking-[0.3em] text-sm uppercase mb-5">
            NUVEX™ SOLID SURFACE
          </p>

          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Explore the
            <br />
            Solid Surface Collection
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Discover a seamless surface solution engineered for commercial,
            healthcare, corporate, and high-traffic architectural environments.
          </p>

        </section>
        <div className="border-b border-white/10 bg-[#171717] px-6 py-4 md:px-10 lg:px-16">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="group inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-white/55 transition-colors duration-300 hover:text-[#c9a96e]"
                >
                  <span className="text-sm transition-transform duration-300 group-hover:-translate-x-1">
                    ←
                  </span>
                  BACK
                </button>
              </div>
      </main>

      <Footer />
    </>
  );
};

export default SolidSurface;