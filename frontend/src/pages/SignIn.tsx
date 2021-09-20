import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import logo from '../../src/logo.svg';
import Footer from '../components/footer/Footer';
import Form, { TextField } from '../components/form/Form';
import {
  FormButton,
  FormLink,
  FormText,
  FormTextSmall,
  FormTitle,
} from '../components/form/Form.styled';
import Header, { HeaderLogo } from '../components/header/Header';
import { HeaderButtonLink, HeaderFrame } from '../components/header/Header.styled';
import PATH from '../constants/path';
import { useAppContext } from '../context/AppContext';
import authService from '../services/authService';

interface Props {}

interface SignInFormData {
  username: string;
  password: string;
}

const SignIn: FC<Props> = () => {
  const history = useHistory();
  const { setCurrentUser } = useAppContext();

  const initialValues = {
    username: '',
    password: '',
  };

  const schema = yup.object({
    username: yup.string().required().max(20).min(6),
    password: yup.string().required(),
  });

  const onSubmit = async (values: SignInFormData) => {
    const user = await authService.signIn(values.username, values.password);
    setCurrentUser(user);
    history.push(PATH.browse);
  };

  return (
    <>
      <Header>
        <HeaderFrame>
          <HeaderLogo to={PATH.home} src={logo} alt="logo" />
          <HeaderButtonLink to={PATH.signUp}>Sign Up</HeaderButtonLink>
        </HeaderFrame>

        <Form initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
          <FormTitle>Sign In</FormTitle>
          <TextField placeholder="Username" name="username" />
          <TextField type="password" autoComplete="off" placeholder="Password" name="password" />
          <FormButton type="submit" data-testid="sign-in">
            Sign In
          </FormButton>
          <FormText>
            New to Cine? <FormLink to={PATH.signUp}>Sign up now.</FormLink>
          </FormText>
          <FormTextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </FormTextSmall>
        </Form>
      </Header>
      <Footer />
    </>
  );
};

export default SignIn;
