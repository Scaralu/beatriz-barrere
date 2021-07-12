import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	width: 70%;
	height: 580px;
	max-width: 400px;
	min-width: 350px;
	margin-top: 20px;
	margin-bottom: 20px;
	border-radius: 15px;
	align-items: center;
	flex-direction: column;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	background-color: #FAFAFA;
	color: #6a6a6a;
`;

export const Profile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	min-width: 350px;
	height: 550px;
`;

export const PhotoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 10px;
	padding-top: 30px;
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
	font-size: 14px;
	height: 150px;
	padding: 30px;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	justify-self: flex-start;
`;
