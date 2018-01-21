import React, { Component } from 'react';
import Style from './style';
import './navbar.css';

class SideNav extends Component {
  render() {
    return (
      <div style={Style.sideNav}>
        <div style={Style.sideBarButton} className="navButton">
          <h3>Project Overview</h3>
        </div>
        <div style={Style.sideBarButton} className="navButton">
          <h4>Data Feed</h4>
        </div>
        <div style={Style.sideBarButton} className="navButton">
          <h4>Users</h4>
        </div>
        <div style={Style.sideBarButton} className="navButton">
          <h4>Trends</h4>
        </div>
      </div>
    )
  }
}
export default SideNav;
