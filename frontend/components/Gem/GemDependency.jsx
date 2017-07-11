import React from 'react';

class GemDependency extends React.Component {
	constructor(props){
		super(props);
		this.state = ({ favorite: localStorage.getItem(this.props.name) ? true : false });
		this.favoriteHandler = this.favoriteHandler.bind(this);
		console.log("inside gem dependency");
	}

	favoriteHandler(){
		if (this.state.favorite){
			this.setState({ favorite: false });
			localStorage.removeItem(this.props.name);
		} else {
			this.setState({favorite: true});
			localStorage.setItem(this.props.name, true);
		}
	}

	render(){
	
		return(
			<div>
				<ul className="gem-name" key={this.props.name}>
					<li>
						<a href={`https://rubygems.org/gems/${this.props.name}`}>{this.props.name}</a>
					</li>
					<li>
						<img src={`../../assets/star-${this.state.favorite ? "blue" : "gray"}`} alt="Favorite" onClick={this.favoriteHandler} />
					</li>
				</ul>
			</div>
		);
	}
}

export default GemDependency;