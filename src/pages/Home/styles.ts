import styled from 'styled-components';

export const HeaderSection = styled.section`
	padding-top: 30px;
	color: #fff;
	position: relative;
	background-image: linear-gradient(135deg,#0490ad,#acdbc5);
	overflow: hidden;
`;

export const IntroductionContainer = styled.div`
	width: 100%;
	padding: 30px;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap-reverse;
	margin-top: 10px;

	max-width: 960px;
`;

export const LeftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 500px;
	width: 100%;
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
	max-width: 400px;
	min-width: 300px;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
`;

export const Image = styled.img`
	border-radius: 50%;
	border: 5px double #FFF;
`;

export const ContactWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-itens: center;
	max-width: 500px;
	flex-wrap: wrap;
	width: 100%;
`;

export const SocialLinks = styled.a`
	text-decoration: none;
	color: #FFF;

	margin-top: 16px;
	margin-bottom: 20px;

	& + a {
		padding-left: 15px
	}
`;

export const FaqSection = styled.div`
	display:flex;
	justify-content: center;
	align-items: center;
`;

export const FaqWrapper = styled.div`
	max-width: 960px;
	width: 100%;
`
