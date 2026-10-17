import "../styles/projectsPage.css"
import ProjectTileCompPage from "./projectsTileCompPage"
import { projects } from "../data/projectsData"

export default function ProjectsContent(){

    return(
        <section id="pageSetup" className="projectsPage">
            <h1 className="bigTitle">
                {"PROJECTS".split("").map((letter, index)=>{
                    return(
                        <span
                            className="letterAnimation"
                            key={`projects-${index}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter}
                        </span>
                    )
                })}
            </h1>

            <div className="projectsContainerPage">
                {projects.map((each, index)=>{
                    return(<ProjectTileCompPage key={index} {...each} />)
                })}
            </div>
            

        </section>
    )
}
