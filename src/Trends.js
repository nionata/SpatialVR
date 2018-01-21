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
      data: []
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
          newData.push({
            "uid": result.uid,
            "age": result.age,
            "sessions": [
              result.avgTime,
            ],
          })
        }

        return result.age <= 0
      });
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
      //this.pollInterval = setInterval(this.loadCommentsFromServer, this.props.pollInterval)
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
        <HighchartsChart>
          <Chart />
          <Title>Breakdown of Age</Title>
          <Legend />
          <PieSeries id="total-users" name="User" data={[{name: "ben", y: 10}, {name: "susan", y: 80}]} center={[525, 100]} size={200} showInLegend={false} />
        </HighchartsChart>
      </div>
    )
  }
}
export default withHighcharts(Trends, Highcharts);;
