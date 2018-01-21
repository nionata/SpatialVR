import React, { Component } from 'react';
import Moment from 'react-moment';
import style from './style';
class Result extends Component {
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
    const {avgTime, time, uid, tid} = this.props;
    var styless = {
      backgroundColor: '#FF5722',
      color: '#FFFFFF',
      width: ((avgTime/100)+10)+'vh',
      padding: '10px',
    }
    return (
      <div style={style.comment} onMouseOver={this.setId} onMouseOut={this.setId}>
        {this.state.id &&
          <h4 style={style.rightText}>ID: {uid}</h4>
        }
        <h4 style={styless}>{Math.floor((avgTime/1000) * 100)/100} s</h4>
        <h5><Moment fromNow>{time}</Moment></h5>
      </div>
    )
  }
}
export default Result;
