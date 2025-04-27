import "../styles/footer.css"
import linkedInImage from "../assets/linkedin.png"

export default function FooterComp(){
    return(
        <footer className="footerComp">
            <a href="mailto:shadman.sohel04@gmail.com"><img src="./EMAIL.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/shadman-sohel/"><img style={{height: "90%", width: "90%"}} src={linkedInImage} alt="" /></a>
            <a href="https://github.com/shadmansohel04"><img src="https://img.icons8.com/m_rounded/512/FFFFFF/github.png" alt="githubImg" /></a>
        </footer>
    )
}