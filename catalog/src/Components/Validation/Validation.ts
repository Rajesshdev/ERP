import * as Yup from 'yup';

export const productschema = Yup.object().shape({
  Productname: Yup.string().required('Field is required'),
  Brand: Yup.string().required('Field is required'),
  Unit: Yup.string().required('Field is required'),
  Category: Yup.string().required('Field is required'),
  type:Yup.string(),
  SKU: Yup.string().required('Field is required'),
  Barcodetype: Yup.number()
    .positive('Must be posivete')
    .required('Field is required')
    .typeError('Must be an Number'),
  Managestock: Yup.boolean(),
  Alretquanity: Yup.string().required('Field is required'),
  productimage: Yup.string().required('Field is required'),
  description: Yup.string(),
});

export const pricelistschema= Yup.object().shape({
  Name:Yup.string().required("Field is required"),
  pricelisttype:Yup.string(),
  description:Yup.string(),
  type:Yup.string(),
  Percentage:Yup.number().typeError("Must be number").required("Field is required")
})
