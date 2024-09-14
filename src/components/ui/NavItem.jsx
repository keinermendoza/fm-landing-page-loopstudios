import React from 'react'

export default function NavItem({children, link, external=false}) {
  return (
    <li className='nav-item'>
        <a  className='nav-link' 
            href={link}
            target={external ? "_blank" : undefined} 
        >{children}</a>
    </li>
  )
}
