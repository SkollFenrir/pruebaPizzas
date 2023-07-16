import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Product = () => {
	const { id } = useParams();
	const { pizzas, addPizza } = useContext(MyContext);

	//Falta renderizar la tarjeta
	return (
		<>
			<Container className='Font '>
				<div>
					{pizzas
						.filter((n) => n.id === id)
						.map((e) => (
							<div>
								<Card
									className='shadow'
									style={{ width: '75vw', margin: '1em' }}>
									<Row>
										<Col>
											<Card.Img
												style={{ height: '31vw', width: '35vw' }}
												variant='left'
												src={e.img}
											/>
										</Col>
										<Col>
											<Card.Body>
												<Card.Title className='Capitalize'>
													<h4>{e.name}</h4>
												</Card.Title>
												<Card.Text>{e.desc}</Card.Text>
												<Card.Text>
													<h4>Ingredientes:</h4>
													<ul className='List'>
														{e.ingredients.map((ingredient, i) => {
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
												<div className='CardButtonP'>
													<h4>Precio:${e.price}</h4>
													<Button
														className=''
														variant='danger'
														onClick={() => addPizza(e.id)}>
														Añadir
													</Button>
												</div>
											</Card.Body>
										</Col>
									</Row>
								</Card>
							</div>
						))}
				</div>
			</Container>
		</>
	);
};

export default Product;
