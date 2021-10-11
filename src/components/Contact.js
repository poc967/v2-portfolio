import { Button, Typography } from '@mui/material';
import { SiLinkedin as LinkedIn } from 'react-icons/si';
import { SiGithub as GitHub } from 'react-icons/si';
import React from 'react';

const Contact = () => {
  return (
    <div className="contact-main">
      <h1 id="contact" style={{ fontWeight: '200', color: '#2477b0' }}>
        Let's get in touch!
      </h1>
      <Typography
        variant="body1"
        color="text.primary"
        sx={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '200' }}
      >
        Email me at poc.967@gmail.com
      </Typography>
      <Typography
        variant="body1"
        color="text.primary"
        sx={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '200' }}
      >
        Check out me out on GitHub and LinkedIn, too
      </Typography>
      <div className="contact-icon-wrapper">
        <Button href="https://www.linkedin.com/in/patrickoconnor3/">
          <LinkedIn
            style={{
              fontSize: '4rem',
              padding: '1rem',
              color: '#2477b0',
            }}
          />
        </Button>
        <Button href="https://github.com/poc967">
          <GitHub
            style={{
              fontSize: '4rem',
              padding: '1rem',
              color: '#000000',
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default Contact;
