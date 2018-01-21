import React, { Component } from 'react';
import axios from 'axios';
import ResultsList from './ResultsList';
import style from './style';
class ResultsBox extends Component {
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
    this.loadCommentsFromServer();

    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.loadCommentsFromServer, this.props.pollInterval)
    }
  }

  componentWillUnmount() {
    this.pollInterval && clearInterval(this.pollInterval);
  }


  render() {
    console.log("Result box loaded")
    return (
      <div>
        <h2 style={style.primaryText}>Data Feed</h2>
        <hr/>
        <ResultsList data={this.state.data}/>
      </div>
    )
  }
}
export default ResultsBox;
