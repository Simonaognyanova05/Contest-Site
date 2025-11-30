export default function Projects() {
    return (
        <>
            <section class="hero">
                <h1>Всички проекти</h1>
                <p>Гласувай, коментирай и се вдъхновявай.</p>
            </section>

            <div class="projects">
                <a href="project.html" class="card">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" />
                    <div class="info">
                        <h3>Проект 1 – Creative UI</h3>
                        <p class="likes">❤️ 421 гласа</p>
                    </div>
                </a>

                <a href="project.html" class="card">
                    <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb" />
                    <div class="info">
                        <h3>Проект 2 – Futuristic Design</h3>
                        <p class="likes">❤️ 289 гласа</p>
                    </div>
                </a>
            </div>
        </>
    );
}