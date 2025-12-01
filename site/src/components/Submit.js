export default function Submit() {
    return (
        <div class="container">
            <h1 style={{marginBottom: "1rem"}}>🚀 Качи нов проект</h1>
            <form>
                <input type="text" placeholder="Три имена" required />
                <input type="text" placeholder="Имейл" required />
                <input type="text" placeholder="Заглавие" required />
                <textarea rows="6" placeholder="Описание" required></textarea>
                <input type="text" placeholder="Изображение (линк)" required />
                <input type="text" placeholder="Линк към проекта" required />
                <button>Качи проекта</button>
            </form>
        </div>
    )
}