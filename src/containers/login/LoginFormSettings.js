import React from 'react';
import { Field, reduxForm } from 'redux-form';

import validate from './validate';
import renderField from './renderField';

const LoginFormSettings = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="kodiUsername"
        type="text"
        component={renderField}
        label="Kodi Username"
      />
      <Field
        name="kodiPassword"
        type="password"
        component={renderField}
        label="Kodi Password"
      />
      <Field
        name="kodiHost"
        type="text"
        component={renderField}
        label="Kodi Host"
      />
      <Field
        name="kodiPort"
        type="text"
        component={renderField}
        label="Kodi Port"
      />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(LoginFormSettings);
