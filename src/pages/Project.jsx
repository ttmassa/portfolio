import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import projects from '../data/projects/data'

export default function Project() {
    const { projectId } = useParams()
    const [project, setProject] = useState({});

    useEffect(() => {
        setProject(projects[projectId - 1])
    }, [projectId])

    function handleButtonClick() {
        window.open(project.link, '_blank')
    }

    return (
        <section className='project--container'>
            <h2>{project.name}</h2>
            <div className='project--top'>
                <img src={project.image} alt='project screenshot'/>
                <p>{project.description}</p>
            </div>
            <button onClick={handleButtonClick}>Visit Github repository</button>
        </section>
    );
}
