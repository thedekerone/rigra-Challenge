import React from 'react';
import emptyCart from '../../utils/icons/cart.svg';
import { CartImg } from './styles';

export function Empty() {
	return (
		<div>
			<CartImg src={emptyCart} alt='' />
		</div>
	);
}
