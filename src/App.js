import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  fetchData = () => {
    const key = '687ffee217080389caa42809f747df91'
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=London,GB&appid=${key}`)
    .then(response => { 
      if(response.ok) {
        response.json().then(data => {
          console.log('data: ', data)
          this.setState({data})
        })
      } 
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { data } = this.state
    if(data !== '') {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Your 3 Hourly Forecast for next 5 days</h1>
          </header>
          <div className="App-intro">
            <p>{JSON.stringify(data)}</p>
          </div>
        </div>
      );
    } else {
      return (<div>No Data</div>)
    }
  }
}

export default App;
