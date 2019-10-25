import React, { Component } from 'react';

import { getVotes } from '../API';
import VoteTable from '../components/VoteTable';
import VoteChart from '../components/VoteChart';

class VotesPage extends Component {
	state = {
		votes: null
	};

	componentDidMount = async () => {
		const votes = await getVotes().catch(error => {
			console.log(error);
		});
		this.setState({
			votes
		});
	};

	render() {
		const { votes } = this.state;
		return votes ? (
			<div>
				<VoteTable votes={votes} />
				<br />
				<VoteChart votes={votes} />
			</div>
		) : (
			<h1>Loading...</h1>
		);
	}
}

export default VotesPage;
