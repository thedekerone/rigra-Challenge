import React, { useState, useEffect } from 'react';
import { ProductList } from '../components/ProductList';
import { Cart, Search, Products, Price, Shipping, Img, Button, Input } from '../styles';
import { Ticket } from '../components/Ticket';
import truckIcon from '../utils/icons/truck.svg';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from '@reach/router';

const GET_PRODUCTS = gql`
	{
		getProducts {
			id
			title
			quantity
			price
			img
		}
		getProductsInCart {
			id
			title
			quantity
			price
			img
		}
	}
`;

function App() {
	const [
		searchBy,
		setSearchBy
	] = useState('');

	const [
		searching,
		setSearching
	] = useState(false);

	const searchChange = async (e) => {
		e.target.value ? setSearching(true) : setSearching(false);
	};
	const { client, loading, error, data, refetch } = useQuery(GET_PRODUCTS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	//This arrays are declared to choose between products in cart and other products

	const items = data.getProducts.filter((e) => e.title.toLowerCase().includes(searchBy));
	const cart = data.getProductsInCart;
	console.log(cart);
	return (
		<div className='App'>
			<Cart>
				<Search>
					<Input
						type='text'
						value={searchBy}
						placeholder='Search Products'
						onChange={(e) => {
							setSearchBy(e.target.value);
							searchChange(e).then(() => {
								if (searchBy == '') {
									client.resetStore();
								}
							});
						}}
					/>
				</Search>

				{/* Separate this because there was a weir error */}

				<Products>
					{searching && (
						<ProductList
							setSearchBy={setSearchBy}
							data={items}
							setSearching={setSearching}
							client={client}
						/>
					)}
				</Products>

				<Products>
					{!searching && (
						<ProductList
							data={cart}
							setSearchBy={setSearchBy}
							setSearching={setSearching}
							client={client}
						/>
					)}
				</Products>

				<Price>
					<Shipping>
						<Img src={truckIcon} alt='truck' />
						<span>
							Buy now and get it by <strong>05/10/2020</strong>{' '}
						</span>
					</Shipping>
					<Ticket data={cart} />
					<Link to={cart.length === 0 ? '' : '/thanks'}>
						<Button active={cart.length === 0 ? false : true}>COMPLETE ORDER</Button>
					</Link>
				</Price>
			</Cart>
		</div>
	);
}

export default App;
