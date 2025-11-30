export default function Home() {
    return (
        <>
            <section className="hero">
                <h1>Най-добрите проекти. Най-горещото съревнование.</h1>
                <p>Гласувай, коментирай и се вдъхновявай.</p>
            </section>

            <div className="container">
                <div className="categories-grid">
                    <div className="category-card">
                        <h3>🎨 Дизайн</h3>
                        <p>UI/UX, графика, банери</p>
                    </div>
                    <div className="category-card">
                        <h3>💻 Уеб</h3>
                        <p>Уебсайтове, приложения, компоненти</p>
                    </div>
                    <div className="category-card">
                        <h3>📱 Мобилни приложения</h3>
                        <p>Android, iOS</p>
                    </div>
                    <div className="category-card">
                        <h3>🎬 Видео</h3>
                        <p>Анимации, реклами, монтаж</p>
                    </div>
                    <div className="category-card">
                        <h3>📸 Фотография</h3>
                        <p>Творчески фотопроекти</p>
                    </div>
                </div>

                <a className="view-projects-btn" href="projects.html">📂 Разгледай всички проекти</a>
            </div>
        </>
    );
}