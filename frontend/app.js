import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav/nav';
import Search from './components/Search/search';
import Favorites from './components/Favorites/favorites';

const App = ()=> (
 <Router>
    <div className="app">
			<Nav />
			<Switch>
				<Route path="/favorites" component={Favorites}/>
				<Route exact path="/" component={Search}/>
				<Route render={ () => <p>Not Found</p> } />
			</Switch>
    </div>
  </Router>
);

export default App;