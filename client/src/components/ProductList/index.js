import React from 'react';
import { Product } from '../Product';

export function ProductList() {
	const items = [
		{
			img   : 'http://laive.pe/wp-content/uploads/2015/11/Yogurt-Laive-Sin-Lactosa-Fresa-1kg.png',
			title : 'Yogurt Laive',
			price : '23.00'
		},
		{
			img   : 'http://laive.pe/wp-content/uploads/2015/11/Yogurt-Laive-Sin-Lactosa-Fresa-1kg.png',
			title : 'Yogurt Laive',
			price : '23.00'
		},
		{
			img   : 'http://laive.pe/wp-content/uploads/2015/11/Yogurt-Laive-Sin-Lactosa-Fresa-1kg.png',
			title : 'Yogurt Laive',
			price : '23.00'
		},
		{
			img   : 'http://laive.pe/wp-content/uploads/2015/11/Yogurt-Laive-Sin-Lactosa-Fresa-1kg.png',
			title : 'Yogurt Laive',
			price : '23.00'
		}
	];

	return (
		<ul>
			{items.map((e) => {
				return (
					<li>
						<Product img={e.img} title={e.title} price={e.price} />
					</li>
				);
			})}
		</ul>
	);
}
