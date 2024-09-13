import brandSVG from '/images/logo.svg'
import hamburguerSVG from '/images/icon-hamburger.svg'
import closeSVG from '/images/icon-close.svg'


export default function Hero({navbarIsOpen, setNavbarIsOpen}) {
  return (
    <header className='header'>
      <nav className={`header__navegation ${navbarIsOpen ? 'isOpen' : ''} container`}>
        <img className='brand-logo' src={brandSVG} alt='Loopstudios' />
          
          <ul className={`navegation__list ${navbarIsOpen ? 'isOpen' : ''}`}>
            <li>
              <a className='nav-link' href="#About">About</a>
            </li>
            <li>
              <a className='nav-link' href="#Careers">Careers</a>
            </li>
            <li>
              <a className='nav-link' href="#Events">Events</a>
            </li>
            <li>
              <a className='nav-link' href="#Products">Products</a>
            </li>
            <li>
              <a className='nav-link' href="#Support">Support</a>
            </li>
          </ul>

        <button
            className='toogle-button'
            onClick={() => setNavbarIsOpen(!navbarIsOpen)} 
            aria-label='Menu Button'>
            <img src={navbarIsOpen ? closeSVG : hamburguerSVG} alt="Menu Icon" />
        </button>
      </nav>
      
      <div className='hero container'>
          <h1 className='title'>Immersive experiences that deliver</h1>
      </div>
    </header>
  )
}
