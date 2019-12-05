import styled from 'styled-components';

export const List = styled.ul`
	padding: 16px;
	background: #fff;
`;
export const Item = styled.li`
	width: 100%;
	display: flex;
	margin-bottom: .5rem;
	height: auto;
	justify-content: space-between;
	align-items: center;
	& h3 {
		font-size: 1rem;
		font-weight: 400;
	}
`;

export const Total = styled(Item)`

    margin-top: .5rem;
    & h3,& span{
        font-weight: bold;
    }
    & span{
        color: red;
    }
`;
