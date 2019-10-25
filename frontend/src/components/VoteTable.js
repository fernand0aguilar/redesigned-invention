import React, { Component } from 'react';

import { Tips } from './Utils';
import _ from 'lodash';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import Vote from './Vote';

export default class components extends Component {
	constructor(votes) {
		super();
		this.state = {
			data: votes
		};
	}

	render() {
		const { data } = this.state;
		return (
			<div>
				<ReactTable
					data={data.votes}
					columns={[
						{
							Header: 'Votação',
							columns: [
								{
									Header: 'numero de votação',
									accessor: 'num_votacao'
								},
								{
									Header: 'Data',
									id: 'timestamp',
									accessor: d => d.timestamp
								}
							]
						},
						{
							Header: 'Info',
							columns: [
								{
									Header: 'ID do Deputado',
									accessor: 'id_deputado'
								},
								{
									Header: 'Nome do deputado',
									accessor: 'nome'
								},
								{
									Header: 'Tipo de Votação',
									accessor: 'sigla_tipo'
								},
								{
									Header: 'Ano',
									accessor: 'ano'
								},
								{
									Header: 'Objeto De Votação',
									accessor: 'obj_votacao'
								},
								{
									Header: 'Voto',
									accessor: 'voto'
								}
							]
						}
					]}
					pivotBy={['num_votacao']}
					defaultPageSize={10}
					className="-striped -highlight"
					SubComponent={row => {
						return (
							<div style={{ padding: '20px' }}>
								<Vote vote={row} />
							</div>
						);
					}}
				/>
				<br />
				<Tips />
			</div>
		);
	}
}
