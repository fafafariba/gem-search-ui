import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav/nav';
import Search from './Search/search';
import Favorites from './Favorites/favorites';

const App = () => (
	<main className="app">
		<Nav />
		<Switch>
			<Route path="/favorites" component={Favorites}/>
			<Route exact path="/" component={Search}/>
			<Route render={ () => <p>Not Found</p> } />
		</Switch>
	</main>
);

export default App;