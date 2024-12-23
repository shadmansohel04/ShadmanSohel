import { useEffect, useRef, useState } from "react"

export default function jobTileComp(props){

    const headerRef = useRef(null)
    const [toggleHeight, setHeight] = useState(false)
    

    useEffect(()=>{
        const target = parseInt(headerRef.current.getBoundingClientRect().top)
        if(props.yval > target - 150){
            headerRef.current.classList.add("animateJob")
        }
        else{
            headerRef.current.classList.remove("animateJob")
        }
    }, [props.yval])

    function heightToggle(){
        if(toggleHeight == false){
            headerRef.current.classList.add("openHeight")
        }
        else{
            headerRef.current.classList.remove("openHeight")
        }

        setHeight((prev)=> !prev)
    }

    function shiftReturn(value){
        if(parseInt(value)/2 == parseInt(value/2)){
            return("jobTile rightShift")
        }

        return("jobTile leftShift")
    }

    

    return(
        <div onClick={heightToggle} ref={headerRef} className={shiftReturn(props.index)}>
            <div className="topRes">
                <h1>{props.title}</h1>
                <h2>{props.year}</h2>
            </div>

            <h2>{props.company}</h2>
            <p>{props.blurb}</p>
        </div>
    )
}