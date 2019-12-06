import React, { useState } from 'react';
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
	Quantity,
	Delete,
	QuantityManipulation
} from './styles';
import plus from '../../utils/icons/plus.svg';
import minus from '../../utils/icons/minus.svg';
import { useMutation } from '@apollo/react-hooks';
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

export function Product({ img, title, price, quantity, id, client, setSearchBy }) {
	// opens the modal to change quantity
	const [
		open,
		setOpen
	] = useState(false);

	// handles quantity input
	const [
		quantityValue,
		setQuantityValue
	] = useState(quantity);

	// mutate quantity after blur
	const [
		changeQuantity
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

			<QuantityManipulation>
				<AddItem
					onFocus={() => {
						setOpen(true);
					}}
					onBlur={() => {
						setOpen(false);

						changeQuantity({ variables: { productId: id, quantity: quantityValue } }).then(() => {
							setSearchBy('');
							client.resetStore();
						});
					}}>
					{/* if theres more than 0 items, it changes from a + sign to the quantity */}
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

				{quantity !== 0 &&
				!open && (
					<Delete
						onClick={() => {
							changeQuantity({ variables: { productId: id, quantity: 0 } }).then(() => {
								setSearchBy('');
								client.resetStore();
							});
						}}>
						delete
					</Delete>
				)}
			</QuantityManipulation>
		</Container>
	);
}
