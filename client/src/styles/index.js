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

export const Button = styled.a`
	border: 1px solid #ddd;
	display: block;
	text-decoration: none !important;

	background: ${(props) => (props.active ? '#FF8000' : '#f7f7f9')};
	width: 100%;
	border-radius: 4px;
	padding: 0.8125rem;
	margin-top: 1rem;
	text-align: center;
	color: ${(props) => (props.active ? 'white' : '#c1c1c1')};
`;

export const Input = styled.input`
	background: #ffffff;
	padding: 12px 16px;
	border: 1px solid #dddddd;
	box-sizing: border-box;
	width: 100%;
	border-radius: 4px;
`;
