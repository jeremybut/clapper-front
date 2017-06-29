import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { Button, lineHeight, spacing } from '../../ui';
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

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${spacing()};
`;

const LoginFormSettings = ({
  handleSubmit,
  pristine,
  previousPage,
  submitting,
}) =>
  <Form onSubmit={handleSubmit}>
    <Title>Paramètres de Kodi</Title>
    <Subtitle>
      Connectez-vous à votre serveur Kodi pour que Clapper récupère votre médiathèque.
    </Subtitle>
    <Field
      name="kodiUsername"
      type="text"
      component={renderField}
      label="Nom d'utilisateur :"
    />
    <Field
      name="kodiPassword"
      type="password"
      component={renderField}
      label="Mot de passe :"
    />
    <Field
      name="kodiHost"
      type="text"
      component={renderField}
      label="Host :"
    />
    <Field
      name="kodiPort"
      type="text"
      component={renderField}
      label="Port :"
      placeholder="8080"
    />
    <Actions>
      <Button outline big type="button" className="previous" onClick={previousPage}>
        Annuler
      </Button>
      <Button big type="submit" disabled={pristine || submitting}>
        Valider
      </Button>
    </Actions>
  </Form>;

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(LoginFormSettings);
