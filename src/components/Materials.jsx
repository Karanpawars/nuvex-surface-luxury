import { useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'
import { materials, spaces } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import ShadeLightbox from './ShadeLightbox'
import { Link } from 'react-router-dom'

import privacySystem from '../assets/images/privacy_system_solutions.png'
import commercial1 from '../assets/images/healtcare.jpg'
import commercial2 from '../assets/images/coporate.png'
import commercial3 from '../assets/images/office.png'
import commercial4 from '../assets/images/residential.png'
import commercial5 from '../assets/images/retail.png'

import solidSurface01 from '../assets/images/solid-surface/series/0U6A8788.JPG.jpeg'
import solidSurface02 from '../assets/images/solid-surface/series/0U6A8790.JPG.jpeg'
import solidSurface03 from '../assets/images/solid-surface/series/0U6A8791.JPG.jpeg'
import solidSurface04 from '../assets/images/solid-surface/series/0U6A8792.JPG.jpeg'
import solidSurface05 from '../assets/images/solid-surface/series/0U6A8793.JPG.jpeg'
import solidSurface06 from '../assets/images/solid-surface/series/0U6A8794.JPG.jpeg'
import solidSurface07 from '../assets/images/solid-surface/series/0U6A8795.JPG.jpeg'
import solidSurface08 from '../assets/images/solid-surface/series/0U6A8796.JPG.jpeg'
import solidSurface09 from '../assets/images/solid-surface/series/0U6A8797.JPG.jpeg'
import solidSurface10 from '../assets/images/solid-surface/series/0U6A8798.JPG.jpeg'
import solidSurface11 from '../assets/images/solid-surface/series/0U6A8801.JPG.jpeg'

import 'swiper/css'
import 'swiper/css/pagination'

const solidSurfaceImages = [
  solidSurface01,
  solidSurface02,
  solidSurface03,
  solidSurface04,
  solidSurface05,
  solidSurface06,
  solidSurface07,
  solidSurface08,
  solidSurface09,
  solidSurface10,
  solidSurface11,
]

const spaceLinks = {
  Healthcare: '/healthcare',
  Corporate: '/corporate',
  Office: '/office',
  Residential: '/residential',
  Retail: '/retail',
}

/* =========================================================
   MATERIAL CARD IMAGE
   ========================================================= */

function MaterialCard({ item, onShadeClick }) {
  return (
    <div className="reveal-item relative bg-ivory border border-black/5 flex flex-col overflow-hidden min-w-0 h-full">

      {item.link ? (
        <Link to={item.link} className="block h-full">
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
        </Link>
      ) : (
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
      )}

      {/* SWATCHES */}
      {(item.swatches || item.images) && (
        <div className="px-7 pb-2">
          <p className="text-[0.65rem] tracking-wide uppercase text-ink/45 mb-2.5">
            {item.meta}
          </p>

          <SwatchSlider
            colors={item.swatches}
            shades={item.shades}
            images={item.images}
            onShadeClick={onShadeClick}
          />
        </div>
      )}

      {/* SECOND SWATCHES */}
      {/* {item.swatches2Count && (
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
      )} */}

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

function SwatchSlider({
  colors,
  shades,
  images,
  outline = false,
  onShadeClick,
}) {
  const swiperRef = useRef(null)

  /*
    Priority:
    1. Actual shade object image
    2. Solid Surface image
    3. Shade color
  */

  const items = images || colors || []

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 min-w-0 overflow-hidden">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          slidesPerView="auto"
          spaceBetween={10}
          className="!overflow-visible"
        >
          {items.map((item, index) => {
            const shade = shades?.[index]

            const previewImage =
              shade?.images?.find(
                (image) => image.usage === 'Full Material Sheet'
              )?.src ||
              shade?.images?.[0]?.src ||
              (images ? images[index] : null)

            const shadeColor =
              shade?.color ||
              (!images && colors ? colors[index] : null)

            return (
              <SwiperSlide
                key={shade?.id || index}
                style={{ width: 110 }}
              >
                {shade?.label && (
                  <span
                    className="
                      block
                      w-[110px]
                      text-[9px]
                      leading-tight
                      text-ink
                      text-left
                      mb-2
                      min-h-[24px]
                    "
                  >
                    {shade.label}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => {
                    if (shade && onShadeClick) {
                      onShadeClick(shade)
                    }
                  }}
                  aria-label={
                    shade
                      ? `View ${shade.name}`
                      : `Shade ${index + 1}`
                  }
                  className="
                    block
                    group
                    focus:outline-none
                  "
                >
                  <span
                    className={`
                      block
                      w-[110px]
                      h-[165px]
                      rounded-sm
                      border
                      overflow-hidden
                      transition-all
                      duration-200
                      ${
                        outline
                          ? 'border-dashed border-ink/25 bg-transparent'
                          : 'border-black/10 hover:border-gold hover:scale-[1.03]'
                      }
                    `}
                  >
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt={
                          shade?.name ||
                          `Shade ${index + 1}`
                        }
                        className="
                          w-full
                          h-full
                          object-cover
                          block
                        "
                      />
                    ) : shadeColor ? (
                      <span
                        className="block w-full h-full"
                        style={{
                          backgroundColor: shadeColor,
                        }}
                      />
                    ) : (
                      <span className="block w-full h-full bg-transparent" />
                    )}
                  </span>
                </button>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <button
        type="button"
        aria-label="See more shades"
        onClick={() => swiperRef.current?.slideNext()}
        className="
          shrink-0
          w-7
          h-7
          rounded-full
          border
          border-gold/40
          flex
          items-center
          justify-center
          text-gold
          hover:bg-gold
          hover:text-ink
          transition-colors
        "
      >
        <ChevronRight size={14} />
      </button>
    </div>
  )
}

/* =========================================================
   DESIGNED FOR EVERY SPACE ROW
   ========================================================= */

function SpaceRow({ title, image, link }) {
  return (
    <Link
      to={link}
      className="relative block h-full w-full overflow-hidden group cursor-pointer"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors duration-500" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6">
        <div className="flex items-center justify-between w-full">

          {/* TITLE */}
          <h4 className="text-white text-sm md:text-base font-medium leading-snug max-w-[75%]">
            {title}
          </h4>

          {/* ARROW */}
          <span
            className="
              w-8 h-8
              rounded-full
              border border-gold/50
              flex items-center justify-center
              text-gold
              shrink-0
              group-hover:bg-gold
              group-hover:text-ink
              transition-colors
            "
          >
            <ChevronRight size={15} />
          </span>

        </div>
      </div>
    </Link>
  )
}

/* =========================================================
   MATERIALS SECTION
   ========================================================= */

export default function Materials() {
  const [selectedShade, setSelectedShade] = useState(null)

  const ref = useReveal('.reveal-item', {
    stagger: 0.1,
  })

  /*
    These images are specifically for
    "Designed for Every Space"
  */

  const spaceImages = [
    commercial1,
    commercial2,
    commercial3,
    commercial4,
    commercial5,
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
                onShadeClick={setSelectedShade}
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
                link={
                  index === 0
                    ? '/healthcare'
                    : index === 1
                      ? '/corporate'
                      : index === 2
                        ? '/office'
                        : index === 3
                          ? '/residential'
                          : '/retail'
                }
              />
            </SwiperSlide>
            ))}
          </Swiper>

          {/* PAGINATION */}

          {/* <div className="spaces-pagination flex justify-center gap-2 mt-6" />

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs tracking-widest2 uppercase text-gold/80 mb-3">
              Crafted for Modern Spaces
            </p>

            <p className="text-sm text-white/55 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer vitae justo eget magna fermentum iaculis.
              Curabitur blandit tempus porttitor, sed posuere
              consectetur est at lobortis.
            </p>
          </div> */}

        </div>

        {selectedShade && (
          <ShadeLightbox
            shade={selectedShade}
            onClose={() => setSelectedShade(null)}
          />
        )}

      </div>
    </section>
  )
}