import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import style from './style';
class UsersBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.pollInterval = null;
  }

  loadCommentsFromServer() {
    axios.get(this.props.url).then(res => {
      var newData = res.data.sort(function(a, b) {
        return b.time - a.time;
      });

      this.setState({ data: newData });
    })
  }

  componentDidMount() {
    console.log("User box did mount");
    this.loadCommentsFromServer();

    

    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.loadCommentsFromServer, this.props.pollInterval)
    }
  }

  componentWillUnmount() {
    console.log("User box will unmount");
    this.pollInterval && clearInterval(this.pollInterval);
  }


  render() {
    console.log("User box loaded")
    return (
      <div>
        <h2 style={style.primaryText}>Users</h2>
        <hr/>
        <div style={style.commentList}>
          {this.state.data.map(result => {
            return (
              <User avgTime={result.avgTime} time={result.time} uid={result.uid} tid={result["_id"]} key={result["_id"]} />
            )
          })}
        </div>
      </div>
    )
  }
}
export default UsersBox;
