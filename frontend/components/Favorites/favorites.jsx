import React from 'react'; 

class Favorites extends React.Component {
	constructor(props){
		super(props);
		this.state = ({ favorites: Object.keys(localStorage) });
		this.favoriteRemover = this.favoriteRemover.bind(this);
	}

	updateFavorites(){
		this.setState({ favorites: Object.keys(localStorage)});
	}

	favoriteRemover(name){
		localStorage.removeItem(name);
		this.updateFavorites();
	}

	render () {

		return (
			<main className="favorites">
				<h1>Your Favorite Gems</h1>
				<div className="gems-container">
					{ Object.keys(localStorage).map(dep => (
						<ul key={dep}>
							<li>
								<img src={"../../assets/star-blue"} alt="Favorite" onClick={ () => this.favoriteRemover(dep) } />
							</li>
							<li>
								<a href={`https://rubygems.org/gems/${dep}`}>{dep}</a>
							</li>
						</ul>
					))}
				</div>
		</main>
		);	
	}
}

export default Favorites;