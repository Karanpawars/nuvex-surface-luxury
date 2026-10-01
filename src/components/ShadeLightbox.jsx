import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ShadeLightbox({ shade, onClose }) {
  const images = shade?.images || []

  const getInitialIndex = () => {
    const fullSheetIndex = images.findIndex(
      (image) => image.usage === 'Full Material Sheet'
    )

    return fullSheetIndex !== -1 ? fullSheetIndex : 0
  }

  const [activeIndex, setActiveIndex] = useState(getInitialIndex)

  useEffect(() => {
    setActiveIndex(getInitialIndex())
  }, [shade])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current === 0 ? images.length - 1 : current - 1
        )
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) =>
          current === images.length - 1 ? 0 : current + 1
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [images.length, onClose])

  if (!shade || images.length === 0) return null

  const activeImage = images[activeIndex]

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    )
  }

  const goNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    )
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        bg-black/95
        backdrop-blur-md
        flex
        items-center
        justify-center
        p-4
        md:p-8
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-6xl
          max-h-[95vh]
          flex
          flex-col
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4 md:mb-5">
          <div>
            <p className="text-gold text-[10px] md:text-xs tracking-widest2 uppercase mb-1">
              {shade.code}
            </p>

            <h2 className="text-white text-2xl md:text-3xl font-light">
              {shade.name}
            </h2>

            <p className="text-white/45 text-xs md:text-sm mt-1">
              Premium Composite Series
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="
              w-10
              h-10
              rounded-full
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white
              hover:bg-white
              hover:text-ink
              transition-colors
              shrink-0
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Image */}
        <div
          className="
            relative
            w-full
            bg-black
            border
            border-white/10
            overflow-hidden
          "
        >
          <div className="relative w-full h-[55vh] md:h-[62vh]">
            <img
              key={activeImage.src}
              src={activeImage.src}
              alt={`${shade.name} - ${activeImage.usage}`}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-contain
              "
            />

            {/* Previous */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous image"
                className="
                  absolute
                  left-3
                  md:left-5
                  top-1/2
                  -translate-y-1/2
                  w-10
                  h-10
                  md:w-12
                  md:h-12
                  rounded-full
                  bg-black/60
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-gold
                  hover:text-ink
                  transition-colors
                "
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="
                  absolute
                  right-3
                  md:right-5
                  top-1/2
                  -translate-y-1/2
                  w-10
                  h-10
                  md:w-12
                  md:h-12
                  rounded-full
                  bg-black/60
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-gold
                  hover:text-ink
                  transition-colors
                "
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>
        </div>

        {/* Current Image Information */}
        <div className="flex items-center justify-between gap-4 py-3">
          <div className="min-w-0">
            <p className="text-gold text-[10px] tracking-widest2 uppercase">
              {activeImage.usage}
            </p>

            {activeImage.location && (
              <p className="text-white text-sm mt-1">
                {activeImage.location}
              </p>
            )}

            <p className="text-white/40 text-xs mt-1">
              {activeImage.title}
            </p>
          </div>

          <p className="text-white/40 text-xs shrink-0">
            {activeIndex + 1} / {images.length}
          </p>
        </div>

        {/* Thumbnail Slider */}
        {images.length > 1 && (
          <div
            className="
              w-full
              overflow-x-auto
              overflow-y-hidden
              pb-2
              hide-scrollbar
            "
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-3 min-w-max">
              {images.map((image, index) => {
                const isActive = index === activeIndex

                return (
                  <button
                    key={`${shade.id}-thumbnail-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View ${image.usage}`}
                    className={`
                      relative
                      w-20
                      h-16
                      md:w-24
                      md:h-20
                      shrink-0
                      overflow-hidden
                      border
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? 'border-gold ring-1 ring-gold'
                          : 'border-white/15 opacity-60 hover:opacity-100'
                      }
                    `}
                  >
                    <img
                      src={image.src}
                      alt={image.usage}
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        px-1
                        py-1
                        text-[7px]
                        uppercase
                        tracking-wide
                        text-white
                        bg-black/65
                        truncate
                      "
                    >
                      {image.usage}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
