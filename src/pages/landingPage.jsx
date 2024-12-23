import FooterComp from "../components/footerComp";
import HeaderComp from "../components/headerComp";
import LandingPageFace from "../components/landingPageFace";
import LandingPageRestComp from "../components/landingPageRest";

export default function LandingPage(){
    return(
        <>
            <HeaderComp />
            <LandingPageFace />
            <LandingPageRestComp />
            <FooterComp />
        </>
    )
}