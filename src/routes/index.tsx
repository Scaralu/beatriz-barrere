import React from 'react';
import { Switch } from 'react-router-dom'

import Route from './Route';

import Contact from '../pages/Contact';
import Home from '../pages/Home';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/contact' component={Contact} />
		<Route path='/dashboard' component={Dashboard} isPrivate />
	</Switch>
);

export default Routes;
