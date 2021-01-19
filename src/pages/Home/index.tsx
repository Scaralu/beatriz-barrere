<<<<<<< Updated upstream
=======
import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
>>>>>>> Stashed changes

import Header from '../../components/Header';
import Button from '../../components/Button';
import { IntroductionContainer, HeaderSection, LeftWrapper, RightWrapper, Image, Text, ContactWrapper, SocialLinks, FaqSection } from './styles';

import test from '../../assets/bea.jpeg';

<<<<<<< Updated upstream
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi"

import FAQ from '../../assets/undraw/faq.svg';

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<HeaderSection>
				<IntroductionContainer>
					<LeftWrapper>
						<Text>
							<h1><i>Frase louca e filosófica que remete ao teu trampo</i></h1>
							<br/><hr/><br/>
							<strong>
								CRP: 06/150187
							</strong>
							<br/><br/>
							<p>
								<strong>Sou Beatriz Barrere, uma psicóloga comportamental</strong> com diversos pacientes satisfeitos.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere, leo in eleifend vestibulum, justo l
								igula placerat lacus, quis sollicitudin mi nunc id orci. Nullam eu lacinia nunc, in venenatis elit. Aenea
								n at leo velit.
							</p>
						</Text>
						<Button>
							<strong>Entre em contato!</strong>
						</Button>
						<ContactWrapper>
							<SocialLinks
									href="https://api.whatsapp.com/send?phone=15551234567"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaWhatsapp size={40} />
								</SocialLinks>
								<SocialLinks
									href="https://www.instagram.com/psi.beatrizbarrere"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaInstagram size={40} />
								</SocialLinks>
								<SocialLinks
									href="https://www.instagram.com/psi.beatrizbarrere"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FiMapPin size={40} />
								</SocialLinks>
							</ContactWrapper>
					</LeftWrapper>
					<RightWrapper>
						<Image src={test} alt="undraw" width={300} height={300}/>
					</RightWrapper>
				</IntroductionContainer>
			</HeaderSection>
			<FaqSection>
				<img src={FAQ} alt="faq" width="250"/>
				Para quem?
				TODOS podem fazer psicoterapia!  “Psicólogo é coisa de louco” era dito por muitos, hoje em dia esse conceito mudou. A psicoterapia é procurada em diversas situações, seja por encaminhamento médico ou procura direta, caso a pessoa esteja enfrentando um momento em que não consiga caminhar sozinha(o).


				Como?
				As sessões têm frequência semanal, quinzenal ou até mensal (a combinar no primeiro atendimento, dependendo do caso), com duração de 50 minutos. 
				A modalidade de atendimento pode ser presencial no consultório localizado em São Caetano do Sul ou online (dependendo da localização geográfica do paciente). O valor das sessões será combinado no primeiro encontro.
			</FaqSection>
=======
const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
	const { addToast } = useToast();
	const history = useHistory();

  const handleSubmit = useCallback(async (data: object) => {
		try {
			formRef.current?.setErrors({});
			const schema = Yup.object().shape({
				name: Yup.string()
					.required('Nome obrigatório'),
				email: Yup.string()
					.required('E-mail obrigatório')
					.email('Digite um e-mail válido'),
				message: Yup.string()
					.required('Mensagem obrigatória'),
			});
				await schema.validate(data, {
					abortEarly: false
				});

				await api.post('/email', data);
				history.push('/')
				addToast({
					type: 'success',
					title: 'Mensagem enviada!',
					description: 'Sua mensagem foi enviada e será respondida o quanto antes.'
				})

			} catch(err) {
				if (err instanceof Yup.ValidationError) {
					const validationErrors = getValidationErrors(err);
					formRef.current?.setErrors(validationErrors);

					return;
				}
				addToast({
					type: 'error',
					title: 'Erro no envio da mensagem',
					description: 'Ocorreu um erro ao enviar sua mensagem, tente novamente.'
				});
			}
    }, [addToast, history]);

	return (
		<>
			<Header />

			<Container>
				<IntroductionWrapper>
					<h1>Converse comigo!</h1>
					<p>Tem alguma dúvida ou quer saber mais? <br />
						Me mande uma mensagem e eu responderei assim que possível.</p>
					<div>
						<img src={Email} alt="Envie um email" width="250"/>
					</div>
				</IntroductionWrapper>
				<FormWrapper>
					<Form ref={formRef} onSubmit={handleSubmit}>
						<Input name="name" icon={FiUser} placeholder="Nome"/>
						<Input name="email" icon={FiMail} placeholder="E-mail"/>
						<Textarea
								rows={10}			
								name="message"
								icon={FiSend}
								placeholder="Sua mensagem..."
						/>
						<Button type="submit">Cadastrar</Button>
					</Form>
				</FormWrapper>
			</Container>
>>>>>>> Stashed changes
		</>
	)
}

export default Home;
