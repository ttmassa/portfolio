import React from 'react'
import { useState, useEffect } from 'react'
import projects  from '../data/projects/data'
import Project from '../components/Project'

export default function Works() {
    const [project, setProject] = useState(projects)

    useEffect(() => {
        setProject(projects)
    }, [])

    const projectList = project.map(project => {
        return (
            <Project 
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                image={project.image}
                languages={project.languages}
                link={project.link}
            />
        )
    })
    
    return (
        <section className='works--page'>
            <div className='works--projects'>
                {projectList}
            </div>
        </section>
    )
}