import { useNavigate } from 'react-router-dom';
import { register } from '../services/register';
import { useAuth } from '../contexts/AuthContext';

export default function Register() {
    const navigate = useNavigate();
    const { onRegister } = useAuth();

    const registerHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password, rePass } = Object.fromEntries(formData);

        if (password != rePass) {
            alert("Паролите не съвпадат!");
            navigate('/registration');
        }

        let result = await register(email, password);
        if (result.status !== 500) {
            alert("Успешна регистрация!");
            onRegister(result);
            navigate('/');
        } else {
            alert("Възникна грешка. Моля, опитайте по-късно!");
        }
    }
    return (
        <div class="container">
            <h1 style={{ marginBottom: "1rem" }}>Регистрация</h1>
            <form onSubmit={registerHandler}>
                <input type="text" name="email" placeholder="Имейл" required />
                <input type="password" name="password" placeholder="Парола" required />
                <input type="password" name="rePass" placeholder="Повторете паролата" required />

                <button>Регистрация</button>
            </form>
        </div>
    )
}