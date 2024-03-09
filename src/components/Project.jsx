import React from 'react'
import { Link } from 'react-router-dom'

export default function Project(props) {
    const languages = props.languages.map((language, index) => {
        return (
            <li key={index}>{language}</li>
        )
    })

    return (
        <Link className='project--container' to={`${props.id}`}>
            <img src={props.image} alt='screenshot from project'/>
            <div className='project--info'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <ul className='project--languages'>
                    {languages}
                </ul>
            </div>
        </Link>
    )
}