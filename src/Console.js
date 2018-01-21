import React, { Component } from 'react';
import Header from './Header';
import SideNav from './SideNav';
import ResultsBox from './ResultsBox';
import Style from './style';

class Console extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: 0,
    }
  }

  render() {
    return (
      <span>
        <Header/>
        <div style={Style.pane}>
          <div style={Style.sideBar}>
            <SideNav/>
          </div>

        </div>
      </span>
    )
  }
}
export default Console;
