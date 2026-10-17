import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import "../styles/header.css";

export default function HeaderComp() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="headerWrapper">
            <header className={`headerNav ${isScrolled ? "scrolled" : ""}`}>
                <nav className="desktopNav">
                    <ul className="navList">
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                                end
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/projects" 
                                className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                            >
                                PROJECTS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/resume" 
                                className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                            >
                                RESUME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
                            >
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="headerRight">
                    <a onClick={() => { window.open("./RESUME.pdf") }} className="connectCta">
                        <span>RESUME</span>
                        <FiArrowUpRight className="ctaIcon" />
                    </a>

                    <button 
                        className={`hamburgerBtn ${isMenuOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Navigation Menu"
                    >
                        <span className="hamburgerLine line1"></span>
                        <span className="hamburgerLine line2"></span>
                        <span className="hamburgerLine line3"></span>
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            <div className={`mobileNavOverlay ${isMenuOpen ? "isOpen" : ""}`}>
                <div className="mobileNavContent">
                    <ul className="mobileNavList">
                        <li style={{ transitionDelay: "0.05s" }}>
                            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")} end>
                                <span className="navNum">01</span>
                                <span className="navText">HOME</span>
                            </NavLink>
                        </li>
                        <li style={{ transitionDelay: "0.1s" }}>
                            <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
                                <span className="navNum">02</span>
                                <span className="navText">PROJECTS</span>
                            </NavLink>
                        </li>
                        <li style={{ transitionDelay: "0.15s" }}>
                            <NavLink to="/resume" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
                                <span className="navNum">03</span>
                                <span className="navText">RESUME</span>
                            </NavLink>
                        </li>
                        <li style={{ transitionDelay: "0.2s" }}>
                            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
                                <span className="navNum">04</span>
                                <span className="navText">CONTACT</span>
                            </NavLink>
                        </li>
                    </ul>

                    <div className="mobileNavFooter">
                        <a href="./RESUME.pdf" target="_blank" rel="noopener noreferrer" className="mobileResumeBtn">
                            <FiFileText /> View Resume PDF
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

