import React from 'react';
import GemDependency from './GemDependency';

class Gem extends React.Component {
	constructor(props){
		super(props);
		this.state = {favorite: localStorage.getItem(name) ? true : false};
		this.favoriteHandler = this.favoriteHandler.bind(this);
	}

	favoriteHandler(){
		if (this.state.favorite) {
			localStorage.removeItem(name);
			this.setState({favorite: false});
		} else {
			localStorage.setItem(name, true);
			this.setState({favorite: true});
		}
	}

	render(){

		let gem = null;

		let dependencies = <p>NONE</p>

		if (this.props.dependencies && this.props.dependencies.length) {
			dependencies = (
				this.props.dependencies.map(name => <GemDependency name={name} />
			));
		}

		if (this.props.name) {			
			gem = (
				<div>
					<ul className="gem-name">
						<li>
							<a href={`https://rubygems.org/gems/${this.props.name}`}>{this.props.name}</a>
						</li> 
						<li>
							<img src={`../../assets/star-${this.state.favorite ? "blue" : "gray"}`} alt="Favorite" onClick={this.favoriteHandler} />
						</li>
					</ul>
					<div className="gem-info">
						<h5>information</h5>
						<p>{this.props.info.length > 1000 ? this.props.info.substring(0,996) + '...' : this.props.info}</p>
					</div>
					<div className="gem-dependencies-container">
						<h5>dependencies</h5>
						<div className="gem-dependencies">
							{ dependencies }
						</div>
					</div>
				</div>
			);
			
		}

		return (
			<main className="gem">
				{ gem }
			</main>
		);
	}

}

export default Gem;