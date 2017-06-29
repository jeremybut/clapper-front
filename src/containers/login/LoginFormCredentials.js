import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { ui, spacing, Button, AlignRight, lineHeight } from '../../ui';
import validate from './validate';
import renderField from './renderField';

const Form = styled.form`
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.p`
  line-height: ${lineHeight};
  margin: ${spacing(.5)} 0 ${spacing(2)} 0;
  opacity: .75;
  font-weight: 300;
`;

const LoginFormCredentials = ({ handleSubmit }) =>
  <Form onSubmit={handleSubmit}>
    <Title>Connexion</Title>
    <Subtitle>
      Merci de vérifier que votre téléphone est bien éteint avant la projection…
    </Subtitle>
    <Field
      name="email"
      type="text"
      component={renderField}
      label="Email :"
      placeholder="nom@email.com"
    />
    <Field
      name="password"
      type="password"
      component={renderField}
      label="Mot de passe :"
    />
    <AlignRight>
      <Button big type="submit" className="next">
        Suivant
      </Button>
    </AlignRight>
  </Form>
;

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(LoginFormCredentials);
