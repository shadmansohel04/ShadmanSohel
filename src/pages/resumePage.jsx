import FooterComp from "../components/footerComp"
import HeaderComp from "../components/headerComp"
import ResumeContent from "../components/resumeContent"
import "../styles/resume.css"

export default function ResumePage(){
    return(
        <>
            <HeaderComp />
            <ResumeContent />
            <FooterComp />
        </>
    )
}