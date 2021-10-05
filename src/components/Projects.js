import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../ProjectData.json';

class Projects extends Component {
  render() {
    return (
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
