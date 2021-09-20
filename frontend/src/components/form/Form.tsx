import { Field, FieldProps, Formik, getIn, Form as FormWrapper } from 'formik';
import React, { FC } from 'react';
import { FormContainer, FormErrorMessage, FormInput } from './Form.styled';

interface Props {
  initialValues: any;
  validationSchema: any;
  onSubmit: (values: any) => void;
}

const Form: FC<Props> = ({ children, initialValues, validationSchema, onSubmit }) => {
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormWrapper noValidate className="form">
          {children}
        </FormWrapper>
      </Formik>
    </FormContainer>
  );
};

export default Form;

interface TextFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  disable?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
}

export const TextField: FC<TextFieldProps> = (props) => {
  return <Field {...props} component={InputWrapper} />;
};

const InputWrapper: FC<FieldProps> = ({ field, form, meta, children, ...props }) => {
  const helperText: string = getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <>
      <FormInput required autoComplete={field.name} id={field.name} {...field} {...props} />
      <FormErrorMessage>{helperText}</FormErrorMessage>
    </>
  );
};
