import React, { Component } from 'react';
import style from './style';
class Result extends Component {

  render() {
    const {avgTime, time, uid, tid} = this.props;
    return (
      <div style={style.comment}>
        <span>{avgTime}</span>
        <span>{time}</span>
        <span>{uid}</span>
        <span>{tid}</span>
      </div>
    )
  }
}
export default Result;
