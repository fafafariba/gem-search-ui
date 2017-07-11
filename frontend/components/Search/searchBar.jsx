import React from 'react';

class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = { query: "" };
		this.inputHandler = this.inputHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	componentWillUnmount(){
		this.errorHandler();
	}

	inputHandler(e){
		e.preventDefault();
		this.setState({ query: e.currentTarget.value });
		this.errorHandler();
	}

	submitHandler(e){
		e.preventDefault();
		this.props.queryGem(this.state.query.toLowerCase());
		this.errorHandler();
	}

	errorHandler(){
		if (this.props.errors) this.props.clearErrors();
	}

	render(){

		let errors = <div></div>;
		
		if (this.props.errors) {
			errors = (
				<p className="errors">Oh no! Looks like that gem can’t be found.</p>
			);
		}
		
		return (
			<main className="search-bar">
				<form className="form" onSubmit={this.submitHandler}>
					<input type="text" placeholder="Search" onChange={this.inputHandler} value={this.state.query} id={ this.props.errors ? "errors" : ""}/>
					<button type="submit" className="magnify-btn" id={ this.props.errors ? "errors" : ""}>
						<img src={`../../../assets/magnifying-glass${this.props.errors ? "-error" : "" }.png`} alt="Search"/>
					</button>
				</form>
				{errors}
			</main>
		);
	}
}

export default SearchBar;
