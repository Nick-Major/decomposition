const TravelWidget = ({ title, linkName, link}) => {
    return (
        <div className="travel-widget">
            <h2 className="travel-title">{title}</h2>
            <a href={link}>{linkName}</a>
        </div>
    )
}

export default TravelWidget;