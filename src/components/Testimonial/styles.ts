import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	width: 70%;
	min-height: 400px;
	margin-top: 20px;
	margin-bottom: 20px;
	border-radius: 15px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	max-width: 500px;
	min-width: 300px;
	background-color: #FAFAFA;
	color: #1C1E21;
	& + & {
		margin-left: 10px;
	}
`;

export const Profile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PhotoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 10px;
`;

export const Photo = styled.img`
	border-radius: 50%;
	width: 150px;
	height: 150px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const NameTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	font-size: 20px;
	padding-top: 5px;
	padding-bottom: 5px;
`;

export const RatingContainer = styled.div`
	flex-direction: row;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TextContainer = styled.div`
	text-align: center;
	padding: 50px;
`;
