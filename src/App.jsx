import Hero from './components/layout/Hero'
import About from './components/layout/About'
import Creations from './components/layout/Creations'
import Footer from './components/layout/Footer'
function App() {

  return (
    <>
      <Hero />
      <main>
        <About />
        <Creations />
      </main>
      <Footer/>
    </>
  )
}

export default App
