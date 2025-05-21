// Поисковая строка с категориями и лого

const SearchBar = ({categories, logoLink, logoUrl, exampleLink, exampleTitle}) => {
    return (
        <div className="search-bar">
            <ul className="search-bar-categories">
                {categories.map((cat, index) => (
                    <li key={index} className="search-category">
                        <a href={cat.link}>{cat.title}</a>
                    </li>
                ))}
            </ul>
            <a className="logo-link" href={logoLink}>
                <img className="logo-img" src={logoUrl} alt="Яндекс" />
            </a>
            <form className="search-form">
                <input className="search-field" type="text" />
                <button className="search-btn">Найти</button>
            </form>
            <div className="example-section">Найдётся все. Например, <a href={exampleLink}>{exampleTitle}</a></div>
        </div>
    )
}

export default SearchBar;