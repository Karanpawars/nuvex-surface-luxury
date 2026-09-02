# NUVEX™ Surface Luxury — Website

React + Vite build matching the approved homepage design, with GSAP/ScrollTrigger
scroll animations, Lenis smooth scrolling, a Swiper product/space slider, and a
validated contact form.

## Stack

| Requirement | Used |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS |
| Smooth scrolling | Lenis |
| Scroll animations | GSAP + ScrollTrigger |
| Slider | Swiper.js |
| Icons | lucide-react |
| Forms | React Hook Form |
| Email submission | Formspree (default) — EmailJS instructions below |
| Fonts | Cormorant Garamond (display) + Inter (body), via Google Fonts |

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # production build -> /dist
npm run preview     # preview the production build locally
```

## Project structure

```
src/
  App.jsx                 – page composition
  main.jsx                – React entry point
  index.css               – Tailwind base + shared component classes
  hooks/
    useSmoothScroll.js     – Lenis + GSAP ScrollTrigger sync (mounted once in App)
    useReveal.js           – reusable scroll-triggered fade/slide-up for sections
  data/
    content.js              – all copy & content arrays (edit here to update text)
  components/
    Header.jsx             – sticky nav + mobile menu
    Hero.jsx               – hero with GSAP entrance timeline
    OurStory.jsx
    Principles.jsx
    WhoWeServe.jsx
    Materials.jsx           – material cards + Swiper "Designed for Every Space" slider
    Quality.jsx             – certification badges
    Contact.jsx             – React Hook Form + Formspree/EmailJS submission
    Footer.jsx
```

## Wiring up the contact form

The form is wired to **Formspree** by default (no backend required):

1. Create a form at https://formspree.io and copy its endpoint.
2. In `src/components/Contact.jsx`, replace:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
   ```
   with the client's real endpoint.

To use **EmailJS** instead:

1. `npm install @emailjs/browser`
2. In `Contact.jsx`, uncomment the EmailJS block inside `onSubmit` and comment out
   the Formspree `fetch` call.
3. Add the EmailJS service ID, template ID, and public key from the EmailJS dashboard.

## Replacing placeholder imagery

The hero, "Our Story," and "Designed for Every Space" panels currently use
gradient placeholders instead of licensed photography, so the repo is safe to
commit and share before final assets are in hand. Drop the client's real photos
into `src/assets/` and swap the relevant `background` styles / add `<img>` tags
in `Hero.jsx`, `OurStory.jsx`, and `Materials.jsx`.

## Editing copy

Nearly all text content (nav labels, principles, "who we serve" cards, material
descriptions, certifications, footer links) lives in `src/data/content.js` — update
it there rather than hunting through components.

## Deployment

Static build — deploys to Vercel, Netlify, or any static host:

```bash
npm run build
# upload /dist, or connect the repo directly to Vercel/Netlify
```

## Accessibility & performance notes

- Smooth scrolling and scroll-reveal animations respect `prefers-reduced-motion`.
- Focus states are visible on all interactive elements.
- Form fields are validated client-side with React Hook Form and have associated
  error messaging.
