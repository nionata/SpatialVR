import React, { Component } from 'react';
import Result from './Result';
import style from './style';
class ResultsList extends Component {
/*
let commentNodes = this.props.data.map(comment => {
  return (
    <Comment author={ comment.author } key={ comment['_id'] }>{comment.text}</Comment>
  )
})
*/
  render() {
    return (
      <div style={style.commentList}>
        {this.props.data.map(result => {
          return (
            <Result avgTime={result.avgTime} time={result.time} uid={result.uid} tid={result.tid} key={result.tid} />
          )
        })}
      </div>
    )
  }
}
export default ResultsList;
