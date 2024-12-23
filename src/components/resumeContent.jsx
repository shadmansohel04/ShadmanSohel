import { useState } from "react"
import { useEffect } from "react"
import JobTileComp from "./jobTileRes"

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
            year: "2024-2025",
            company: "RaiseIt",
            blurb: "Develop secure server-side services using Express and Node.js with JWT-based authentication. Utilize MongoDB for efficient data management and querying, ensuring sub-50ms response times to support a team of 10. Apply Python libraries like BeautifulSoup and Selenium to automate workflows by extracting, cleaning, and analyzing data from 100+ web pages, delivering insights 20% faster."
        },
        {
            title: "Project Manager",
            year: "2024",
            company: "Toronto Metropolitan University",
            blurb: "Mentored 95 first-year engineering students by overseeing assignments and facilitating communication through emails and meetings. Evaluated assignments, supported students with engineering concepts and MATLAB, and ensured comprehension. Promoted effective teamwork, resolved conflicts, and monitored collaboration to achieve successful project outcomes."
        },
        {
            title: "Academic Initiatives",
            year: "2024",
            company: "Toronto Metropolitan University",
            blurb: "Supplied academic advice for over 1,000 first-year engineering students. Enhanced AI chatbot performance with PyTorch by implementing NLP preprocessing techniques like tokenization, stemming, and stop-word removal, improving query response accuracy. Conducted research and data analysis to produce 10+ reports supporting best practices for new advising resources."
        },
        {
            title: "Administrative Assistant",
            year: "2023",
            company: "Elevation Athletics",
            blurb: "Expanded the main website with staff pages and registration forms. Managed sensitive data across 10+ spreadsheets, delivered weekly updates, and coordinated with teams to organize games for athletes aged 14-19. Scheduled and participated in meetings to plan future activities across departments."
        },
        {
            title: "Operations Supervisor",
            year: "2022-2023",
            company: "York Region Basketball League",
            blurb: "Scheduled and lead meetings for 5-10 senior leadership team members across the Greater Toronto Area. Coordinated with vendors and team representatives to create monthly mini tournaments and weekly regular season games. Oversaw 4-8 employees and volunteers while ensuring games proceeded on schedule."
        },
        {
            title: "Camp Councelor",
            year: "2022",
            company: "Elavation Athletics",
            blurb: "Supervised 350-500 campers ages 5-14 during a six week basketball and multisport camp. Organized and led a variety of indoor and outdoor events including drills, games and exercises. Collaborated with counsellor team to create a welcoming, engaging, and memorable environment. Achieved certification in CPR and First Aid to ensure the safety for all campers. Wrote daily reports, evaluations and maintained back office administration."
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
                        <JobTileComp yval={yval} year={each.year} key={index} index={index} title={each.title} blurb={each.blurb} company={each.company} />
                    )
                })}
            </div>
        </section>
    )
}