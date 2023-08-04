import * as Yup from 'yup';

export const loginschema = Yup.object().shape({
  email: Yup.string().email().required('Field is required'),
  password: Yup.string().required('Field is required')
});