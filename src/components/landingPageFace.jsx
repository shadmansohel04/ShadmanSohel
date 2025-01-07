import React from "react";
import "../styles/landingPage.css";
import meImg from "../assets/me.png"

export default function LandingPageFace() {
    return (
        <section id="pageSetup" className="landingPageFace">
            <div className="leftOfFace">
                <h1 className="bigTitle">
                    {"SHADMAN".split("").map((letter, index) => (
                        <span
                            className="letterAnimation"
                            key={`shadman-${index}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter}
                        </span>
                    ))}
                </h1>
                <h1 className="bigTitle">
                    {"SOHEL".split("").map((letter, index) => (
                        <span
                            className="letterAnimation"
                            key={`sohel-${index}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter}
                        </span>
                    ))}
                </h1>
            </div>
            <div className="profileContainer">
                <img className="ProfilePic" src={meImg} alt="shadman_Picture" />
                <a onClick={()=>{window.open("./RESUME.pdf")}} className="connectButton">Resume</a>
            </div>


        </section>
    );
}
