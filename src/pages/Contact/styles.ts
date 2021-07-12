import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding: 30px;
	max-width: 1000px;
`

export const FormWrapper = styled.div`
	padding: 30px;
	border-radius: 20px 20px 20px 20px;
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) */
	margin: 10px 70px;
	max-height: 800px;
	align-items: space-around;
	background: #FEFEFE;
	min-width: 400px;
`;

export const SocialWrapper = styled.div`
	display: flex;
	flex-direction: flex-start;
	align-items: center;
	justify-content: space-around;
	padding: 3px;
	margin: 10px;
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
	color: #6a6a6a;
	text-decoration: none;

	& + a {
		padding-left: 15px
	}

	&:hover {
		color: ${shade(0.2, '#FEFEFE')}
	}
`;

export const TextBox = styled.div`
	color: #6a6a6a;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	max-width: 320px;
`;

export const FaqWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

export const StyledImage = styled.img`
	padding-bottom: 15px;
	height:	400px;

	@media(max-width: 935px) {
		height: 250px
	}
`;

export const QuestionWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	color: #FEFEFE;
	padding: 10px 30px;
	max-width: 450px;
	margin-top: 15px;

	p {
		margin-top: 10px;
		margin-bottom: 25px;
		max-width: 300px;
	}
`;

export const AvatarImage = styled.img`
	border-radius: 50%;
	border: 5px solid #FEFEFE;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const FaqContainer = styled.div`
	background-image: linear-gradient(135deg,#acdbc5,#0490ad);
	padding: 30px;
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	h2 {
		color: #FEFEFE;
		margin-bottom: 20px;
	}
`;
