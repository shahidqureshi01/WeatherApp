import React, { Component } from 'react';
import '../App.css';
import Forecast from './Forecast'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: '',
      days: []
    }
  }

  fetchData = () => {
    const key = '687ffee217080389caa42809f747df91'
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=London,GB&appid=${key}`)
    .then(response => { 
      if(response.ok) {
        response.json().then(data => {
          //console.log('data: ', data)
          this.setState({data})
          let days = {}
          data.list.map(d =>{
            let weekDay = new Date(d.dt*1000).toLocaleString('en-gb', {  weekday: 'long' })
            if(!days.hasOwnProperty(weekDay)) {
              Object.defineProperty(days, weekDay, {
                value: [d],
                writable: true,
                enumerable: true,
                configurable: true
              });
            } else {
              //console.log('test', days)
              let oldData = days[weekDay]
              days[weekDay] = [...oldData, d]
            }
          })
          this.setState({days})
        }) //end of response
      } //end of if
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { data, days } = this.state
    const today = new Date().toLocaleString('en-gb', {  weekday: 'long' })
    if(data !== '') {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Your 3 Hourly Forecast for next 5 days</h1>
          </header>
          <div className="App-intro">
            <Forecast data={days[today]}/>
            <p>{console.log('wee', days[today])}</p>
          </div>
        </div>
      );
    } else {
      return (<div>No Data</div>)
    }
  }
}

export default App;
