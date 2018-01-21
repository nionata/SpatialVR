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
  }

  componentDidMount() {
    axios.get(this.props.url).then(res => {
      this.setState({ data: res.data });

      console.log(this.state.data);
    })
  }

  render() {
    console.log("Result box loaded")
    return (
      <div style={style.commentBox}>
        <h2>Results:</h2>
        <ResultsList data={this.state.data}/>
      </div>
    )
  }
}
export default ResultsBox;
