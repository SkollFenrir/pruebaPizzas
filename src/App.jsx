import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBAR from './componets/NavBAR';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './views/Product';
import Home from './views/Home';
import Shopping from './views/Shopping';
import NoFound from './views/NoFound';
import MyContext from './context/MyContext';

function App() {
	const [pizzas, setPizzas] = useState([]);
	const [total, setTotal] = useState(0);
	const [check, setCheck] = useState([]);
	const addPizza = (id) => {
		const index = check.findIndex((item) => item.id === id);
		const pizza = pizzas.find((item) => item.id === id);
		if (index < 0) {
			check.push({
				id: id,
				amount: 1,
				priceTotal: pizza.price,
				nombre: pizza.name,
				imagen: pizza.img,
			});
			setCheck([...check]);
		}

		if (index >= 0) {
			check[index].amount++;
			check[index].priceTotal = check[index].amount * pizza.price;
			setCheck([...check]);
		}
		totalValue();
	};
	const totalValue = () => {
		const total = check.reduce(
			(sum, value) =>
				typeof value.priceTotal == 'number' ? sum + value.priceTotal : sum,
			0
		);
		setTotal(total);
	};
	const deleteProduct = (id) => {
		const index = check.findIndex((item) => item.id === id);
		const pizza = pizzas.find((item) => item.id === id);

		if (index >= 0) {
			check[index].amount--;
			check[index].priceTotal = check[index].amount * pizza.price;
			setCheck([...check]);
		}

		if (check[index].amount < 0) {
			check[index].amount = 0;
			check[index].priceTotal = 0;
		}
		totalValue();
	};

	
	const getData = async () => {
		let res = await fetch('/pizzas.json');
		let data = await res.json();
		setPizzas([...data]);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className=''>
			<MyContext.Provider
				value={{
					pizzas,
					total,
					setTotal,
					check,
					setCheck,
					addPizza,
					deleteProduct,
				}}>
				<BrowserRouter>
					<NavBAR />
					<Routes>
						<Route
							path='/'
							element={<Home />}></Route>
						<Route
							path='/product/:id'
							element={<Product />}></Route>
						<Route
							path='/shopping'
							element={<Shopping />}></Route>
						<Route
							path='*'
							element={<NoFound />}></Route>
					</Routes>
				</BrowserRouter>
			</MyContext.Provider>
		</div>
	);
}

export default App;
