
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Credentials from './components/Credentials.tsx'
import './App.css'
import About from './components/About.tsx'
import Services from './components/Services.tsx'
import Contact from './components/Contact.tsx'
import FAQ from './components/FAQ.tsx'
import Banner from './components/Banner.tsx'


export default function App() {


  return (
    <>
    <Navbar/>
     <Hero/>
     <Credentials/>
     <Services/>
     <About/>
     <Contact/>
     <FAQ/>
     <Banner/>
    </>
  )
}


