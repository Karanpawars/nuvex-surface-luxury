import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Principles from './components/Principles'
import WhoWeServe from './components/WhoWeServe'
import Materials from './components/Materials'
import Quality from './components/Quality'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

import HealthcarePage from './pages/HealthcarePage'
import CorporatePage from './pages/CorporatePage'
import OfficePage from './pages/OfficePage'
import ResidentialPage from './pages/ResidentialPage'
import RetailPage from './pages/RetailPage'
import Prostone from "./pages/Prostone";
import SolidSurface from './pages/SolidSurface'

// import ProductGallery from './components/ProductGallery'
// import Certificates from './components/Certificates'

// Scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  React.useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1))

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }, 100)
      }

      return
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname, hash])

  return null
}


function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <OurStory />
      <Principles />
      <WhoWeServe />
      <Materials />
      {/* <ProductGallery />
      <Certificates /> */}
      <Quality />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}


export default function App() {
  return (
    <BrowserRouter basename="/nuvex-surface-luxury">
      <ScrollToTop />
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path="/prostone" element={<Prostone />} />
        <Route path="/solid-surface" element={<SolidSurface />} />
        {/* HEALTHCARE */}
        <Route path="/healthcare" element={<HealthcarePage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/office" element={<OfficePage />} />
        <Route path="/residential" element={<ResidentialPage />} />
        <Route path="/retail" element={<RetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}