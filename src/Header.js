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
                <img src={'https://d30y9cdsu7xlg0.cloudfront.net/png/147354-200.png'} height={32} alt="icon" />
                SpacialVR
              </a>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text className='external-nav-link' pullRight>
            <a href="https://github.com/nionata/SwampHacks2018" target="blank">Github</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Header;
