import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const galleryItems = [
  {
    title: 'Premium Architectural Surfaces',
    category: 'PROSTONE™',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Luxury Residential Interiors',
    category: 'RESIDENTIAL',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    className: '',
  },
  {
    title: 'Premium Commercial Spaces',
    category: 'COMMERCIAL',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',
    className: '',
  },
  {
    title: 'Healthcare Environments',
    category: 'HEALTHCARE',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
    className: '',
  },
  {
    title: 'Contemporary Hospitality',
    category: 'HOSPITALITY',
    image:
      'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=85',
    className: 'md:col-span-2',
  },
]

export default function ProductGallery() {
  const galleryRef = useReveal('.gallery-reveal', { stagger: 0.12 })

  return (
    <section
      ref={galleryRef}
      id="product-gallery"
      className="relative overflow-hidden bg-[#f3f0ea] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="gallery-reveal mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.35em] text-[#9c7a43]">
              PRODUCT GALLERY
            </p>

            <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-tight text-[#1b1b1b] md:text-5xl lg:text-6xl">
              Designed for
              <span className="block font-normal">
                exceptional spaces.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#555] md:text-right">
            Explore a curated selection of premium surface applications
            created for residential, commercial, healthcare and hospitality
            environments.
          </p>
        </div>

        {/* GALLERY */}
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-[260px] lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-reveal group relative overflow-hidden ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/35" />

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="mb-2 text-[10px] font-medium tracking-[0.3em] text-[#d4b477]">
                    {item.category}
                  </p>

                  <h3 className="max-w-sm text-lg font-light text-white md:text-xl">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* ARROW */}
              <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>

        {/* VIEW MORE */}
        <div className="gallery-reveal mt-12 flex justify-center">
          <Link
            to="/prostone"
            className="group inline-flex items-center gap-4 border border-[#1b1b1b]/30 px-8 py-4 text-xs font-medium tracking-[0.25em] text-[#1b1b1b] transition-all duration-300 hover:bg-[#1b1b1b] hover:text-white"
          >
            VIEW MORE

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </section>
  )
}