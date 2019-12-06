import styled from 'styled-components';

export const Container = styled.ul`
	height: 600px;
	background: white;
	display: flex;
	flex-direction: column;
	width: 100%;
	border-radius: 4px;
	align-items: center;
`;
export const ContainerCart = styled(Container)`
    justify-content: center;

`;
export const Title = styled.h1`
	color: #333333;
	margin-top: 16px;
	font-size: 1.4rem;
`;
export const Text = styled.span`
	color: #333333;
	margin-top: 8px;
	font-size: 1rem;
`;
export const List = styled.li`width: 100%;`;
