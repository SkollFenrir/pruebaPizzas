import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';

const CardP = ({ pizza }) => {
	const { addPizza } = useContext(MyContext);
	const navigate = useNavigate();
	const navigatePizza = (id) => {
		navigate(`/product/${id}`);
	};
	return (
		<Card
			className='shadow'
			style={{ width: '20rem' }}>
			<Card.Img
				variant='top'
				src={pizza.img}
			/>
			<Card.Body className='Font '>
				<Card.Title className='Capitalize Center'>{pizza.name} </Card.Title>
				<Card.Text>
					Ingredientes:
					<ul className='List'>
						{pizza.ingredients.map((ingredient, i) => {
							return (
								<li
									className='Capitalize'
									key={i}>
									🍕 {ingredient}
								</li>
							);
						})}
					</ul>
				</Card.Text>
				<Card.Text className='Center'>
					<h3>$ {pizza.price}</h3>
				</Card.Text>
				<div className='CardButton'>
					<Button
						variant='primary'
						onClick={() => navigatePizza(pizza.id)}>
						Detalle
					</Button>
					<Button
						variant='danger'
						onClick={() => addPizza(pizza.id)}>
						Añadir
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default CardP;
