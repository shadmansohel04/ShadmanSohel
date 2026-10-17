import ProjectTileCompPage from "./projectsTileCompPage"
import { projects } from "../data/projectsData"

export default function LandingPageRestComp(){

    const featuredProjects = projects.filter((p) => p.featured)

    return(
        <section id="pageSetup" className="landingPageContainer">
            <h1>ABOUT ME</h1>
            <div className="aboutMeContainer">
                {/* PROBABLY PUTTING AN IMAGE HERE */}
                <p>I’m a Computer Engineering student at TMU and a backend developer based in Toronto previously a SDE intern at Google. 
                    I’m always eager to connect with fellow tech enthusiasts, explore innovative ideas, and embrace opportunities to grow 
                    while making meaningful contributions to the field.</p>
            </div>
            
            <div className="featuredProjects">
                <h1>FEATURED PROJECTS</h1>
                <div className="projectsContainer">
                    {featuredProjects.map((each, index)=>{
                        return(
                            <ProjectTileCompPage key={index} {...each} />
                        )
                    })}
                </div>
            </div>


        </section>
    )
}
