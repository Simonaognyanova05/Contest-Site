import { useNavigate } from 'react-router-dom';
import { register } from '../services/register';

export default function Register() {
    const navigate = useNavigate();

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {email, password, rePass} = Object.fromEntries(formData);

        if(password != rePass){
            alert("Паролите не съвпадат!");
            return;
        };

        let result = await register(email, password);

        if(result.status == 200){
            alert("Успешно влизане!");
            navigate('/');
        }else{
            alert("Възникна грешка при влизане!");
            navigate('/login');
        }
    }
    return (
        <div class="container">
            <h1 style={{ marginBottom: "1rem" }}>Регистрация</h1>
            <form onSubmit={loginHandler}>
                <input type="text" name="email" placeholder="Имейл" required />
                <input type="password" name="password" placeholder="Парола" required />
                <input type="password" name="rePass" placeholder="Повторете паролата" required />

                <button>Качи проекта</button>
            </form>
        </div>
    )
}