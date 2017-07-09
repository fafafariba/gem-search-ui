import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
	<ul className="nav">
		<li><NavLink exact to="/" activeClassName="active">Search</NavLink></li>
		<li><NavLink to="/favorites" activeClassName="active">Favorites</NavLink></li>
	</ul>
);

export default Nav;