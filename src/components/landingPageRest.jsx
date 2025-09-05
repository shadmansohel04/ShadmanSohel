import FeaturedProjectsCard from "./featProjCardComp"
import leetbotIMG from "../assets/LEETBOTIMG.png"

export default function LandingPageRestComp(){

    const projArray = [
        {
            img: "./BITEME.png",
            link: "LINK",
            name: "BiteMe"
        },
        {
            img: "./BATTLEHOME.png",
            link: "https://hackthe6repo.onrender.com/",
            name: "Battle Bites"
        },
        {
            img: leetbotIMG,
            link: "https://leetcodebot-gumy.onrender.com/",
            name: "LeetBot"
        }
    
    ]

    return(
        <section id="pageSetup" className="landingPageContainer">
            <h1>ABOUT ME</h1>
            <div className="aboutMeContainer">
                {/* PROBABLY PUTTING AN IMAGE HERE */}
                <p>I’m a Computer Engineering student at TMU and a passionate full-stack developer with a 
                    knack for building scalable, efficient, and user-centric solutions. I enjoy navigating 
                    the challenges of both front-end and back-end development, leveraging my skills to 
                    create impactful applications. I’m always eager to connect with fellow tech enthusiasts, 
                    explore innovative ideas, and embrace opportunities to grow while making meaningful 
                    contributions to the field.</p>
            </div>
            
            <div className="featuredProjects">
                <h1>FEATURED PROJECTS</h1>
                <div className="projectsContainer">
                    {/* WILL CREATE CUSTOM COMPONNET FOR PROJECT */}
                    {projArray.map((each, index)=>{
                        return(
                            <FeaturedProjectsCard key={index} img={each.img} name={each.name} link={each.link} />
                        )
                    })}
                </div>
            </div>


        </section>
    )
}
