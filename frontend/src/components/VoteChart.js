import React, { Component } from 'react';

// Import React D3
import { BarChart, PieChart, LineChart } from 'react-charts-d3';

export default class VoteChart extends Component {
	constructor(votes) {
		super();
		this.state = {
			data: votes
		};
	}

	render() {
		const { data } = this.state;

		const dataForPieChart = [{ label: 'Group 1', value: 23 }, { label: 'Group 2', value: 15 }];
		const dataForBarChart = [
			{ key: 'Group 1', values: [{ x: 'A', y: 23 }, { x: 'B', y: 8 }] },
			{ key: 'Group 2', values: [{ x: 'A', y: 15 }, { x: 'B', y: 37 }] }
		];
		const dataForScatterChart = [
			{ key: 'Group 1', values: [{ x: 'A', y: 23 }, { x: 'B', y: 8 }] },
			{ key: 'Group 2', values: [{ x: 'A', y: 15 }, { x: 'B', y: 37 }] }
		];
		return (
			<div>
				<h1 className="h1-title"> Estatísticas</h1>
				<br />
				<BarChart data={dataForBarChart} />
				<PieChart data={dataForPieChart} />
				<LineChart data={dataForScatterChart} />
			</div>
		);
	}
}
