import React, { Component } from 'react';

class Forecast extends Component {
	
	render() {
		const { data } = this.props
		console.log('datao', data)
		if(data) {
			return (
				<div>
					{this.props.data.map(d => (
						<div>
							<h3>{d.dt_txt}</h3>
							<h4>Weather</h4>
							<span className="spacer">Forecast: {d.weather[0].main}</span>
							<span className="spacer">Description: {d.weather[0].description}</span>

							<h4>Wind</h4>
							<span className="spacer">Speed: {d.wind.speed}</span>
							<span className="spacer">Deg: {d.wind.deg}</span>
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