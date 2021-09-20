import React, { FC } from 'react';
import AccordionContainer from '../components/accordion/AccordionContainer';
import Feature from '../components/feature/Feature';
import Footer from '../components/footer/Footer';
import Header, { HeaderLogo } from '../components/header/Header';
import { HeaderFrame, HeaderButtonLink } from '../components/header/Header.styled';
import JumbotronContainer from '../components/jumbotron/JumbotronContainer';
import PATH from '../constants/path';
import logo from  '../../src/logo.svg';

interface Props {}

const Home: FC<Props> = () => {
  return (
    <>
      <Header>
        <HeaderFrame>
          <HeaderLogo to={PATH.home} src={logo} alt="Cine" />
          <HeaderButtonLink to={PATH.signIn}>Sign In</HeaderButtonLink>
        </HeaderFrame>
        <Feature />
      </Header>
      
      <JumbotronContainer />
      <AccordionContainer />
      <Footer />
    </>
  );
};

export default Home;
