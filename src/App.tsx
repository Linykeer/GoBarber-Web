import React from 'react';
import GlobalStyle from './styles/global';
import SignUp from './pages/Signup';
import SignIn from './pages/Signin';
const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);
export default App;
