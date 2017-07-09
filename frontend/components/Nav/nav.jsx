import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
	<main className="nav">
		<div className="logo">
			<img src={'../../../assets/teachable-logo.png'} alt="teachable logo" />
		</div>
		<ul className="nav-links">
			<li><NavLink exact to="/" activeClassName="active">Search</NavLink></li>
			<li><NavLink to="/favorites" activeClassName="active">Favorites</NavLink></li>
		</ul>
	</main>
);

export default Nav;