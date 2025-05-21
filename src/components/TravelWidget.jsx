const TravelWidget = ({ country, linkName, link}) => {
    return (
        <div className="travel-widget">
            <h2 className="travel-title">{country}</h2>
            <a href={link}>{linkName}</a>
        </div>
    )
}

export default TravelWidget;