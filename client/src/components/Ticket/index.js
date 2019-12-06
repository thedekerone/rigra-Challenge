import React from 'react';
import { List, Item, Total } from './styles';

export function Ticket({ data }) {
	let productsTotal = 0;
	data.map((e) => {
		productsTotal += e.price * e.quantity;
	});
	console.log(productsTotal);
	const shipping = productsTotal / 10;
	const taxes = productsTotal * 18 / 100;
	const total = productsTotal + taxes + shipping;
	return (
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
	);
}
