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
      var newData = [];
      var oldData = [];
      //console.log(res.data);

      oldData = res.data.filter(function(result) {
        if(result.age > 0) {
          newData.push({
            "uid": result.uid,
            "age": result.age,
            "sessions": [{
              "_id": result["_id"],
              "time": result.time,
              "avgTime": result.avgTime,
            }],
          })
        }

        return result.age <= 0
      });
      //console.log(newData);
      //console.log(oldData);

      oldData.forEach(function(result) {
        var index = newData.findIndex(i => i.uid === result.uid);
        newData[index]["sessions"].push({
          "_id": result["_id"],
          "time": result.time,
          "avgTime": result.avgTime,
        });
      });
      console.log(newData);

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
              <User sessions={result.sessions} age={result.age} uid={result.uid} key={result.uid} />
            )
          })}
        </div>
      </div>
    )
  }
}
export default UsersBox;
