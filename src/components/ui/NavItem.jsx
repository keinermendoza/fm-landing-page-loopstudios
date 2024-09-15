import React from 'react'

export default function NavItem({children, link, ariaLabel=null, external=false}) {
  return (
    <li className='nav-item'>
        <a  className='nav-link' 
            aria-label={ariaLabel ? ariaLabel : undefined}
            href={link}
            target={external ? "_blank" : undefined} 
        >{children}</a>
    </li>
  )
}
