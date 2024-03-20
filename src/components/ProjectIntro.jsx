import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function ProjectIntro() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)       

    useEffect(() => {
        const handleRezise = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleRezise)

        return () => {
            window.removeEventListener('resize', handleRezise)
        }
    }, [])

    return (
        <section className="project-intro--container">
            <h1>Welcome to my projects shelf</h1>
            <p>Here you can find all the projects I have worked on.</p>
            <div class='container'>
                <Link class='playBut' to="/works/1">
    
                    <svg version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                        x="0px" y="0px" 
                        width={windowWidth < 1100 ? "120px" : "200px"} 
                        height={windowWidth < 1100 ? "120px" : "200px"} 
                        viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7"
                        space="preserve"
                    >

                        <polygon class='triangle' id="XMLID_18_" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
                            73.5,62.5 148.5,105.8 73.5,149.1 "
                        />
                        <circle class='circle' id="XMLID_17_" fill="none"  stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"/>
                    </svg>
                    
                </Link>
            </div>        
        </section>
    );
}
