import React, { Component } from 'react';
import {
  HighchartsChart, Chart, PieSeries, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, LineSeries
} from 'react-jsx-highcharts';
import Highcharts from 'highcharts';
import axios from 'axios';
import Style from './style';

class Trends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      g20: 0,
      t60: 0,
      g60: 0,
    };

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.pollInterval = null;
  }

  loadCommentsFromServer() {
    axios.get(this.props.url).then(res => {
      var newData = [];
      var oldData = [];

      oldData = res.data.filter(function(result) {
        if(result.age > 0) {

          if(result.age < 20) {
            this.setState({
              "g20": this.state.g20 + 1
            });
          } else if(result.age < 60) {
            this.setState({
              "t60": this.state.t60 + 1
            });
          } else {
            this.setState({
              "g60": this.state.g60 + 1
            });
          }

          newData.push({
            "uid": result.uid,
            "age": result.age,
            "sessions": [
              result.avgTime,
            ],
          })
        }

        return result.age <= 0
      }.bind(this));
      //console.log(newData);
      //console.log(oldData);

      oldData.forEach(function(result) {
        var index = newData.findIndex(i => i.uid === result.uid);
        newData[index]["sessions"].push(
          result.avgTime,
        );
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
    return (
      <div>
      <HighchartsChart>
        <Chart />
          <Title>Average Response Time Over Sessions</Title>
          <Subtitle>Source: Our Data</Subtitle>
          <Legend layout="vertical" align="right" verticalAlign="middle" />
          <XAxis>
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>
          <YAxis id="number">
            <YAxis.Title>Average Response Time</YAxis.Title>
            {
              this.state.data.map(user => {
                return (
                  <LineSeries id={user.uid} name={user.uid} data={user.sessions} key={user.uid} />
                )
              })
            }
          </YAxis>
        </HighchartsChart>
        <hr/>
        <HighchartsChart>
          <Chart />
          <Title>Breakdown of Age</Title>
          <Legend layout="vertical" align="right" verticalAlign="middle" />
          <PieSeries id="total-users" name="User" data={[
            {
              name: "<20",
              y: this.state.g20,
            },
            {
              name: "20-60",
              y: this.state.t60,
            },
            {
              name: ">60",
              y: this.state.g60,
            },
          ]} center={[525, 100]} size={200} showInLegend={true} />
        </HighchartsChart>
      </div>
    )
  }
}
export default withHighcharts(Trends, Highcharts);;
