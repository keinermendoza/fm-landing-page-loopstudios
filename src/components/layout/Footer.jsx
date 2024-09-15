import brandLogo from '/images/logo.svg'
import facebookIcon from '/images/icon-facebook.svg'
import twitterIcon from '/images/icon-twitter.svg'
import pinterestIcon from '/images/icon-pinterest.svg'
import instagramIcon from '/images/icon-instagram.svg'
import NavItem from '../ui/NavItem'

export default function Footer() {
  return (
    <footer className='footer-wrapper '>
      <div className="footer container">

        <nav className='footer__navegation'>
            <img className='brand-logo' src={brandLogo} alt='Loopstudios' />
            <ul className='navegation__list'>
                <NavItem link="#about">About</NavItem>
                <NavItem link="#careers">Careers</NavItem>
                <NavItem link="#events">Events</NavItem>
                <NavItem link="#products">Products</NavItem>
                <NavItem link="#support">Support</NavItem>
            </ul>
        </nav>
        <div className="social-links-wrapper">
          <ul className='social-links'>
            <NavItem external
              link="#about">
              <img src={facebookIcon} alt="" />
            </NavItem>
            <NavItem external
              link="#about">
              <img src={twitterIcon} alt="" />
            </NavItem>
            <NavItem external
              link="#about">
              <img src={pinterestIcon} alt="" />
            </NavItem>
            <NavItem external
              link="#about">
              <img src={instagramIcon} alt="" />
            </NavItem>
          </ul>
          <p className='author-owner'>© 2024 Keiner Mendoza Studios. All rights reserved.</p>
        </div>
      </div>

    </footer>
  )
}
