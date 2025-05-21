const WeatherWidget = ({ weatherImg, currentWeather, morningWeather, afternoonWeather }) => {
    return (
        <div className="weather-widget">
            <h2 className="widget-title">Погода</h2>
            <img className="current-weather-display" src={weatherImg} alt="image" />
            <div className="current-weather">{currentWeather}</div>
            <div className="container-for-detailed-detailed-weather">
                <div className="morning-weather">{morningWeather}</div>
                <div className="afternoon-weather">{afternoonWeather}</div>
            </div>
        </div>
    )
}

export default WeatherWidget;