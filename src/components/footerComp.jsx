import "../styles/footer.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function FooterComp() {
    return (
        <footer className="footerComp">
            <a 
                href="mailto:shadman.sohel04@gmail.com" 
                aria-label="Email" 
                title="Email"
                className="footerIconLink email"
            >
                <FaEnvelope className="footerIcon" />
            </a>
            <a 
                href="https://www.linkedin.com/in/shadman-sohel/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                title="LinkedIn"
                className="footerIconLink linkedin"
            >
                <FaLinkedin className="footerIcon" />
            </a>
            <a 
                href="https://github.com/shadmansohel04" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub" 
                title="GitHub"
                className="footerIconLink github"
            >
                <FaGithub className="footerIcon" />
            </a>
            <a 
                href="https://leetcode.com/u/shadman_sohel/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LeetCode" 
                title="LeetCode"
                className="footerIconLink leetcode"
            >
                <SiLeetcode className="footerIcon" />
            </a>
        </footer>
    );
}