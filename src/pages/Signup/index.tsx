import React, { useCallback } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from '@unform/web';

import api from '../../services/api';
import logoImg from '../../assets/sign-in-background.png';
import logo from '../../assets/logo.svg';
import { Container, Content, Background, AnimationContainer } from './styles';
import { StringifyOptions } from 'querystring';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const history = useHistory();
  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatorio'),
        email: Yup.string()
          .required('Email obrigatorio')
          .email('Digite um e-mail valido'),
        password: Yup.string()
          .required('Senha Obrigatoria')
          .min(6, 'No minimo 6 digitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users', data);

    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <a href="" onClick={() => history.push('/')}>
            <FiArrowLeft />
          Voltar para login
        </a>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
