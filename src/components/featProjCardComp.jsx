export default function FeaturedProjectsCard(props){

    return(
        <div className="featuredProjectCard">
            <a href={props.link}>
                <img src={props.img} alt="projectImage" />
                <div className="backgroundDim" />
            </a>
        </div>
    )

}