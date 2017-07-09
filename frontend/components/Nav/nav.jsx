import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		// debugger
		return(
			<main className="nav">
				<div className="logo">
					<img src={'../../../assets/teachable-logo.png'} alt="teachable logo" />
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