import React, { Component } from 'react';
import Header from './Header';
import SideNav from './SideNav';
import ProjectOverview from './ProjectOverview';
import ResultsBox from './ResultsBox';
import UsersBox from './UsersBox';
import Trends from './Trends';
import Style from './style';

class Console extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: 0,
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(num) {
    //console.log(num);
    this.setState({
      selection: num
    });
  }

  render() {
    return (
      <span>
        <Header/>
        <div style={Style.pane}>
          <div style={Style.sideBar}>
            <SideNav onClick={this.onClick}/>
          </div>
          <div style={Style.canvas}>
            {this.state.selection == 0 &&
              <ProjectOverview/>
            }
            {this.state.selection == 1 &&
              <ResultsBox url='http://localhost:3001/api/results' pollInterval={1000} />
            }
            {this.state.selection == 2 &&
              <UsersBox url='http://localhost:3001/api/results' pollInterval={10000} />
            }
            {this.state.selection == 3 &&
              <Trends/>
            }
          </div>
        </div>
      </span>
    )
  }
}
export default Console;
