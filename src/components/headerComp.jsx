import React, { useState } from "react";
import "../styles/header.css";

export default function HeaderComp() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <nav className="desktopNav">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/projects">PROJECTS</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                </ul>
            </nav>

            <div id="wrapper" onClick={toggleMenu}>
                <div className={isMenuOpen ? "main-item menu close" : "main-item menu"}>
                    <span className="line line01"></span>
                    <span className="line line02"></span>
                    <span className="line line03"></span>
                </div>
            </div>

            <div className={isMenuOpen ? "openNavDesk showNavDesktop" : "openNavDesk"}>
                <ul className={isMenuOpen ? "noList listAnimate" : "noList"}>
                    <li><a href="/" onClick={closeMenu}>HOME</a></li>
                    <li><a href="/projects" onClick={closeMenu}>PROJECTS</a></li>
                    <li><a href="/contact" onClick={closeMenu}>CONTACT</a></li>
                </ul>
            </div>
        </header>
    );
}
