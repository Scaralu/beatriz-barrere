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
	padding: 20px;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	justify-content: space-around;
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

export const QuestionSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px;
`;

export const QuestionWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: flex-start;
	max-width: 960px;
	width: 100%;
`;

export const QuestionItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 300px;
	padding-bottom: 8px;
`;

export const QuestionImage = styled.img`
	padding-bottom: 15px;
`;

export const SubTitle = styled.h2`
	color: #0490ad;
	padding-bottom: 8px;
	border-bottom: 1px solid #0490ad;
`;

export const QuestionText = styled.div`
	text-align: center;
	padding: 15px 0 15px 0;
	font-size: 15px;
`

export const RecomendationSection = styled.section`
	display: flex;
	width: 100%;
	background-image: linear-gradient(135deg,#0490ad,#acdbc5);
	overflow: hidden;
	position: relative;
	padding-top: 30px;
	padding-bottom: 30px;
	justify-content: center;
	align-items: center;
`;

export const RecomendedContainer = styled.div`
	width: 90%;
	padding: 20px;
	display: flex;
	flex-wrap: wrap-reverse;
	border-radius: 5px;
	background: #FFF;
`;

export const RecomendedItem = styled.div`
	flex: 1;
	margin 18px;
`;
