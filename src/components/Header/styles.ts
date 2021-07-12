import styled from 'styled-components';
import { shade } from 'polished';

export const Section = styled.section`
	padding: 30px 30px 0px 30px;
	color: #fff;
	position: relative;
	background-image: linear-gradient(135deg,#0490ad,#acdbc5);
	overflow: hidden;
`;

export const Container = styled.div`
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap-reverse;
	margin-top: 10px;

	max-width: 960px;
`;

export const LeftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 500px;
	margin-bottom: 30px;

	justify-content: center;
	align-items: center;
`;

export const Text = styled.div`
	margin-bottom: 15px;
	text-align: justify;
`;

export const RightWrapper = styled.div`
	display: flex;
	min-width: 300px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 30px;
`;

export const AvatarImage = styled.img`
	border-radius: 50%;
	border: 5px solid #0490ad;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ContactWrapper = styled.div`
	display: flex;
	justify-content: center;
	max-width: 500px;
	flex-wrap: wrap;
	width: 100%;
`;

export const SocialLinks = styled.a`
	margin-top: 16px;
	margin-bottom: 20px;
	color: #FFF;
	text-decoration: none;

	& + a {
		padding-left: 15px
	}

	&:hover {
		color: ${shade(0.2, '#FFF')}
	}
`;
