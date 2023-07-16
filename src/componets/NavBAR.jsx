import React, { useContext } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import MyContext from '../context/MyContext';
import { NavLink } from 'react-router-dom';
const NavBAR = () => {
	const setActive = ({ isActive }) => (isActive ? 'active' : 'undefined');
	const { pizzas, check, total } = useContext(MyContext);
	return (
		<Navbar
			className='bg-body-tertiary'
			bg='dark'
			data-bs-theme='dark'>
			<Container>
				<Navbar.Brand>
					<NavLink
						className={setActive}
						to={'/'}>
						🍕 Pizzería Mamma mia!
					</NavLink>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className='justify-content-end'>
					<Navbar.Text>
						<NavLink
							className={setActive}
							to={'/shopping'}>
							🛒 Total : ${`${total}`}
						</NavLink>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBAR;
