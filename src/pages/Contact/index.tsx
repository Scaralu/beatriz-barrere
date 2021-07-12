import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import {
	Container,
	FormWrapper,
	Wrapper,
	TextBox,
	ContactWrapper,
	SocialLinks,
	FaqWrapper,
	StyledImage,
	QuestionWrapper,
	AvatarImage,
	FaqContainer
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Textarea from '../../components/Textarea';

import { FiUser, FiMail, FiSend } from 'react-icons/fi';
import FAQ from '../../assets/undraw/mobile.svg';
import BeatrizBarrere from '../../assets/bea.jpeg'

const Contact: React.FC = () => {

	const formRef = useRef<FormHandles>(null);
	const { addToast } = useToast();
	const history = useHistory();
  const handleSubmit = useCallback(async (data: object) => {
		try {
			formRef.current?.setErrors({});

			const schema = Yup.object().shape({
				name: Yup.string().required('Nome obrigatório'),
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
			<Nav />
			<Container>
				<Wrapper>
					<TextBox>
						<h2>Converse comigo!</h2>
						<p>Tem alguma dúvida ou quer saber mais? <br />
						Me mande uma mensagem e eu responderei assim que possível.</p>
						<ContactWrapper>
							<SocialLinks
								href="https://api.whatsapp.com/send?phone=+5511999284848"
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
								href="https://goo.gl/maps/asMxoykXXXztTPiy9"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FiMapPin size={40} />
							</SocialLinks>
						</ContactWrapper>
						<AvatarImage src={BeatrizBarrere} alt="beatriz_psicologa" width={300} height={300}/>
					</TextBox>
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
							<Button type="submit">Enviar Mensagem</Button>
						</Form>
					</FormWrapper>
				</Wrapper>
				<FaqContainer>
					<h2>Perguntas Frequentes</h2>
					<FaqWrapper>
						<StyledImage src={FAQ} alt="faq"/>
						<QuestionWrapper>
							<h4>Por que fazer terapia?</h4>
							<p>
								<ul>
									<li>
										Não há julgamentos
									</li>
									<li>
										Para melhorar seus relacionamentos
									</li>
									<li>
										Para enfrentar medos e dificuldades
									</li>
									<li>
										Ressignificação de si mesmo
									</li>
									<li>
										Para melhorar seu autoconhecimento
									</li>
									<li>
										Para desenvolver novas habilidades e atitudes
									</li>
								</ul>
							</p>

							<h4>Se percebo várias dificuldades na minha vida, por onde devo começar a psicoterapia?</h4>
							<p>Sempre comece com aquilo que mais te incomoda no momento, mas não se preocupe pois vamos definir juntos quais serão as prioridades no decorrer das sessões! </p>

							<h4>Como sei que a psicoterapia está funcionando?</h4>
							<p>Não se esqueça de que toda a sua mudança tem seu tempo para acontecer, e você perceberá tais mudanças no decorrer das sessões! </p>

							<h4>Meu psicólogo pode se comunicar com outros profissionais da saúde que me ajudam?</h4>
							<p>
								Com toda certeza, desde que seja combinado antes entre ambos os profissionais.
								As diferentes perspectivas que o psiquiatra ou a nutricionista por exemplo, pensam e abordam, contribui para o desenvolvimento de seu tratamento, tornando-o mais ágil e efetivo.
							</p>
						</QuestionWrapper>
					</FaqWrapper>
				</FaqContainer>
			</Container>
			<Footer />
		</>
	)
}

export default Contact;
