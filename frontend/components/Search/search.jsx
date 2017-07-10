import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import SearchBarContainer from './searchBarContainer';

class Search extends React.Component {
	render() {
		return(
		<main className="search">
			<h1>Search Gems</h1>
			<SearchBarContainer />
		</main>
		);
	}
}

export default Search;