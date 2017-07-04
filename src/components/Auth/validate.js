const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Obligatoire';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Format email incorrect';
  }
  if (!values.password) {
    errors.password = 'Obligatoire';
  }
  if (!values.kodiUsername) {
    errors.kodiUsername = 'Obligatoire';
  }
  if (!values.kodiPassword) {
    errors.kodiPassword = 'Obligatoire';
  }
  if (!values.kodiHost) {
    errors.kodiHost = 'Obligatoire';
  }
  if (!values.kodiPort) {
    errors.kodiPort = 'Obligatoire';
  }
  return errors;
};

export default validate;
