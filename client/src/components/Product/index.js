import React from 'react';
import { Container, ImgContainer, Img, DetailContainer, Title, Price, AddItem } from './styles';
import addIcon from '../../utils/icons/add.svg';

export function Product({
	img = 'http://laive.pe/wp-content/uploads/2015/11/Yogurt-Laive-Sin-Lactosa-Fresa-1kg.png',
	title = 'Yogurt Laive',
	price = '23.00'
}) {
	return (
		<Container>
			<ImgContainer>
				<Img src={img} alt={title} />
			</ImgContainer>
			<DetailContainer>
				<Title>{title}</Title>
				<Price>${price}</Price>
			</DetailContainer>
			<AddItem />
		</Container>
	);
}
