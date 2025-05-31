import { useState } from "react"

export default function ProjectTileCompPage(props){
    const [click, setClick] = useState(true)

    const [hover, setHover] = useState({
        imgWidth: "100%",
        navHeight: "0%",
        imgHeight: "100%"
    })

    const enter = ()=>{
        setHover({
            imgWidth: "110%",
            navHeight: "15%",
            imgHeight: "120%"
        })
    }

    const leave = ()=>{
        setHover({
            imgWidth: "100%",
            navHeight: "0%",
            imgHeight: "100%"
        })
    }

    // DO THE ONCLICK FOR THE WHOLE THING

    return(
        <div onClick={() =>{setClick((prev)=> !prev)}} onMouseEnter={enter} onMouseLeave={leave} href={props.link} className="projectPageTileComp">
            <h1>{props.name}</h1>
            <img style={{width: hover.imgWidth, height: hover.imgHeight}} src={props.img} alt="img" />
            <ul style={{height: hover.navHeight}} className="openingBottom">
                <li><a href={props.github}><img src="https://img.icons8.com/m_rounded/512/FFFFFF/github.png" alt="gitHub" /></a></li>
                {props.link?<li> <a href={props.link}><img src="./OPEN.png" alt="linkImg" /></a></li>: null}
                {props.devpost?<li> <a href={props.devpost}>D</a></li>: null}
            </ul>
            <div className={click? "onclickTile": "onclickTile openClick"}>
                <h2>Technologies</h2>
                <ul>
                    {props.tech.map((each, index)=>{
                        return(<li key={index}>{each}</li>)
                    })}
                </ul>
                <h2>Description</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}