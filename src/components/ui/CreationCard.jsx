export default function CreationCard({children, smallImage, largeImage}) {
    return (
        <div className='creation-card'>
            <picture>
                <source media="(max-width: 799px)" srcset={smallImage} />
                <source media="(min-width: 800px)" srcset={largeImage} />
                <img className='background-image' src={smallImage} alt="" />
            </picture>
            <h3 className='title'>{children}</h3>
        </div>
    )
}