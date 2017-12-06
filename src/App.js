import React, { Component } from 'react';
import './App.css';

class App extends Component {

  fetchData = (name) => {
    const key = '687ffee217080389caa42809f747df91'
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=London,GB&appid=${key}`)
    .then(response => { 
      if(response.ok) {
        response.json().then(data => {
          console.log('data: ', data)
        })
      } 
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your 3 Hourly Forecast for next 5 days</h1>
        </header>
        <div className="App-intro">
          
        </div>
      </div>
    );
  }
}

export default App;
