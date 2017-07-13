import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<main className="nav">
				<div className="logo">
					<img src={'../../../assets/teachable-logo.png'} alt="Teachable Logo" />
				</div>
				<ul className="nav-links">
					<li className={this.props.location.pathname === "/" ? "active" : ""}><Link to="/">Search</Link></li>
					<li className={this.props.location.pathname === "/favorites" ? "active" : ""}><Link to="/favorites">Favorites</Link></li>
				</ul>
			</main>
		);
	}
}

export default withRouter(Nav);