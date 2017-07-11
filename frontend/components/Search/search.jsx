import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import SearchBarContainer from './SearchBarContainer';
import GemContainer from '../Gem/GemContainer';

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