import React, { Component } from 'react';
import Result from './Result';
import style from './style';
class ResultsList extends Component {
  render() {
    return (
      <div style={style.commentList}>
        {this.props.data.map(result => {
          return (
            <Result avgTime={result.avgTime} time={result.time} uid={result.uid} tid={result["_id"]} key={result["_id"]} />
          )
        })}
      </div>
    )
  }
}
export default ResultsList;
