export default function FeaturedProjectsCard(props){

    return(
        <div className="featuredProjectCard">
            <a href={props.link}>
                <img src={props.img} alt="projectImage" />
                {/* <h1>{props.name}</h1> */}
                {/* GONNA PIC IMAGES WHERE I DONT NEED A NAME */}
                <div className="backgroundDim">

                </div>
            </a>
        </div>
    )

}