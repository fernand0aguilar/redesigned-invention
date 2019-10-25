import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSingleVote } from '../API';
import Vote from '../components/Vote';

export class VotePage extends Component {
	state = {
		vote: null
	};

	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string.isRequired
			}).isRequired
		}).isRequired
	};

	componentDidMount = async () => {
		const { id } = this.props.match.params;
		const vote = await getSingleVote(id).catch(error => {
			console.log(error);
		});
		this.setState({
			vote
		});
	};

	render() {
		const { vote } = this.state;
		return vote ? <Vote vote={vote} /> : <h1>Loading...</h1>;
	}
}

export default VotePage;
