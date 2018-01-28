import React, { Component } from 'react';
import Moment from 'react-moment';
import Style from './style';
class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessions: false,
    }

    this.setSessions = this.setSessions.bind(this)
  }

  setSessions(e) {
    e.preventDefault();

    this.setState({
      sessions: !this.state.sessions
    });
  }

  render() {
    const {sessions, age, uid} = this.props;
    return (
      <div style={Style.comment}>
        <h4 style={Style.rightText}>ID: {uid}</h4>
        <h4>Age: {age} <img src={'https://d30y9cdsu7xlg0.cloudfront.net/png/7467-200.png'} style={{marginLeft: '10px'}} height={20} alt={"Eye icon"} onMouseOver={this.setSessions} onMouseOut={this.setSessions} /></h4>
        {this.state.sessions ?
          <h4>Sessions:</h4>
          :
          <h5>Last Session: <Moment fromNow>{sessions[sessions.length - 1].time}</Moment> - {Math.floor((sessions[sessions.length - 1].avgTime/1000) * 100)/100} s</h5>
        }
        {this.state.sessions &&
          sessions.map(result => {
            return (
              <div>
                <h5 style={Style.rightText, {marginRight: '0px', marginLeft: '10px'}}><Moment fromNow>{result.time}</Moment></h5>
                <h4 style={{
                  backgroundColor: '#FF5722',
                  color: '#FFFFFF',
                  width: ((result.avgTime/100)+10)+'vh',
                  padding: '0px',
                  marginLeft: '20px',
                }}>{(Math.floor((result.avgTime/1000) * 100))/100} s</h4>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default User;
