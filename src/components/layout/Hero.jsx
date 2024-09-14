import Navbar from "../ui/Navbar"


export default function Hero({navbarIsOpen, setNavbarIsOpen}) {
  return (
    <header className='header'>
      <Navbar />
      
      <div className='hero container'>
          <h1 className='title'>Immersive experiences that deliver</h1>
      </div>
    </header>
  )
}
