import { useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'
import { materials, spaces } from '../data/content'
import { useReveal } from '../hooks/useReveal'

import privacySystem from '../assets/images/privacy_system_solutions.png'
import commercial1 from '../assets/images/designer_commercial_spaces_cleanup-first.png'
import commercial2 from '../assets/images/designer_commercial_spaces_cleanup-second.png'
import commercial3 from '../assets/images/designer_commercial_spaces_cleanup-third.png'
import commercial4 from '../assets/images/designer_commercial_spaces_cleanup-fourth.png'

import 'swiper/css'
import 'swiper/css/pagination'

/* =========================================================
   MATERIAL CARD IMAGE
   ========================================================= */

function MaterialCard({ item }) {
  return (
    <div className="reveal-item relative bg-ivory border border-black/5 flex flex-col overflow-hidden min-w-0 h-full">

      <div className="p-7 pb-5">
        <p className="text-[0.65rem] tracking-widest2 uppercase text-gold font-semibold mb-1">
          {item.tag}
        </p>

        <h3 className="text-lg text-ink font-medium mb-3 leading-snug">
          {item.title}
        </h3>

        <p className="text-sm text-ink/60 leading-relaxed">
          {item.text}
        </p>
      </div>

      {/* SWATCHES */}
      {item.swatches && (
        <div className="px-7 pb-2">
          <p className="text-[0.65rem] tracking-wide uppercase text-ink/45 mb-2.5">
            {item.meta}
          </p>

          <SwatchSlider colors={item.swatches} />
        </div>
      )}

      {/* SECOND SWATCHES */}
      {item.swatches2Count && (
        <div className="px-7 pb-7 pt-4">
          <p className="text-[0.65rem] tracking-wide uppercase text-ink/45 mb-2.5 leading-relaxed">
            {item.meta2}
          </p>

          <SwatchSlider
            colors={Array.from({
              length: item.swatches2Count,
            })}
            outline
          />
        </div>
      )}

      {!item.swatches && !item.swatches2Count && (
        <div className="pb-7" />
      )}

      {/* PRIVACY SYSTEM IMAGE */}
      {item.hasImage && (
        <div
          className="mt-auto h-40 sm:h-48 w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${privacySystem})`,
          }}
          role="img"
          aria-label="Privacy System Solutions"
        />
      )}

      {item.hasImage && (
        <p className="px-7 py-3 text-[0.7rem] text-ink/45 border-t border-black/5">
          {item.meta2}
        </p>
      )}
    </div>
  )
}

/* =========================================================
   SWATCH SLIDER
   ========================================================= */

function SwatchSlider({ colors, outline = false }) {
  const swiperRef = useRef(null)

  return (
    <div className="flex items-center gap-2">

      <div className="flex-1 min-w-0 overflow-hidden">

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          slidesPerView="auto"
          spaceBetween={8}
          className="!overflow-visible"
        >

          {colors.map((color, index) => (
            <SwiperSlide
              key={index}
              style={{ width: 30 }}
            >
              <span
                className={`block w-[30px] h-[30px] rounded-sm ${
                  outline
                    ? 'border border-dashed border-ink/25 bg-transparent'
                    : 'border border-black/10'
                }`}
                style={
                  outline
                    ? undefined
                    : {
                        backgroundColor: color,
                      }
                }
              />
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

      <button
        type="button"
        aria-label="See more shades"
        onClick={() => swiperRef.current?.slideNext()}
        className="shrink-0 w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors"
      >
        <ChevronRight size={14} />
      </button>

    </div>
  )
}

/* =========================================================
   DESIGNED FOR EVERY SPACE ROW
   ========================================================= */

function SpaceRow({ title, image }) {
  return (
    <div
      className="relative h-full overflow-hidden group cursor-default bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >

      {/* DARK OVERLAY FOR TEXT READABILITY */}
      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors duration-500" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6">

        <div className="flex items-center justify-between w-full">

          <h4 className="text-white text-sm md:text-base font-medium leading-snug max-w-[75%]">
            {title}
          </h4>

          <span className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-ink transition-colors">
            <ChevronRight size={15} />
          </span>

        </div>

      </div>

    </div>
  )
}

/* =========================================================
   MATERIALS SECTION
   ========================================================= */

export default function Materials() {

  const ref = useReveal('.reveal-item', {
    stagger: 0.1,
  })

  /*
    These four images are specifically for
    "Designed for Every Space"
  */

  const spaceImages = [
    commercial1,
    commercial2,
    commercial3,
    commercial4,
  ]

  return (
    <section
      id="materials"
      ref={ref}
      className="bg-sand"
    >

      <div className="container-inner grid lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-stretch">

        {/* =================================================
            LEFT — OUR MATERIALS
            ================================================= */}

        <div className="section-pad !pr-6 lg:!pr-10 min-w-0">

          <p className="reveal-item text-xs tracking-widest2 uppercase text-gold font-medium mb-8">
            Our Materials. Endless Possibilities.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">

            {materials.map((material) => (
              <MaterialCard
                key={material.title}
                item={material}
              />
            ))}

          </div>

        </div>

        {/* =================================================
            RIGHT — DESIGNED FOR EVERY SPACE
            ================================================= */}

        <div className="reveal-item bg-ink px-6 md:px-8 py-10 flex flex-col min-w-0 h-full">

          <p className="text-xs tracking-widest2 uppercase text-gold/90 font-medium mb-6">
            Designed for Every Space
          </p>

          <Swiper
            modules={[
              Pagination,
              Mousewheel,
            ]}
            direction="vertical"
            slidesPerView={4}
            spaceBetween={6}
            mousewheel={{
              forceToAxis: true,
            }}
            pagination={{
              clickable: true,
              el: '.spaces-pagination',
            }}
            style={{
              height: 300,
            }}
            className="w-full"
          >

            {spaces.map((space, index) => (

              <SwiperSlide key={space.title}>

                <SpaceRow
                  title={space.title}
                  image={spaceImages[index % spaceImages.length]}
                />

              </SwiperSlide>

            ))}

          </Swiper>

          {/* PAGINATION */}

          <div className="spaces-pagination flex justify-center gap-2 mt-6" />
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs tracking-widest2 uppercase text-gold/80 mb-3">
              Crafted for Modern Spaces
            </p>

            <p className="text-sm text-white/55 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer vitae justo eget magna fermentum iaculis. Curabitur
              blandit tempus porttitor, sed posuere consectetur est at
              lobortis.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs tracking-widest2 uppercase text-gold/80 mb-3">
              Crafted for Modern Spaces
            </p>

            <p className="text-sm text-white/55 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer vitae justo eget magna fermentum iaculis. Curabitur
              blandit tempus porttitor, sed posuere consectetur est at
              lobortis.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs tracking-widest2 uppercase text-gold/80 mb-3">
              Crafted for Modern Spaces
            </p>

            <p className="text-sm text-white/55 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer vitae justo eget magna fermentum iaculis. Curabitur
              blandit tempus porttitor, sed posuere consectetur est at
              lobortis.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}
