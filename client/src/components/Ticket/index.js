import React from 'react';
import { Link } from '@reach/router';
import { List, Item, Total, Button } from './styles';

export function Ticket({ data }) {
	let productsTotal = 0;
	data.map((e) => {
		return (productsTotal += e.price * e.quantity);
	});
	const shipping = productsTotal / 10;
	const taxes = productsTotal * 18 / 100;
	const total = productsTotal + taxes + shipping;

	return (
		<React.Fragment>
			<List>
				<Item>
					<h3>Products</h3>
					<span>${productsTotal.toFixed(2)}</span>
				</Item>
				<Item>
					<h3>Shipping Cost</h3>
					<span>${shipping.toFixed(2)}</span>
				</Item>
				<Item>
					<h3>Taxes</h3>
					<span>${taxes.toFixed(2)}</span>
				</Item>
				<Total>
					<h3>Total</h3>
					<span>${total.toFixed(2)}</span>
				</Total>
			</List>
			<Link to={data.length === 0 || total < 50 ? '' : '/thanks'}>
				<Button active={data.length === 0 || total < 50 ? false : true}>COMPLETE ORDER</Button>
			</Link>
		</React.Fragment>
	);
}
