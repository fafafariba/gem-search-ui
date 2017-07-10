import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import SearchBarContainer from './searchBarContainer';
import GemContainer from './gemContainer';

class Search extends React.Component {
	render() {
		return(
		<main className="search">
			<h1>Search Gems</h1>
			<SearchBarContainer />
			<GemContainer />
		</main>
		);
	}
}

export default Search;