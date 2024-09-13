import { useState } from 'react'
import Hero from './components/layout/Hero'
import About from './components/layout/About'
import Creations from './components/layout/Creations'
function App() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)

  return (
    <>
      <Hero 
        navbarIsOpen={navbarIsOpen}
        setNavbarIsOpen={setNavbarIsOpen}
      />
      <main>
        <About />
        <Creations />
      </main>
    </>
  )
}

export default App
