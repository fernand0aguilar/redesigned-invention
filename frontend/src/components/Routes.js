import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import VotesPage from '../containers/VotesPage';
import VotePage from '../containers/VotePage';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={VotesPage} />
		<Route exact path="/Votes/:id" component={VotePage} />
		<Route path="*" component={NotFound} />
	</Switch>
);

export default Routes;
