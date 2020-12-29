import React, { useState } from 'react';
import ProjectItem from './project-item/project-item';

import './projects.css';

const Projects = () => {
  const [test] = useState(['goldilocks', 'roadiecamp', 'radma']);

  return (
    <div className='projects'>
      {test.map((title, idx) => {
       return (
         <ProjectItem title={title} />
       )
      })}
    </div>
  )
}

export default Projects;