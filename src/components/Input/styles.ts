import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
	isFocused: boolean;
	isFilled: boolean;
	isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
	background: #FCFCFC;
	border-radius: 10px;
	border: 2px solid #000000;
	padding: 16px;
    width: 100%;

	display: flex;
	align-items: center;
    color: #3c3c3c;

	& + div {
			margin-top: 16px;
	}
	${props => (
		props.isErrored && css`
		border-color: #C53030;
	`)}
	${props => (
		props.isFocused && css`
		color: #f09830;
		border-color: #f09830;
	`)}
	${props => (
		props.isFilled && css`
		color: #f09830;
	`)}
	input {
		background: transparent;
		flex: 1;
		border: 0;
		color: #1C1E21;
		&::placeholder {
			color: #666360;
		}
	}

    svg {
        margin-right: 16px;
	}

`;

export const Error = styled(Tooltip)`
	height: 20px;
	margin-left: 16px;
	svg {
		margin: 0;
	}
	span {
		background: #C53030;
		color: #FFF;
		&::before {
			border-color: #C53030 transparent;
		}
	}
`;
