import { useState } from "react"
import "../styles/projectsPage.css"

export default function ProjectTileCompPage(props) {
    const { img, name, github, link, youtube, devpost, tech, desc } = props
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    const toggleMobile = () => {
        setIsMobileOpen((prev) => !prev)
    }

    return (
        <div 
            className={`projectPageTileComp ${isMobileOpen ? "isMobileOpen" : ""}`}
            onClick={toggleMobile}
        >
            {/* Background Image */}
            <img className="projectTileImg" src={img} alt={name} />

            {/* Dark gradient overlay for resting state title readability */}
            <div className="cardGradientOverlay" />

            {/* Resting state Title (visible when not hovered) */}
            <div className="projectTitleRest">
                <h1>{name}</h1>
            </div>

            {/* Always-Available Action Links Bar */}
            <ul className="projectLinksBar">
                {github && (
                    <li>
                        <a 
                            className="projectLinkBtn" 
                            href={github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="GitHub Repository"
                            aria-label="GitHub Repository"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                        </a>
                    </li>
                )}
                {link && (
                    <li>
                        <a 
                            className="projectLinkBtn" 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="Live Demo"
                            aria-label="Live Demo"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                        </a>
                    </li>
                )}
                {youtube && (
                    <li>
                        <a 
                            className="projectLinkBtn" 
                            href={youtube} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="YouTube Demo"
                            aria-label="YouTube Demo"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </li>
                )}
                {devpost && (
                    <li>
                        <a 
                            className="projectLinkBtn" 
                            href={devpost} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="Devpost Page"
                            aria-label="Devpost Page"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.002 1.61L0 12l6.002 10.39h11.996L24 12 17.998 1.61H6.002zm1.593 4.083h4.41c2.834 0 4.962 1.625 4.962 4.307 0 2.682-2.128 4.307-4.962 4.307H7.595V5.693zm2.525 2.153v4.307h1.885c1.42 0 2.438-.813 2.438-2.153 0-1.34-1.018-2.154-2.438-2.154H10.12z"/>
                            </svg>
                        </a>
                    </li>
                )}
            </ul>

            {/* Hover Content Overlay */}
            <div className="projectHoverOverlay">
                <div>
                    <div className="hoverContentHeader">
                        <h2>{name}</h2>
                    </div>

                    <div className="sectionLabel">Technologies</div>
                    <div className="techChipsContainer">
                        {tech && tech.map((each, index) => (
                            <span key={index} className="techChip">{each}</span>
                        ))}
                    </div>
                </div>

                <div className="hoverDescription">
                    <div className="sectionLabel">About</div>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}