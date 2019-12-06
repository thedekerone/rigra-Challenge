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
import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CHANGE_QUANTITY = gql`
	mutation($productId: Int!, $quantity: Int!) {
		changeQuantity(productId: $productId, quantity: $quantity) {
			id
			quantity
			title
		}
	}
`;

export function Product({ img, title, price, quantity, id, client, setSearchBy, setSearching }) {
	const [
		open,
		setOpen
	] = useState(false);

	const [
		quantityValue,
		setQuantityValue
	] = useState(quantity);

	const [
		changeQuantity,
		{ loading, data }
	] = useMutation(CHANGE_QUANTITY);

	return (
		<Container open={open}>
			<ImgContainer>
				<Img src={img} alt={title} />
			</ImgContainer>
			<DetailContainer>
				<Title>{title}</Title>
				<Price>${price.toFixed(2)}</Price>
			</DetailContainer>
			<AddItem
				onFocus={() => {
					setOpen(true);
				}}
				onBlur={() => {
					console.log(typeof client.resetStore);
					setOpen(false);

					changeQuantity({ variables: { productId: id, quantity: quantityValue } }).then(() => {
						setSearchBy('');
						setSearching(false);
						client.resetStore();
					});
				}}>
				{!open ? quantityValue === 0 ? (
					'+'
				) : (
					quantityValue
				) : (
					<ItemQuantity>
						<Sign
							src={minus}
							alt=''
							onClick={() => {
								if (quantityValue > 0) {
									setQuantityValue(quantityValue - 1);
								}
							}}
						/>

						<Quantity
							value={quantityValue}
							onChange={(e) => {
								setQuantityValue(e.target.value);
							}}
							minValue='0'
							type='number'
							placeholder='100'
						/>
						<Sign
							src={plus}
							alt=''
							onClick={() => {
								setQuantityValue(quantityValue + 1);
							}}
						/>
					</ItemQuantity>
				)}
			</AddItem>
		</Container>
	);
}
