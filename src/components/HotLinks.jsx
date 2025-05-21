const HotLinks = ({ links }) => {
    return (
        <div className="hot-links">
            <h2 className="visited">Посещаемое</h2>
            <div className="links-list">
                {links.map((link, index) => (
                    <div key={index} className="link-item">
                        <a href={link.url}></a>
                        <span>{`— ${link.description}`}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HotLinks;