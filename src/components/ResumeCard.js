import React, { Component } from 'react';
import Typography from '@mui/material/Typography';

class ResumeCard extends Component {
  render() {
    return (
      <div className="resume-entry">
        <div className="work-logo">
          <img
            src={require('../images/reggora.png').default}
            alt="reggora logo"
          />
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginTop: '1rem' }}
          >
            February 2019 - Present
          </Typography>
        </div>
        <div className="work-description">
          <Typography variant="body1" color="text.primary">
            I started with Reggora in 2019 as a QA Engineer in their growing 20
            person engineering department. I wrote automated test suites and
            manually QA'd new features accross Reggora's web application, Open
            API, and Android / iOS applications.
            <br />
            <br />
            Soon after, I was offered a position on the Customer Success team as
            Reggora's first Solution Engineer. In this role, I served as a
            client-facing technical resource developing solutions for new
            accounts looking to build proprietary integrations to Reggora's Open
            API to meet their custom workflow needs.
            <br />
            <br />
            Most recently, my extensive technical knowledge of both the platform
            and our clients' workflows has made me a founding member of our
            Support Engineering team. Here, I debug issues brought forward by
            clients. Our group is responsible for performing root cause analysis
            and fixing smaller issues that can be developed in less than a day.
            Otherwise, we create fix plans and pass along to the engineering
            team to patch.
          </Typography>
        </div>
      </div>
    );
  }
}

export default ResumeCard;
