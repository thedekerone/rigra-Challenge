import React, { useState, useEffect, useRef } from 'react';
import {
	Container,
	ImgContainer,
	Img,
	DetailContainer,
	Title,
	Price,
	AddItem,
	ItemQuantity,
	Sign,
	Quantity
} from './styles';
import plus from '../../utils/icons/plus.svg';
import minus from '../../utils/icons/minus.svg';

export function Product({
	img = 'http://laive.pe/wp-content/uploads/2015/11/Yogurt-Laive-Sin-Lactosa-Fresa-1kg.png',
	title = 'Yogurt Laive',
	price = '23.00'
}) {
	const addItem = useRef(null);
	const addQuantity = useRef(null);
	const [
		open,
		setOpen
	] = useState(false);
	useEffect(() => {
		window.addEventListener('click', (e) => {
			if (e.target === addItem.current || e.target === addQuantity.current || e.path[1] === addQuantity.current) {
				setOpen(true);
			} else {
				setOpen(false);
			}
		});
	}, []);
	const handleBlur = () => {};
	return (
		<Container open={open}>
			<ImgContainer>
				<Img src={img} alt={title} />
			</ImgContainer>
			<DetailContainer>
				<Title>{title}</Title>
				<Price>${price}</Price>
			</DetailContainer>
			<AddItem ref={addItem}>+</AddItem>
			{open && (
				<ItemQuantity ref={addQuantity}>
					<Sign src={minus} alt='' />
					<Quantity defaultValue={1} type='number' placeholder='100' />
					<Sign src={plus} alt='' />
				</ItemQuantity>
			)}
		</Container>
	);
}
