import React, { Component } from 'react';
import Style from './style';

class ProjectOverview extends Component {
  render() {
    return (
      <div>
        <h2 style={Style.primaryText}>Project Overview</h2>
        <hr/>
        <p><a href="https://devpost.com/software/spatialvr" target="_blank"><img src="https://marketing-challengepost.netdna-ssl.com/assets/reimagine2/devpost-logo-a0cd0d3c3681a858b200141ed18a9bf9.svg"  alt="Devpost logo" width="140"/></a></p>
        <p><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Github logo" width="36"/> <a href="https://github.com/nionata/SwampHacks2018" target="_blank">Web App</a></p>
        <p><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Github logo" width="36"/> <a href="https://github.com/sourabh2k15/spatialHearing" target="_blank">VR Experience</a></p>
      </div>
    )
  }
}
export default ProjectOverview;
