import { useState } from 'react';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav>
                <h2 style={{ fontWeight: "700", fontSize: "1.6rem" }}>⚡ Конкурси</h2>

                {/* Hamburger button for mobile */}
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="index.html">Начало</a>
                    <a href="submit.html">Качи проект</a>
                </div>
            </nav>
        </header>
    )
}