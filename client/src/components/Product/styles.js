import styled from 'styled-components';

export const Container = styled.div`
	padding: 16px;
	width: 100%;
	background: #fff;
	border-bottom: 1px solid #ddd;
	position: relative;
	display: flex;
	align-items: center;
	& > div {
		opacity: ${(props) => (props.open ? ' .2;' : '1')};
	}
`;

export const ImgContainer = styled.div`
	width: 5rem;
	flex-shrink: 0;
	height: 5rem;
	text-align: center;
`;

export const Img = styled.img`height: 100%;`;

export const DetailContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-self: stretch;
	width: 100%;
	flex-direction: column;
	padding: .4rem;
`;

export const Title = styled.h1`
	font-size: 1rem;
	font-weight: 400;
	height: auto;
`;

export const Price = styled.span`
	font-weight: bold;
	font-size: 1.2rem;
	color: #ff2d55;
`;

export const AddItem = styled.button`
	background: #ff8000;
	flex-shrink: 0;
	border-radius: 100%;
	border: 0;
	width: 50px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	height: 50px;
	cursor: pointer;
`;
export const ItemQuantity = styled.div`
	background: #ff8000;
	height: 52px;
	opacity: 1 !important;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 4px;
	right: 16px;

	font-size: 1rem;
	width: 180px;
`;
export const Sign = styled.img`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 0 18px;
	cursor: pointer;
	font-size: 2.5rem;
	width: 65px;
	&:hover {
		background: rgba(0, 0, 0, .2);
	}
`;

export const Quantity = styled.input`
	width: 100%;
	background: transparent;
	border: none;
	color: white;
	-webkit-appearance: none;
	height: 100%;
	text-align: center;
`;
