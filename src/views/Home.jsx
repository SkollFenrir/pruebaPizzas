import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { Col, Row } from 'react-bootstrap';
import CardP from '../componets/CardP';
import Banner from '../componets/Banner';

const Home = () => {
	const { pizzas } = useContext(MyContext);

	return (
		<div className='first'>
			<Banner />
			<div className='body'>
				{pizzas.map((p, i) => {
					return (
						<Col key={i}>
							<CardP pizza={p} />
						</Col>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
