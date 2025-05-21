// Контейнер для компонентов

const MainWindow = ({children}) => {
    return (
        <div className="main-window">
            {children}
        </div>
    )
}

export default MainWindow;