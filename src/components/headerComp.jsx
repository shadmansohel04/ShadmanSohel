import React, { useEffect, useRef, useState } from "react";
import "../styles/header.css";

export default function HeaderComp() {
    const menuRef = useRef(null); 
    const wrapperRef = useRef(null);
    const [showDesk, setShowDesk] = useState(true)

    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const menuElement = menuRef.current;

        const handleClick = () => {
            menuElement.classList.toggle("close");
        };

        if (wrapperElement) {
            wrapperElement.addEventListener("click", handleClick);
        }

        return () => {
            if (wrapperElement) {
                wrapperElement.removeEventListener("click", handleClick);
            }
        };
    }, []);

    return (
        <header>
            <div id="wrapper" ref={wrapperRef}>
                <div onClick={()=>{setShowDesk((current) => !current)}} className="main-item menu" ref={menuRef}>
                    <span className="line line01"></span>
                    <span className="line line02"></span>
                    <span className="line line03"></span>
                </div>
            </div>

            <h1><a href="/">Shad</a></h1>

            <a href="https://www.linkedin.com/in/shadman-sohel/" className="connectButton">Connect</a>

            <div className={showDesk? "openNavDesk": "openNavDesk showNavDesktop"}>
                <ul className={showDesk? "noList": "noList listAnimate"}>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/resume">RESUME</a></li>
                    <li><a href="/projects">PROJECTS</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                </ul>
            </div>

        </header>
    );
}
