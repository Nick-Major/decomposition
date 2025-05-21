import { useState } from 'react';

const MoviePoster = ({ 
  imageUrl, 
  title, 
  releaseDate,
  trailerUrl 
}) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const handlePlayClick = () => {
    setShowTrailer(true);
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
  };

  return (
    <div className="movie-poster">
      {/* Фоновое изображение */}
      <div 
        className="movie-poster__background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Затемнение фона для лучшей читаемости текста */}
      <div className="movie-poster__overlay"></div>

      {/* Название фильма и дата выхода */}
      <div className="movie-poster__info">
        <h2 className="movie-poster__title">{title}</h2>
        <p className="movie-poster__release-date">{releaseDate}</p>
      </div>

      {/* Кнопка просмотра трейлера */}
      <button 
        className="movie-poster__trailer-button"
        onClick={handlePlayClick}
      >
        <svg className="movie-poster__play-icon" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        Смотреть трейлер
      </button>

      {/* Модальное окно с трейлером */}
      {showTrailer && (
        <div className="movie-poster__modal">
          <div className="movie-poster__modal-content">
            <button 
              className="movie-poster__close-button"
              onClick={handleCloseTrailer}
            >
              &times;
            </button>
            <div className="movie-poster__video-container">
              <iframe
                src={`${trailerUrl}?autoplay=1`}
                title="Трейлер фильма"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePoster;