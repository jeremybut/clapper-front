const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.kodiUsername) {
    errors.kodiUsername = 'Required';
  }
  if (!values.kodiPassword) {
    errors.kodiPassword = 'Required';
  }
  if (!values.kodiHost) {
    errors.kodiHost = 'Required';
  }
  if (!values.kodiPort) {
    errors.kodiPort = 'Required';
  }
  return errors;
};

export default validate;
