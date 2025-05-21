const BroadcastWidget = ({ data }) => {
    return (
        <div className="broadcast-widget">
            <h2 className="title">Эфир</h2>
            <div className="tvShows">
                {data.map((show, index) => (
                    <div key={index} className="show">
                        <button 
                            className="play-button"
                            aria-label="Play"
                            type="button"
                            >
                            <svg 
                                className="play-icon" 
                                viewBox="0 0 24 24"
                                width="16" 
                                height="16"
                            >
                                <path d="M8 5v14l11-7z" fill="white" />
                            </svg>
                        </button>
                        <h3 className="show-title">{show.title}</h3>
                        <a href={show.link}>{show.channel}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BroadcastWidget;