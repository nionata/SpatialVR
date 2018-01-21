import React, { Component } from 'react';
import style from './style';
class Result extends Component {

  render() {
    const {avgTime, time, uid, tid} = this.props;
    return (
      <div style={style.comment}>
        <span>Average time: {avgTime}</span><br/>
        <span>Time: {time}</span><br/>
        <span>UID: {uid}</span><br/>
        <span>TID: {tid}</span><br/>
      </div>
    )
  }
}
export default Result;
