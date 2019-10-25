import React, { Component } from 'react';

import { getVotes } from '../API';
import VoteTable from '../components/VoteTable';

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
		return votes ? <VoteTable votes={votes} /> : <h1>Loading...</h1>;
	}
}

export default VotesPage;
