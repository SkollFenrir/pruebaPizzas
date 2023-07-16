import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { Button, Container, Row } from 'react-bootstrap';

const Shopping = () => {
	const { check, pizzas, total, deleteProduct, addPizza } =
		useContext(MyContext);

	return (
		<>
			<Container className='Font '>
				<h3>Detalles del pedido:</h3>
				{check.map((p) => {
					const pizza = pizzas.find((pz) => pz.id === p.id);
					return (
						<div class='card rounded-3 mb-1 shadow'>
							<div class='card-body p-4'>
								<div class='row d-flex justify-content-between align-items-center'>
									<img
										src={pizza.img}
										class='col-md-2 col-lg-2 col-xl-2'
									/>

									<div class='col-md-3 col-lg-3 col-xl-3'>
										<p class='lead fw-normal mb-2 Capitalize'>{pizza.name}</p>
									</div>
									<div class='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
										<img class='col-md-2 col-lg-2 col-xl-2' />
									</div>
									<div class='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
										<h4> ${pizza.price * p.amount}</h4>
									</div>
									<div class='col-md-1 col-lg-1 col-xl-1 text-center  '>
										<Button
											className='shadow'
											variant='danger'
											onClick={() => deleteProduct(p.id)}>
											-
										</Button>
										<h5 class='mb-0'>{p.amount}</h5>
										<Button
											className='shadow'
											onClick={() => addPizza(p.id)}>
											+
										</Button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Container>
		</>
	);
};

export default Shopping;
