import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const {user} = useAuth();

    const loggedUser = (
        <>
            <Link to='/submit'>Качи проект</Link>
            <Link to='/logout'>Изход</Link>
        </>
    );
    const unloggedUser = (
        <>
            <Link to='/login'>Влизане</Link>
            <Link to='/register'>Регистрация</Link>
        </>
    );
    return (
        <header>
            <nav>
                <h2 style={{ fontWeight: "700", fontSize: "1.6rem" }}>⚡ Конкурси</h2>

                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to='/'>Начало</Link>
                    <Link to='/projects'>Проекти</Link>
                    {user.email ? loggedUser : unloggedUser}
                </div>
            </nav>
        </header>
    )
}