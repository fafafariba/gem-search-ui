import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import SearchBar from './searchBar';

class Search extends React.Component {
	render() {
		return(
		<main className="search">
			<h1>Search Gems</h1>
			<SearchBar />
			<img src={'../../../assets/map.png'} />
		</main>
		);
	}
}

export default Search;