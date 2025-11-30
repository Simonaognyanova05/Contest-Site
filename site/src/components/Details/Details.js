import './Details.css';

export default function Details() {
    return (
        <div class="container">
            <h1 style={{ marginBottom: "1rem" }}>⚡ Проект – Futuristic Design</h1>

            <div class="img-box">
                <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb" />
            </div>

            <div class="description">
                Това е подробното описание на проекта. Тук авторът може да обясни идеята, процеса на работа, използваните
                технологии и вдъхновението зад дизайна. Целта е потребителите да разберат повече за проекта и да оценят
                усилията зад него.

            </div>
            <a href="#" class="project-link">🔗 Виж проекта на живо</a>

            <button class="likes-btn">❤️ Харесай</button>

            <div class="comments">
                <h2>Коментари</h2>

                <form class="comment-form" style={{ marginBottom: "2rem" }}>
                    <textarea placeholder="Вашият коментар..." required
                        style={{ width: "100%", padding: "1rem", borderRadius: "var(--radius)", border: "1px solid var(--glass-border)", background: "rgba(255,255,255,0.1)", color: "white", backdropFilter: "blur(12px)", fontSize: "1rem", minHeight: "120px", resize: "vertical" }}></textarea>
                    <button type="submit"
                        style={{ marginTop: "1rem", background: "linear-gradient(135deg, var(--primary), var(--primary2))", padding: "0.8rem 1.4rem", border: "none", borderRadius: "var(--radius)", color: "white", fontSize: "1rem", cursor: "pointer", boxShadow: "0 8px 25px rgba(0,0,0,0.4)", transition: "0.3s" }}>💬
                        Публикувай</button>
                </form>

                <div class="comment">Невероятна визия! 👏</div>
                <div class="comment">Много футуристично усещане!</div>
            </div>
            <div class="comment">Много футуристично усещане!</div>
        </div>
    );
}