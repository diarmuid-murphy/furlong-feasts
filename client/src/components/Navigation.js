import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default () => {
	return (
		<Navbar bg='dark' variant='dark' expand='md'>
			<Navbar.Brand as={Link} to='/'>Furlong Feasts</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Link as={Link} to='/' >Home</Nav.Link>
					<Nav.Link as={Link} to='/about'>About</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};