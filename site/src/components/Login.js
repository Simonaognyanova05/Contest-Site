import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { login } from '../services/login';

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData);

        let result = await login(email, password);
        alert("Успешнo влизане!");
        onLogin(result);
        navigate('/');
    }
    return (
        <div class="container">
            <h1 style={{ marginBottom: "1rem" }}>Влизане</h1>
            <form onSubmit={loginHandler}>
                <input type="text" name="email" placeholder="Имейл" required />
                <input type="password" name="password" placeholder="Парола" required />

                <button style={{ marginBottom: "30px" }}>Влизане</button>
            </form>
            <Link to='/forgottenPassword' style={{ marginTop: "300px", color: "white" }}>Забравена парола</Link>
        </div>
    )
}