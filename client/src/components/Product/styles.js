import styled from 'styled-components';

export const Container = styled.div`
	padding: 16px;
	width: 100%;
	background: #fff;
	border-bottom: 1px solid #ddd;
	display: flex;
	align-items: center;
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

export const AddItem = styled.div`
	background: #ff2d55;
	flex-shrink: 0;
	border-radius: 100%;
	width: 50px;
	height: 50px;
	transition-property: border-radius, width;
	transition-duration: .4s, .4s;
	cursor: pointer;
	transition-delay: .3s, 0s;

	&:hover {
		transition-delay: 0s, .3s;
		border-radius: 3px;
		width: 200px;
	}
`;
