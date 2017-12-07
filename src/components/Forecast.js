import React, { Component } from 'react';

class Forecast extends Component {
	
	render() {
		const data = this.props
		return (
			<div>
				<p>{JSON.stringify(this.props.data)}</p>
			</div>
		)
	}
}

export default Forecast