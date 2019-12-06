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
export const Button = styled.div`
	border: 1px solid #ddd;
	background: ${(props) => (props.active ? '#FF8000' : '#f7f7f9')};
	width: 100%;
	border-radius: 4px;
	padding: 0.8125rem;
	margin-top: 1rem;
	text-align: center;
	color: ${(props) => (props.active ? 'white' : '#c1c1c1')};
`;
