import CreationCard from "../ui/CreationCard"

import earthMobile from "/images/mobile/image-deep-earth.jpg"
import earthDesktop from "/images/desktop/image-deep-earth.jpg"

import arcadeMobile from "/images/mobile/image-night-arcade.jpg"
import arcadeDesktop from "/images/desktop/image-night-arcade.jpg"

import footballMobile from "/images/mobile/image-soccer-team.jpg"
import footballDesktop from "/images/desktop/image-soccer-team.jpg"

import carMobile from "/images/mobile/image-grid.jpg"
import carDesktop from "/images/desktop/image-grid.jpg"

import roadMobile from "/images/mobile/image-from-above.jpg"
import roadDesktop from "/images/desktop/image-from-above.jpg"

import boreallsMobile from "/images/mobile/image-pocket-borealis.jpg"
import boreallsDesktop from "/images/desktop/image-pocket-borealis.jpg"

import exploreMobile from "/images/mobile/image-curiosity.jpg"
import exploreDesktop from "/images/desktop/image-curiosity.jpg"

import coconutMobile from "/images/mobile/image-fisheye.jpg"
import coconutDesktop from "/images/desktop/image-fisheye.jpg"



export default function Creations() {
  return (
    <section className='creations'>
        <h2 className='title'>Our creations</h2>
        <div className='gallery'>
            <CreationCard 
                title='Deep earth'
                largeImage={earthDesktop}
                smallImage={earthMobile}
            />
            <CreationCard 
                title='Night arcade'
                largeImage={arcadeDesktop}
                smallImage={arcadeMobile}
            />
            <CreationCard 
                title='Soccer team VR'
                largeImage={footballDesktop}
                smallImage={footballMobile}
            />
            <CreationCard 
                title='The grid'
                largeImage={carDesktop}
                smallImage={carMobile}
            />
            <CreationCard 
                title='From up above VR'
                largeImage={roadDesktop}
                smallImage={roadMobile}
            />
            <CreationCard 
                title='Pocket borealis'
                largeImage={boreallsDesktop}
                smallImage={boreallsMobile}
            />
            <CreationCard 
                title='The curiosity'
                largeImage={exploreDesktop}
                smallImage={exploreMobile}
            />
            <CreationCard 
                title='Make it fisheye'
                largeImage={coconutDesktop}
                smallImage={coconutMobile}
            />
        </div>
    </section>
  )
}
