import React from 'react';

class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = { query: "" };
		this.inputHandler = this.inputHandler.bind(this);
	}

	inputHandler(e){
		e.preventDefault();
		this.setState({query: e.currentTarget.value});

	}

	render(){
		return (
			<main className="search-bar">
				<form>
					<input type="text" onChange={this.inputHandler}
                value={this.state.query}/>
				</form>
			</main>
		);
	}
}

export default SearchBar;