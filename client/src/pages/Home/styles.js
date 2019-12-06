import styled from 'styled-components';

export const Cart = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 2rem auto;
	gap: 20px 70px;
	padding: 1rem;
	display: grid;
	grid-template: auto auto/ 1fr 1fr;
`;

export const Search = styled.div`
	grid-column: 1/2;
	grid-row: 1/2;
`;
export const Products = styled.div`
	grid-column: 1/2;
	grid-row: 2/3;
`;
export const Price = styled.div`
	grid-column: 2/3;
	grid-row: 2/3;
`;

export const Shipping = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
	align-items: center;
`;
export const Img = styled.img`margin-right: .75rem;`;

export const Input = styled.input`
	background: #ffffff;
	padding: 12px 16px;
	border: 1px solid #dddddd;
	box-sizing: border-box;
	width: 100%;
	border-radius: 4px;
`;
