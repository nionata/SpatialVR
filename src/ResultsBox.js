import React, { Component } from 'react';
import axios from 'axios';
import ResultsList from './ResultsList';
import Header from './Header';
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
      this.setState({ data: res.data });

      console.log(this.state.data);
    })
  }

  componentDidMount() {
    this.loadCommentsFromServer();

    if (!this.pollInterval) {
      //this.pollInterval = setInterval(this.loadCommentsFromServer, this.props.pollInterval)
    }
  }

  componentWillUnmount() {
    this.pollInterval && clearInterval(this.pollInterval);
  }


  render() {
    console.log("Result box loaded")
    return (
      <div>
        <Header/>
        <div style={style.commentBox}>
          <h2>Results:</h2>
          <ResultsList data={this.state.data}/>
        </div>
      </div>
    )
  }
}
export default ResultsBox;
