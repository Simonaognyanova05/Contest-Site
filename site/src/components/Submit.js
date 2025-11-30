export default function Submit() {
    return (
        <div class="container">
            <h1 style={{marginBottom: "1rem"}}>🚀 Качи нов проект</h1>
            <form>
                <input type="text" placeholder="Заглавие" required />
                <textarea rows="6" placeholder="Описание" required></textarea>
                <input type="file" required />
                <button>Качи проекта</button>
            </form>
        </div>
    )
}