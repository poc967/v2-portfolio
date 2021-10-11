import React, { Component } from 'react';
import { Typography } from '@mui/material';

class About extends Component {
  render() {
    return (
      <div className="about-main">
        <Typography
          variant="h2"
          color="text.primary"
          sx={{ marginBottom: '1.5rem', color: '#2477b0' }}
        >
          Hi There! I'm Pat
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '200' }}
        >
          I'm a Developer and Solutions Engineer located in the Greater Boston
          area.
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '200' }}
        >
          I specialize in development using Javascript and Python along with
          no-SQL databases like MongoDB. I am also an expert in web API's and
          client communications. When I am not writing code, you can find me at
          the gym, mountain biking, or watching repeats of The Office!
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '200' }}
        >
          Check below to see my work experience, current side projects, and how
          to get in touch!
        </Typography>
      </div>
    );
  }
}

export default About;
