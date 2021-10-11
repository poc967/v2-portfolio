import React, { Component } from 'react';
import ResumeCard from './ResumeCard';

class Resume extends Component {
  render() {
    return (
      <div className="resume-main">
        <div className="project-header">
          <h1 id="resume">Work Experience</h1>
        </div>
        <ResumeCard />
      </div>
    );
  }
}

export default Resume;
