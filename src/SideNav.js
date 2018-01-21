import React, { Component } from 'react';
import Style from './style';
import './navbar.css';

class SideNav extends Component {
  render() {
    return (
      <div style={Style.sideNav}>
        <div style={Style.sideBarButton} className="navButton" onClick={() => this.props.onClick(0)}>
          <h4>Project Overview</h4>
        </div>
        <div style={Style.sideBarButton} className="navButton" onClick={() => this.props.onClick(1)}>
          <h4>Data Feed</h4>
        </div>
        <div style={Style.sideBarButton} className="navButton" onClick={() => this.props.onClick(2)}>
          <h4>Users</h4>
        </div>
        <div style={Style.sideBarButton} className="navButton" onClick={() => this.props.onClick(3)}>
          <h4>Trends</h4>
        </div>
      </div>
    )
  }
}
export default SideNav;
