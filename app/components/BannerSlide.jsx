

const BannerSlide = ({slideData, isActive}) => {
    return (
        <div className={`banner__slide ${isActive ? 'is-active' : ''}`}>
            <p className="banner__slide-subtitle">
                {slideData?.subtitle}
            </p>
            <h2 className="banner__slide-title h1">
                {slideData?.title}
            </h2>
            <div className="banner__slide-actions">
                {slideData?.actions}
            </div>
        </div>
    )
}

export default BannerSlide