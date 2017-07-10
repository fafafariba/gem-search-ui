import React from 'react';

class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = { query: "" };
		this.inputHandler = this.inputHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
		this.errors = this.props.errors;
	}
	componentWillReceiveProps(nextProps){
		this.errors = nextProps.errors;
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
		if (this.errors) this.props.clearErrors();
	}

	render(){

		let errors = <div></div>;
		if (this.errors) {
			errors = (
				<p className="errors">Oh no! Looks like that gem can’t be found.</p>
			);
		}
		return (
			<main className="search-bar">
				<form className="form" onSubmit={this.submitHandler}>
					<input type="text" placeholder="Search" onChange={this.inputHandler} value={this.state.query} id={ this.errors ? "errors" : ""}/>
					<button type="submit" className="magnify-btn">
						<img src={'../../../assets/magnifying-glass.png'} alt="Search" id={ this.errors ? "errors" : ""}/>
					</button>
				</form>
				{errors}
			</main>
		);
	}
}

export default SearchBar;
