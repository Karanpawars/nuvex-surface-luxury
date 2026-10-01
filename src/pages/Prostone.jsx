import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import stoneImage from "../assets/images/prostone/stone.jpg";
import stoneWallImage from "../assets/images/prostone/stone-wall.jpg";
import architectureImage from "../assets/images/prostone/architecture.jpg";
import luxuryImage from "../assets/images/prostone/luxury.jpg";

const Prostone = () => {
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
            src={stoneImage}
            alt="NUVEX Prostone architectural surface"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 max-w-6xl w-full mx-auto">

            <p className="text-[#C9A96E] tracking-[0.35em] text-sm md:text-base uppercase mb-6">
              Premium Composite Series
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
              NUVEX™
              <br />
              <span className="font-semibold">PROSTONE</span>
            </h1>

            <div className="mt-10 max-w-2xl">
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                Engineered mineral composite surfaces designed for
                high-performance architectural applications.
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
                  Specification &
                  <br />
                  Architectural Manual
                </h2>

                <p className="max-w-4xl text-lg md:text-xl leading-relaxed text-gray-700">
                  Prostone Nuvex™ is a high-performance engineered mineral
                  composite series, structurally optimized in dual-thickness
                  profiles to provide a seamless, lightweight alternative to
                  natural stone and quartz claddings. Produced utilizing a
                  specialized casting process, it delivers deep organic veining,
                  pristine color consistency, and luxury aesthetics across both
                  vertical and horizontal surfaces.
                </p>

              </div>

              <div className="h-[400px] md:h-[520px] overflow-hidden">

                <img
                  src={stoneWallImage}
                  alt="NUVEX Prostone stone wall application"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            THICKNESS MATRICES
        ===================================================== */}
        <section className="bg-[#151515] px-6 md:px-12 py-24 md:py-32">

          <div className="max-w-6xl mx-auto">

            <p className="text-[#C9A96E] tracking-[0.3em] text-sm uppercase mb-5">
              02 — Thickness Matrices
            </p>

            <h2 className="text-4xl md:text-6xl font-light mb-16">
              Engineered for
              <br />
              different applications
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {/* 6MM */}
              <div className="border border-white/10 bg-white/[0.03] overflow-hidden">

                <div className="h-64 md:h-72 overflow-hidden">
                  <img
                    src={architectureImage}
                    alt="Prostone architectural application"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-8 md:p-12">

                  <span className="text-[#C9A96E] text-5xl md:text-6xl font-light">
                    06
                  </span>

                  <p className="text-sm tracking-[0.3em] text-gray-500 mt-3 mb-8">
                    MILLIMETRE PROFILE
                  </p>

                  {/* <h3 className="text-2xl md:text-3xl font-medium mb-5">
                    6mm Profile
                  </h3> */}

                  <p className="text-gray-400 text-lg leading-relaxed">
                    Ultra-sleek, high-tensile layout engineered for premium
                    lightweight vertical wall claddings, elevator panelling,
                    and feature installations.
                  </p>

                </div>

              </div>


              {/* 12MM */}
              <div className="border border-white/10 bg-white/[0.03] overflow-hidden">

                <div className="h-64 md:h-72 overflow-hidden">
                  <img
                    src={luxuryImage}
                    alt="Prostone luxury interior application"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-8 md:p-12">

                  <span className="text-[#C9A96E] text-5xl md:text-6xl font-light">
                    12
                  </span>

                  <p className="text-sm tracking-[0.3em] text-gray-500 mt-3 mb-8">
                    MILLIMETRE PROFILE
                  </p>

                  {/* <h3 className="text-2xl md:text-3xl font-medium mb-5">
                    12mm Profile
                  </h3> */}

                  <p className="text-gray-400 text-lg leading-relaxed">
                    High-density structural layout engineered for heavy-duty
                    commercial counters, premium reception table tops,
                    hospitality vanities, and premium horizontal work surfaces.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            KEY APPLICATIONS
        ===================================================== */}
        <section className="bg-[#E9E6DF] text-[#181818] px-6 md:px-12 py-24 md:py-32">

          <div className="max-w-6xl mx-auto">

            <p className="text-[#9C7A43] tracking-[0.3em] text-sm uppercase mb-5">
              03 — Key Applications
            </p>

            <h2 className="text-4xl md:text-6xl font-light mb-16">
              Designed for
              <br />
              every space
            </h2>


            <div className="grid md:grid-cols-2 gap-8">

              {/* APPLICATION 01 */}
              <div className="group">

                <div className="h-72 overflow-hidden mb-6">
                  <img
                    src={stoneWallImage}
                    alt="Prostone interior wall cladding"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="border-t border-black/20 pt-6">

                  <span className="text-sm text-gray-500">
                    APPLICATION 01
                  </span>

                  <h3 className="text-2xl md:text-3xl mt-3 mb-4">
                    Interior Wall Cladding
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Seamless vertical panels for high-end commercial elevator
                    banks, luxury corporate lobbies, and hospitality features.
                  </p>

                </div>

              </div>


              {/* APPLICATION 02 */}
              <div className="group">

                <div className="h-72 overflow-hidden mb-6">
                  <img
                    src={architectureImage}
                    alt="Prostone architectural reception structure"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="border-t border-black/20 pt-6">

                  <span className="text-sm text-gray-500">
                    APPLICATION 02
                  </span>

                  <h3 className="text-2xl md:text-3xl mt-3 mb-4">
                    Monolithic Reception Structures
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Structural skin wrapper and solid horizontal counter-tops
                    for custom corporate brand desks and reception environments.
                  </p>

                </div>

              </div>


              {/* APPLICATION 03 */}
              <div className="group">

                <div className="h-72 overflow-hidden mb-6">
                  <img
                    src={luxuryImage}
                    alt="Prostone premium joinery and vanity"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="border-t border-black/20 pt-6">

                  <span className="text-sm text-gray-500">
                    APPLICATION 03
                  </span>

                  <h3 className="text-2xl md:text-3xl mt-3 mb-4">
                    Premium Joinery &amp; Vanities
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Luxury hospitality vanity layouts, executive kitchen
                    layouts, premium door panel overlays, and custom furniture
                    fabrication.
                  </p>

                </div>

              </div>


              {/* APPLICATION 04 */}
              <div className="group">

                <div className="h-72 overflow-hidden mb-6">
                  <img
                    src={stoneImage}
                    alt="Prostone premium architectural space"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="border-t border-black/20 pt-6">

                  <span className="text-sm text-gray-500">
                    APPLICATION 04
                  </span>

                  <h3 className="text-2xl md:text-3xl mt-3 mb-4">
                    Premium Architectural Spaces
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Engineered surfaces for luxury residential, commercial,
                    hospitality, healthcare, and bespoke interior environments.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TECHNICAL ADVANTAGES
        ===================================================== */}
        <section className="bg-[#111111] px-6 md:px-12 py-24 md:py-32">

          <div className="max-w-6xl mx-auto">

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20 items-center">

              <div>

                <p className="text-[#C9A96E] tracking-[0.3em] text-sm uppercase mb-5">
                  04 — Technical Advantages
                </p>

                <h2 className="text-4xl md:text-6xl font-light">
                  Engineered
                  <br />
                  performance
                </h2>

              </div>

              <div className="h-[350px] md:h-[500px] overflow-hidden">

                <img
                  src={architectureImage}
                  alt="NUVEX Prostone engineered architecture"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>


            <div className="grid md:grid-cols-3 gap-6 mt-16">

              <div className="border border-white/10 p-8 md:p-10">

                <div className="text-[#C9A96E] text-4xl mb-8">
                  60%
                </div>

                <h3 className="text-2xl mb-5">
                  Dead-Weight Reduction
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Eliminates up to 60% of the traditional dead-weight load
                  compared to thick natural stone slabs, reducing structural
                  load strain on high-rise installations.
                </p>

              </div>


              <div className="border border-white/10 p-8 md:p-10">

                <div className="text-[#C9A96E] text-4xl mb-8">
                  01
                </div>

                <h3 className="text-2xl mb-5">
                  Radiused Contouring
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  The high-tensile composite structure allows for smooth,
                  radiused curving and contour framing for column wraps and
                  curved architectural features without cracking the material.
                </p>

              </div>


              <div className="border border-white/10 p-8 md:p-10">

                <div className="text-[#C9A96E] text-4xl mb-8">
                  HD
                </div>

                <h3 className="text-2xl mb-5">
                  High Surface Density
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Completely homogenous structure engineered for maximum
                  resistance to moisture penetration, deep surface wear, and
                  daily staining in busy commercial zones.
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
            NUVEX™ PROSTONE
          </p>

          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Explore the
            <br />
            Prostone Collection
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Discover the complete range of premium composite shades,
            engineered for contemporary architectural environments.
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

export default Prostone;