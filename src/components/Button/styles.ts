import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
	background: #f09830;
	height: 56px;
	border-radius: 0 15px 0 15px;
	border: 0;
	padding: 0 16px;
	color: #FAFAFA;
	font-weight: 500;
	margin-top: 16px;
	width: 100%;
	margin-bottom:  20px;
	transition: background-color 0.2s;
	&:hover {
		background: ${shade(0.2, '#f09830')}
	}
`;
