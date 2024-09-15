export default function CreationCard({children, smallImage, largeImage}) {
    return (
        <div className='creation-card'>
            <picture>
                <source media="(max-width: 799px)" srcSet={smallImage} />
                <source media="(min-width: 800px)" srcSet={largeImage} />
                <img className='background-image' src={smallImage} alt="" />
            </picture>
            <h3 className='title'>{children}</h3>
        </div>
    )
}