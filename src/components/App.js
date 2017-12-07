import React, { Component } from 'react';
import '../App.css';
import Forecast from './Forecast'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: '',
      days: [],
      currentDay: new Date().toLocaleString('en-gb', {  weekday: 'long' })
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

  handleClick = (day) => {
    //console.log(day)
    this.setState({currentDay: day})
  }

  render() {
    const { data, days } = this.state
    const { currentDay } = this.state
    console.log('currentDay', currentDay)
    const time = Date.now()
    const today = new Date().toLocaleString('en-gb', {  weekday: 'long' })
    const dayTwo = new Date(time + (60 * 60 * 24 * 1000)).toLocaleString('en-gb', {  weekday: 'long' })
    const dayThree = new Date(time + (60 * 60 * 48 * 1000)).toLocaleString('en-gb', {  weekday: 'long' })
    const dayFour = new Date(time + (60 * 60 * 72 * 1000)).toLocaleString('en-gb', {  weekday: 'long' })
    const dayFive = new Date(time + (60 * 60 * 96 * 1000)).toLocaleString('en-gb', {  weekday: 'long' })
    
    if(data !== '') {
      return (
        <div className="App">
          <header className="App-header">
            <h1>{data.city.name}, {data.city.country}</h1>
            <h4 className="App-title">Your 3 Hourly Forecast for next 5 days</h4>
          </header>
          <ul>
            <li onClick={(e) => {this.handleClick(today)}}>{today}</li>
            <li onClick={(e) => {this.handleClick(dayTwo)}}>{dayTwo}</li>
            <li onClick={(e) => {this.handleClick(dayThree)}}>{dayThree}</li>
            <li onClick={(e) => {this.handleClick(dayFour)}}>{dayFour}</li>
            <li onClick={(e) => {this.handleClick(dayFive)}}>{dayFive}</li>
          </ul>
          <div className="App-intro">
            <Forecast data={days[currentDay]}/>
          </div>
        </div>
      );
    } else {
      return (<div>No Data</div>)
    }
  }
}

export default App;
