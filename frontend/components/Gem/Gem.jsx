import React from 'react';
import GemDependency from './GemDependency';

class Gem extends React.Component {
	constructor(props){
		super(props);
		this.state = {favorite: this.isFavorite()};
		this.favoriteHandler = this.favoriteHandler.bind(this);
		this.isFavorite = this.isFavorite.bind(this);
	}

	isFavorite(name = this.props.name){
		return localStorage.getItem(name) ? true : false
	}

	componentWillReceiveProps(nextProps){
		if (this.props.name !== nextProps.name){
			this.setState({favorite: this.isFavorite(nextProps.name)});
		}
	}

	favoriteHandler(){
		if (this.state.favorite) {
			localStorage.removeItem(this.props.name);
			this.setState({favorite: false});
		} else {
			localStorage.setItem(this.props.name, true);
			this.setState({favorite: true});
		}
	}

	render(){
		let gem = null;

		let dependencies = <p>NONE</p>

		if (this.props.dependencies && this.props.dependencies.length) {
			dependencies = (
				this.props.dependencies.map(name => <GemDependency name={name} key={name}/>
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