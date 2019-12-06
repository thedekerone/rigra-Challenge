import React from 'react';
import { Container, Anchor, Title, Text } from './styles';
import thanksImg from '../../utils/imgs/success.png';
import { Link } from '@reach/router';

export function Thanks() {
	return (
		<Container>
			<Title>Thank you</Title>
			<Text>
				Your order <strong>P0001</strong> has been registered
			</Text>
			<Link to='/'>
				<Anchor>Continue shopping</Anchor>
			</Link>
			<img src={thanksImg} alt='' />
		</Container>
	);
}
