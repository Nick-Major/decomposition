// Новостной блок с топ 5 актуальных новостей

import assignAlt from "../utils/assignAlt";

const MainNews = ({ news }) => {
    return (
        <ul className="main-news">
            {news.slice(0, 6).map((n, index) => (
                <li key={index} className="news">
                    <a className="media-name" href={n.mediaSrc}>
                        <img src={n.src} alt={assignAlt(n.logoSrc)} />
                    </a>
                    <a href={n.articleLink}>{n.title}</a>
                </li>
            ))}
        </ul>
    );
};

export default MainNews;