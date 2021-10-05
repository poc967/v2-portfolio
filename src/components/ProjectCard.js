import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// icons
import { SiNextdotjs as Nextjs } from 'react-icons/si';
import { SiStrapi as Strapi } from 'react-icons/si';
import { FaNode as Node } from 'react-icons/fa';
import { SiAmazonaws as Aws } from 'react-icons/si';
import { SiMongodb as MongoDB } from 'react-icons/si';
import { SiRedux as Redux } from 'react-icons/si';
import { SiReact as ReactIcons } from 'react-icons/si';
import { SiExpress as Express } from 'react-icons/si';
import { SiSocketdotio as Socket } from 'react-icons/si';
import { SiPassport as Passport } from 'react-icons/si';
import { SiHeroku as Heroku } from 'react-icons/si';
import { TiHtml5 as Html } from 'react-icons/ti';
import { SiCss3 as Css } from 'react-icons/si';
import { SiStyledcomponents as StyledComponents } from 'react-icons/si';
import { SiGumroad as GumRoad } from 'react-icons/si';
import { SiNginx as NginX } from 'react-icons/si';

class ProjectCard extends Component {
  render() {
    return (
      <Card sx={{ maxWidth: 345, margin: '1rem' }}>
        <CardMedia
          component="img"
          height="auto"
          image={require(`../images/${this.props.project.imagePath}`).default}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.project.projectName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.project.description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: '1rem' }}
          >
            {this.props.project.technologies.map((technology, index) => {
              switch (technology) {
                case 'nextjs':
                  return (
                    <Nextjs
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#000000',
                      }}
                    />
                  );
                case 'strapi':
                  return (
                    <Strapi
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#8e75ff',
                      }}
                    />
                  );
                case 'node':
                  return (
                    <Node
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#89bb3b',
                      }}
                    />
                  );
                case 'aws':
                  return (
                    <Aws
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#000000',
                      }}
                    />
                  );
                case 'mongo':
                  return (
                    <MongoDB
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#419e39',
                      }}
                    />
                  );
                case 'react':
                  return (
                    <ReactIcons
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#5ccfef',
                      }}
                    />
                  );
                case 'heroku':
                  return (
                    <Heroku
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#635d9c',
                      }}
                    />
                  );
                case 'redux':
                  return (
                    <Redux
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#7045b3',
                      }}
                    />
                  );
                case 'socket':
                  return (
                    <Socket
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#000000',
                      }}
                    />
                  );
                case 'express':
                  return (
                    <Express
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#000000',
                      }}
                    />
                  );
                case 'passport':
                  return (
                    <Passport
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#01b1e6',
                      }}
                    />
                  );
                case 'css':
                  return (
                    <Css
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#274de4',
                      }}
                    />
                  );
                case 'html':
                  return (
                    <Html
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#e44d26',
                      }}
                    />
                  );
                case 'styled-components':
                  return (
                    <StyledComponents
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#be5faa',
                      }}
                    />
                  );
                case 'gumroad':
                  return (
                    <GumRoad
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#ae3334',
                      }}
                    />
                  );
                case 'nginx':
                  return (
                    <NginX
                      key={index}
                      style={{
                        fontSize: '2rem',
                        padding: '1rem',
                        color: '#009037',
                      }}
                    />
                  );
                default:
                  return null;
              }
            })}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={this.props.project.githubRepoUrl}>
            Github Repo
          </Button>
          <Button size="small" href={this.props.project.liveProjectRepo}>
            Live Project
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ProjectCard;
