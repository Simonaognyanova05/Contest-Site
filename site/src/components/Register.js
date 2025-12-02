export default function Register() {
    return (
        <div class="container">
            <h1 style={{marginBottom: "1rem"}}>Регистрация</h1>
            <form>
                <input type="text" placeholder="Имейл" required />
                <input type="password" placeholder="Парола" required />
                <input type="password" placeholder="Повторете паролата" required />

                <button>Качи проекта</button>
            </form>
        </div>
    )
}