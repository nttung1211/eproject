import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import logo from '../../src/logo.svg';
import Footer from '../components/footer/Footer';
import Form, { TextField } from '../components/form/Form';
import {
  FormLink,
  FormButton,
  FormText,
  FormTextSmall,
  FormTitle,
} from '../components/form/Form.styled';
import Header, { HeaderLogo } from '../components/header/Header';
import { HeaderButtonLink, HeaderFrame } from '../components/header/Header.styled';
import PATH from '../constants/path';
import authService from '../services/authService';

interface Props {}

interface SignUpFormData {
  username: string;
  password: string;
  email: string;
}

const SignUp: FC<Props> = () => {
  const history = useHistory();

  const initialValues = {
    username: '',
    password: '',
    email: '',
  };

  const schema = yup.object({
    username: yup.string().required().max(20).min(6),
    password: yup.string().required().max(20).min(6),
    email: yup.string().required().email().max(50),
  });

  const onSubmit = async (values: SignUpFormData) => {
    await authService.signUp(values);
    history.push(PATH.signIn);
    toast.success('Successfully! You can now sign in');
  };

  return (
    <>
      <Header>
        <HeaderFrame>
          <HeaderLogo to={PATH.home} src={logo} alt="logo" />
          <HeaderButtonLink to={PATH.signIn}>Sign In</HeaderButtonLink>
        </HeaderFrame>

        <Form initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
          <FormTitle>Sign Up</FormTitle>
          <TextField placeholder="Username" name="username" />
          <TextField type="password" placeholder="Password" name="password" />
          <TextField placeholder="Email" name="email" />
          <FormButton type="submit" data-testid="sign-in">
            Sign Up
          </FormButton>
          <FormText>
            Already a user? <FormLink to={PATH.signIn}>Sign in now.</FormLink>
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

export default SignUp;
