const NewsFeed = ({nowMediaSrc, nowMediaText, foreignMediaSrc, foreignMediaText, recommendSrc, recommendText, children}) => {
    return (
        <div className="news-feed">
            <a href={nowMediaSrc}>{nowMediaText}</a>
            <a href={foreignMediaSrc}>{foreignMediaText}</a>
            <a href={recommendSrc}>{recommendText}</a>
            {children}
        </div>
    )
}

export default NewsFeed;