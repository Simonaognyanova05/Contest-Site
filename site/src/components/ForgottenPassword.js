import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/resetPassword';

export default function ForgottenPassword() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            alert("Изпратихме ви имейл за възстановяване на паролата.");
            navigate("/login");
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                alert("Не съществува потребител с този имейл.");
            } else if (error.code === 'auth/invalid-email') {
                alert("Невалиден имейл адрес.");
            } else {
                alert("Грешка: " + error.message);
            }
        }
    };
    return (
        <div class="container">
            <h1 style={{ marginBottom: "1rem" }}>Забравена парола</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Имейл" value={email}
                    onChange={(e) => setEmail(e.target.value)} required />

                <button>Изпрати имейл</button>
            </form>
        </div>
    )
}