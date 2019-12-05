import React from 'react';
import { SearchInput } from './components/SearchInput';
import { ProductList } from './components/ProductList';
import { Cart, Search, Products, Price, Shipping, Img, Button } from './styles';
import { Ticket } from './components/Ticket';
import truckIcon from './utils/icons/truck.svg';

function App() {
	return (
		<div className='App'>
			<Cart>
				<Search>
					<SearchInput />
				</Search>

				<Products>
					<ProductList />
				</Products>

				<Price>
					<Shipping>
						<Img src={truckIcon} alt='truck' />
						<span>
							Buy now and get it by <strong>05/10/2020</strong>{' '}
						</span>
					</Shipping>
					<Ticket />
					<Button>COMPLETE ORDER</Button>
				</Price>
			</Cart>
		</div>
	);
}

export default App;
