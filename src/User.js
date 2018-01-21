import React, { Component } from 'react';
import Moment from 'react-moment';
import style from './style';
class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: false,
    }

    this.setId = this.setId.bind(this)
  }

  setId(e) {
    e.preventDefault();

    this.setState({
      id: !this.state.id
    });
  }

  render() {
    const {sessions, age, uid} = this.props;
    var styless = {
      backgroundColor: '#FF5722',
      color: '#FFFFFF',
      width: ((sessions[0].avgTime/100)+10)+'vh',
      padding: '10px',
      float: 'right'
    }
    return (
      <div style={style.comment} onMouseOver={this.setId} onMouseOut={this.setId}>
        <h4 style={style.rightText}>ID: {uid}</h4>
        <h4>Age: {age}</h4>
        {this.state.id &&
          <h4 style={style.rightText}>ID: {uid}</h4>
        }
        <h5>Last Session: <Moment fromNow>{sessions[sessions.length - 1].time}</Moment> - {Math.floor((sessions[sessions.length - 1].avgTime/1000) * 100)/100} s</h5>
      </div>
    )
  }
}
export default User;
