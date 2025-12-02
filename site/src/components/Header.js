import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <Link to='/submit'>Качи проект</Link>
                    <Link to='/register'>Регистрация</Link>
                </div>
            </nav>
        </header>
    )
}