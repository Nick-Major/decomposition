const InfoBanner = ({ 
  title, 
  description, 
  imageUrl, 
  imageAlt = "Информация"
}) => {
  return (
    <div className="info-banner">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="info-banner__image" 
        />
      )}
      <div className="info-banner__content">
        <h3 className="info-banner__title">{title}</h3>
        <p className="info-banner__description">{description}</p>
      </div>
    </div>
  );
};

export default InfoBanner;