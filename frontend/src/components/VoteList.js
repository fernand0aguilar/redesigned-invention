import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Vote from './Vote';

const VoteList = ({ votes }) => (
	<ul className="votes">
		{votes.map(vote => (
			<li key={vote.id}>
				<Link to={`/votes/${vote.id}`}>
					<Vote vote={vote} />
				</Link>
			</li>
		))}
	</ul>
);

VoteList.propTypes = {
	votes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			num_votacao: PropTypes.number.isRequired,
			timestamp: PropTypes.string.isRequired,
			sigla_tipo: PropTypes.string.isRequired,
			numero: PropTypes.string.isRequired,
			ano: PropTypes.number.isRequired,
			obj_votacao: PropTypes.string.isRequired,
			url_inteiro_teor: PropTypes.string.isRequired,
			id_deputado: PropTypes.number.isRequired,
			nome: PropTypes.string.isRequired,
			sigla_partido: PropTypes.string.isRequired,
			uf: PropTypes.string.isRequired,
			voto: PropTypes.string.isRequired,
			orient_part: PropTypes.string,
			orient_gov: PropTypes.string.isRequired
		})
	).isRequired
};

export default VoteList;
