import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/sign-in-background.png'
import logo from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';
const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="GoBarber" />
      <form>
        <h1>Faça seu cadastro</h1>
        <Input name="name" placeholder="Nome" />
        <Input name="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
      </form>
      <a href="">
        <FiArrowLeft />
       Voltar para login
      </a>
    </Content>
  </Container>
);

export default SignUp;
