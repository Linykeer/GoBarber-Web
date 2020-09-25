import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock, FiPrinter } from 'react-icons/fi';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthContext';

import getValidationErrors from '../../utils/getValidationError';
import logo from '../../assets/logo.svg';
import { Container, Content, Background, AnimationContainer } from './styles';
import { FormHandles } from '@unform/core';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();


  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        const schema = Yup.object().shape({
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
        signIn({
          email: data.email,
          password: data.password
        });
        history.push('/dashboard')
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn, history],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
            <a href="forgot">Esqueci minha senha</a>
          </Form>
          <a href="signup" onClick={() => history.push('Signup')}>
            <FiLogIn />
          Criar Conta
        </a>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
