import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import style from './style';
import './navbar.css';
class Header extends Component {
  render() {
    return (
      <Navbar className="main-navigation" inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <span>
              <a href="">
                <img src={'./icon.png'} height={30} alt="icon" />
                SpatialVR
              </a>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text className='external-nav-link' pullRight>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Header;
