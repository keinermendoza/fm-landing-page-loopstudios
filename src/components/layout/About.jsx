import React from 'react'
import interactiveImg from '/images/mobile/image-interactive.jpg'

export default function About() {
  return (
    <section className='about'>
      <img className='about__image' src={interactiveImg} alt="" />
      <div className='about__text'>
        <h2 className='title'>The leader in interactive VR</h2>
        <p className='description'>Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.</p>
      </div>
    </section>
  )
}
