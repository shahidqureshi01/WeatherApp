import React, { Component } from 'react';

class Forecast extends Component {
	
	render() {
		const { data } = this.props
		console.log('datao', data)
		if(data) {
			return (
				<div>
					{this.props.data.map(d => (
						<div key={d.dt} className='main'>
							<h3>{d.dt_txt}</h3>
							<h4>Weather</h4>
							<span className="spacer">Forecast: {d.weather[0].main}</span>
							<span className="spacer">Description: {d.weather[0].description}</span>

							<h4>Wind</h4>
							<span className="spacer">Speed: {d.wind.speed}</span>
							<span className="spacer">Deg: {d.wind.deg}</span>

							<h4>Main</h4>
							<span className="spacer">Temp: {d.main.temp}</span>
							<span className="spacer">Temp(max): {d.main.temp_max}</span>
							<span className="spacer">Temp(min): {d.main.temp_min}</span>
							<span className="spacer">Humidity: {d.main.humidity}</span>
							<span className="spacer">Pressure: {d.main.pressure}</span>
							<span className="spacer">Sea Level: {d.main.sea_level}</span>
						</div>
					))}
				</div>
			)
		} else {
			return (<div>No data</div>)
		}
	}
}

export default Forecast