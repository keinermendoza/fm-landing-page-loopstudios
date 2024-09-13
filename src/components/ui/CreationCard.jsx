export default function CreationCard({title, smallImage, largeImage}) {
    return (
        <div className='creation-card'>
            <picture>
                <source media="(max-width: 799px)" srcset={smallImage} />
                <source media="(min-width: 800px)" srcset={largeImage} />
                <img className='background-image' src={smallImage} alt={title} />
            </picture>
            <h3 className='title'>{title}</h3>
        </div>
    )
}