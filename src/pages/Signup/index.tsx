import React, { useCallback } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from '@unform/web';
import logoImg from '../../assets/sign-in-background.png';
import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
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
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Container>
      <Background />
      <Content>
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
        <a href="">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
