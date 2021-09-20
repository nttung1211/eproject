import React, { FC } from 'react';
import { useHistory } from 'react-router';
import PATH from '../../constants/path';
import {
  OptFormButton,
  OptFormFrame,
  OptFormGroup,
  OptFormInput,
  OptFormText
} from './OptForm.styled';

interface Props {}

const OptForm: FC<Props> = () => {
  const history = useHistory();
  return (
    <OptFormFrame>
      <OptFormGroup>
        <OptFormInput placeholder="Email address" />
        <OptFormButton onClick={() => { history.push(PATH.signUp) }}>
          Get started <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </OptFormButton>
      </OptFormGroup>
      {/* <OptFormBreak /> */}
      <OptFormText>
        Ready to watch? Enter your email to create or restart your membership.
      </OptFormText>
    </OptFormFrame>
  );
};

export default OptForm;
