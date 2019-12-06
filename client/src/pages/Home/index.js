import React, { useState } from 'react';
import { ProductList } from '../../components/ProductList';
import { Cart, Search, Products, Price, Shipping, Img, Input } from './styles';
import { Ticket } from '../../components/Ticket';
import truckIcon from '../../utils/icons/truck.svg';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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

export function Home() {
	// Get and set search input
	const [
		searchBy,
		setSearchBy
	] = useState('');

	// Graphql Queries
	const { client, loading, error, data } = useQuery(GET_PRODUCTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	//This arrays are declared to choose between products in cart and other products

	const items = data.getProducts.filter((e) => e.title.toLowerCase().includes(searchBy));
	const cart = data.getProductsInCart;

	// handling date

	const getShippingDate = () => {
		var today = new Date();

		// check if is friday saturday or sunday and calculates the date
		if (today.getDay() > 4) {
			today.setDate(8 - today.getDay() + today.getDate());

			return today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
		} else {
			today.setDate(today.getDate() + 1);

			return today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
		}
	};

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
							if (e.target.value.length === 0) client.resetStore();
						}}
					/>
				</Search>

				{/* Separate this because there was a weir error */}

				<Products>
					{searchBy.length !== 0 ? (
						<ProductList setSearchBy={setSearchBy} searchBy={searchBy} data={items} client={client} />
					) : (
						<ProductList data={cart} searchBy={searchBy} setSearchBy={setSearchBy} client={client} />
					)}
				</Products>

				<Price>
					<Shipping>
						<Img src={truckIcon} alt='truck' />
						<span>
							Buy now and get it by <strong>{getShippingDate()}</strong>{' '}
						</span>
					</Shipping>
					<Ticket data={cart} />
				</Price>
			</Cart>
		</div>
	);
}
