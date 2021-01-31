import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import {SocialLinks,} from '../../components/Header/styles';

import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Nav';
import Footer from '../../components/Footer';
import { Container, FormWrapper, IntroductionWrapper, SocialWrapper, TextBox } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Textarea from '../../components/Textarea';

import { FiUser, FiMail, FiSend } from 'react-icons/fi';
import Email from '../../assets/undraw/contact.svg';


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
            <Header />

          <Container>
                <IntroductionWrapper>
								<div>
										<img src={Email} alt="Envie um email" width="400"/>
                </div>

									<SocialWrapper>
										<Button type="submit">11 111111111</Button>
										<Button type="submit">contato@beatrizbarrere.com</Button>
									</SocialWrapper>

                </IntroductionWrapper>


						<div>
								<TextBox>
												<h2>Converse comigo!</h2>
												<br />
												<h4>Tem alguma dúvida ou quer saber mais? <br />
												Me mande uma mensagem e eu responderei assim que possível.</h4>
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

										<SocialWrapper>
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
										</SocialWrapper>

								</FormWrapper>

						</div>

          </Container>

						<Footer />
        </>
	)
}

export default Contact;
