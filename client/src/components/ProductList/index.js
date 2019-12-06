import React from 'react';
import { Product } from '../Product';
import { Empty } from '../Empty';
import { Container, ContainerCart, Title, Text, List } from './styles';

export function ProductList({ data, client, setSearchBy, searchBy }) {
	if (data.length === 0 && searchBy.length === 0) {
		return (
			<ContainerCart>
				<Empty />
				<Title>Your cart is empty</Title>
				<Text>Seems like you haven't chosen what to buy</Text>
			</ContainerCart>
		);
	}
	return (
		<Container>
			{data.map((e) => {
				return (
					<List key={e.id}>
						<Product
							quantity={e.quantity}
							client={client}
							img={e.img}
							setSearchBy={setSearchBy}
							title={e.title}
							id={e.id}
							price={e.price}
						/>
					</List>
				);
			})}
		</Container>
	);
}
