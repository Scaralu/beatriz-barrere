import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 80px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: flex-start;
	max-width: 960px;
	width: 100%;
`;

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 300px;
	padding-bottom: 8px;
`;

export const StyledImage = styled.img`
	padding-bottom: 15px;
`;

export const SubTitle = styled.h2`
	color: #0490ad;
	padding-bottom: 8px;
	border-bottom: 1px solid #0490ad;
`;

export const StyledText = styled.div`
	text-align: center;
	padding: 15px 0 15px 0;
	font-size: 15px;
`
