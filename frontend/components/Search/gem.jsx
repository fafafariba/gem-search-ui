import React from 'react';

class Gem extends React.Component {
	constructor(props){
		super(props);
		this.state = { favorite: this.starred(this.props.name) ? true : false };
		this.favoriteHandler = this.favoriteHandler.bind(this);
	}

	componentWillReceiveProps(nextProps){
		this.state = { favorite: this.starred(nextProps.name) ? true : false };
	}

	starred(name){
		return localStorage.getItem(name) ? true : false;
	}

	updateCurrentGemState(){
		this.setState({ favorite: this.starred(this.props.name) ? true : false });
	}

	favoriteHandler(name){
		if (this.starred(name)) {
			localStorage.removeItem(name)
		} else {
			localStorage.setItem(name, true)
		}
		this.updateCurrentGemState();
	}

	render(){

		let gem = null;

		if (this.props.name) {			
			gem = (
				<div>
					<ul className="gem-name">
						<li>
							<a href={`https://rubygems.org/gems/${this.props.name}`}>{this.props.name}</a>
						</li> 
						<li>
							<img src={`../../assets/star-${this.state.favorite ? "blue" : "gray"}`} alt="Favorite" onClick={ () => this.favoriteHandler(this.props.name) } />
						</li>
					</ul>
					<div className="gem-info">
						<h5>information</h5>
						<p>{this.props.info}</p>
					</div>
					<div className="gem-dependencies-container">
						<h5>dependencies</h5>
						<div className="gem-dependencies">
							{this.props.dependencies.map(name => (
								<ul className="gem-name" key={name}>
									<li>
										<a href={`https://rubygems.org/gems/${name}`}>{name}</a>
									</li>
									<li>
										<img src={`../../assets/star-${this.starred(name) ? "blue" : "gray"}`} alt="Favorite" onClick={ () => this.favoriteHandler(name) } />
									</li>
								</ul>
							))}
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