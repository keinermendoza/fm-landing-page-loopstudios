import { useState } from 'react'
import NavItem from '../ui/NavItem'
import brandLogo from '/images/logo.svg'
import hamburguerIcon from '/images/icon-hamburger.svg'
import closeIcon from '/images/icon-close.svg'

export default function Navbar() {
    const [navbarIsOpen, setNavbarIsOpen] = useState(false)

    return (
        <nav className={`header__navegation ${navbarIsOpen ? 'isOpen' : ''} container`}>
            <img className='brand-logo' src={brandLogo} alt='Loopstudios' />
            <ul 
                onClick={() => setNavbarIsOpen(false)}
                className={`navegation__list ${navbarIsOpen ? 'isOpen' : ''}`}>
                <NavItem link="#about">About</NavItem>
                <NavItem link="#careers">Careers</NavItem>
                <NavItem link="#events">Events</NavItem>
                <NavItem link="#products">Products</NavItem>
                <NavItem link="#support">Support</NavItem>
            </ul>

            <button
                className='toogle-button'
                onClick={() => setNavbarIsOpen(!navbarIsOpen)} 
                aria-label='Menu Button'>
                <img src={navbarIsOpen ? closeIcon : hamburguerIcon} alt="Menu Icon" />
            </button>
        </nav>
    )
}
