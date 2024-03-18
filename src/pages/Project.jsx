import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../data/projects/data';

export default function Project() {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    setProject(projects[projectId - 1]);
  }, [projectId]);

  function handleButtonClick() {
    window.open(project.link, '_blank');
  }

  const leftArrowDestination = projectId > 1 ? `/works/${parseInt(projectId) - 1}` : `/works/${projects.length}`;
  const rightArrowDestination = projectId < projects.length ? `/works/${parseInt(projectId) + 1}` : '/works/1';

  return (
    <section className='project--container'>

      <h2>{project.name}</h2>

      <div className='project--top'>

        <img src={project.image} alt='project screenshot' />
        
        <div>

          <p>{project.description}</p>
          <div>
            <ul className='project--languages'>
              {project.languages && project.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          
        </div>

      </div>

      <div className='project--nav'>
        {<Link className='project--arrow' to={leftArrowDestination}>&larr;</Link>}
        <button onClick={handleButtonClick}>Visit Github repository</button>
        {<Link className='project--arrow' to={rightArrowDestination}>&rarr;</Link>}
      </div>

    </section>
  );
}
