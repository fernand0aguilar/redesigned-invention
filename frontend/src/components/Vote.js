import React from 'react';

const Vote = ({ vote }) => (
	<section className="Vote-listing">
		<h3 className="name">{vote.row.num_votacao}</h3>
		<section>
			<p>{vote.row.obj_votacao}</p>
			<p>{vote.row.ano}</p>
		</section>
	</section>
);

export default Vote;
