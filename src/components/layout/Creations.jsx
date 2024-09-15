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
    <section className='creations container'>
        <div className="title-row">
            <h2 className='title'>Our creations</h2>
            <a href="#see-all" className="button button-primary">see all</a>
        </div>
        <div className='gallery'>
            <CreationCard 
                largeImage={earthDesktop}
                smallImage={earthMobile}>
                Deep <br /> earth
            </CreationCard >
            <CreationCard 
                largeImage={arcadeDesktop}
                smallImage={arcadeMobile}>
                night <br />arcade</CreationCard>
            <CreationCard 
                largeImage={footballDesktop}
                smallImage={footballMobile}>
                Soccer <br /> team VR
            </CreationCard>
            <CreationCard 
                largeImage={carDesktop}
                smallImage={carMobile}>
                The <br /> grid
            </CreationCard>
            <CreationCard 
                largeImage={roadDesktop}
                smallImage={roadMobile}>
                From up <br /> above VR
            </CreationCard>
            <CreationCard 
                largeImage={boreallsDesktop}
                smallImage={boreallsMobile}>
                Pocket <br /> borealis
            </CreationCard>
            <CreationCard 
                largeImage={exploreDesktop}
                smallImage={exploreMobile}>
                The <br /> curiosity
            </CreationCard>
            <CreationCard 
                largeImage={coconutDesktop}
                smallImage={coconutMobile}>
                Make it <br /> fisheye
            </CreationCard>
        </div>
        <a href="#see-all" className="button button-secondary">see all</a>
    </section>
  )
}
