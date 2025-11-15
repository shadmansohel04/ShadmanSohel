import { useEffect } from "react";
import FooterComp from "../components/footerComp";
import HeaderComp from "../components/headerComp";
import LandingPageFace from "../components/landingPageFace";
import LandingPageRestComp from "../components/landingPageRest";

export default function LandingPage(){

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
          sendVisitMessage();
          localStorage.setItem('hasVisited', 'true');
        }
      }, []);
      
    const sendVisitMessage = async () => {
        const email = "BLANK@gmail.com";
        const message = "JUST WENT ON";
        const subject = "I WONDER WHO?";

        try {
            const response = await fetch("https://tmrun-h224.onrender.com/home/contact", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    info: {
                        email,
                        message,
                        subject
                    },
                }),
            });
        }
        catch (error) {}
      };
    
    return(
        <>
            <HeaderComp />
            <LandingPageFace />
            <LandingPageRestComp />
            <FooterComp />
        </>
    )
}