import useSmoothScroll from './hooks/useSmoothScroll'
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

export default function App() {
  useSmoothScroll()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurStory />
        <Principles />
        <WhoWeServe />
        <Materials />
        <Quality />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
