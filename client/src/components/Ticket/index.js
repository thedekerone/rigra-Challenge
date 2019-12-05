import React from 'react';
import { List, Item, Total } from './styles';

export function Ticket() {
	return (
		<List>
			<Item>
				<h3>Products</h3>
				<span>$0.00</span>
			</Item>
			<Item>
				<h3>Shipping Cost</h3>
				<span>$0.00</span>
			</Item>
			<Item>
				<h3>Taxes</h3>
				<span>$0.00</span>
			</Item>
			<Total>
				<h3>Total</h3>
				<span>$0.00</span>
			</Total>
		</List>
	);
}
