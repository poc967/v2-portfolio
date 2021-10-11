import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

class NavigationBar extends Component {
  render() {
    return (
      <AppBar position="sticky" sx={{ backgroundColor: '#2477b0' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left' }}
          >
            Patrick O'Connor
          </Typography>
          <Button color="inherit" href="#top">
            Home
          </Button>
          <Button color="inherit" href="#resume">
            Resume
          </Button>
          <Button color="inherit" href="#projects">
            Projects
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavigationBar;
