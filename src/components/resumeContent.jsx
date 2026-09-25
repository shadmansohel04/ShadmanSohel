import { useState } from "react"
import { useEffect } from "react"
import JobTileComp from "./jobTileRes"
import googleLogo from "../assets/google-logo.webp"
import opgLogo from "../assets/opg-logo.jpeg"
import tmuLogo from "../assets/tmu-logo.jpg"

export default function ResumeContent(){

    const [yval, setYval] = useState(0)

    const handleScroll = ()=>{
        setYval(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    })

    const jobContent = [
        {
            title: "Software Developer Intern",
            year: "2026",
            company: "Google",
            blurb: "Applied AI",
            logo: googleLogo
        },
        {
            title: "Engineering Intern",
            year: "2025-Current",
            company: "Ontario Power Generation (OPG)",
            blurb: "Nuclear automations.",
            logo: opgLogo
        },
        {
            title: "Software Developer Intern",
            year: "2024-2025",
            company: "RaiseIt",
            blurb: "Data Team"
        },
        {
            title: "Project Manager",
            year: "2024",
            company: "Toronto Metropolitan University",
            blurb: "Mentored 95 first-year engineering students.",
            logo: tmuLogo
        },
        {
            title: "Academic Initiatives",
            year: "2024",
            company: "Toronto Metropolitan University",
            blurb: "Enhanced AI chatbot performance."
        },
        {
            title: "Administrative Assistant",
            year: "2023",
            company: "Elevation Athletics",
            blurb: "Expanded the main website with staff pages and registration forms."
        },
        {
            title: "Operations Supervisor",
            year: "2022-2023",
            company: "York Region Basketball League",
            blurb: "Scheduled and lead meetings for 5-10 senior leadership team members across the Greater Toronto Area."
        }
    ]
    
    return(
        <section id="pageSetup" className="resumePage">
            <h1 className="bigTitle">
                {"RESUME".split("").map((letter, index) => (
                        <span
                            className="letterAnimation"
                            key={`resume-${index}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter}
                        </span>
                    ))}
            </h1>

            <h2>WORK EXPERIENCE</h2>

            <div className="jobContainer">
                <div className="middleLine"></div>
                {jobContent.map((each, index)=>{
                    return(
                        <JobTileComp yval={yval} year={each.year} key={index} index={index} title={each.title} blurb={each.blurb} company={each.company} logo={each.logo} />
                    )
                })}
            </div>
        </section>
    )
}