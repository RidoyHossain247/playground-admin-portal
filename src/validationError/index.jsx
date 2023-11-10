import * as yup from "yup";

// Product Validation




const priceRegExp = /^[\d0-9]+\.?[0-9]{1,2}/gi;
// const phoneRrgExp = /(\+88||88)?-?01[1-9]\d{8}/g;

export const productValidation = yup.object().shape({
   title: yup.string().min(3).required(),
   category: yup.string().required("Select Category"),
   subcategory: yup.string().required('Select Subcategory'),
   sizes: yup.array().of(yup.string().min(1).required()).required(),
   colors: yup.array().of(yup.string().min(1).required()).required(),
   deliverable: yup.boolean().oneOf([true]),
   description: yup.string().min(10).required().max(50),
   price: yup.number().min(1).required().test('price', 'Maximuam length 8', (value) => {
      const split = value.toString().split('.')
      if (split[0]?.length > 8) {
         return false
      }
      return true;
   }).test('price', 'Please provide a valid price', (value) => {
      const split = value.toString().split('.')
      if (split[1]?.length > 2) {
         return false
      }
      return true;
   }),
   discount: yup.number().min(1).required().test('discount', 'Maximuam length 8', (value) => {
      const integer = value.toString().split('.')
      if (integer[0]?.length > 8) {
         return false
      }
      return true
   }).test('discount', 'Please provide a valid price', (value) => {
      const floating = value.toString().split('.');
      if (floating[1]?.length > 2) {
         return false
      }
      return true
   }),
   image: yup.mixed()
      .required('Image is required')
   // .test('fileSize', 'Image must be less than 1MB', (value) => {
   //   return value && value.size <= 1000000;
   // })
   // .test('fileType', 'Only JPG and PNG files are allowed', (value) => {
   //    return value && ['image/jpeg', 'image/png'].includes(value.type);
   // })
})

// change-password validation
export const ChangePasswordValidaton = yup.object({
   oldPassword: yup.string().required('Old password is required'),
   password: yup.string().required('New password is required'),
   confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match').required()
});

// cagegory validation
export const categoryValidation = yup.object().shape({
   name: yup.string()
      .min(3).max(25)
      .required('Name is required'),
   image: yup.mixed()
      .required('Image is required')
      // .test('fileSize', 'Image must be less than 1MB', (value) => {
      //   return value && value.size <= 1000000;
      // })
      .test('fileType', 'Only JPG and PNG files are allowed', (value) => {
         return value && ['image/jpeg', 'image/png'].includes(value.type);
      })
});

// subcategory validation
export const subcategoryValidation = yup.object().shape({
   name: yup.string()
      .min(3).max(25)
      .required('Name is required'),
   category: yup.string().required("Select Category"),
});

// color validation
export const colorValidation = yup.object().shape({
   name: yup.string()
      .min(3).max(10)
      .required('Name is required'),
});

// size validation
export const sizeValidation = yup.object().shape({
   name: yup.string()
      .min(3).max(10)
      .required('Name is required'),
});

// user validation
export const userValidation = yup.object({
   firstName: yup.string().min(2).required("Please enter your first name"),
   lastName: yup.string().min(2).required("Please enter your last name"),
   email: yup.string().email().required("Please enter your email"),
   address: yup.string().min(3).max(30).required(),
   password: yup.string().min(2).max(6).required("Please enter your password"),
   confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'confirm passwords does not match'),
   contact: yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('A phone number is required')
   // .matches(phoneRrgExp, 'provide a valid phone number')
   // .test('contact','provide a valid phone number', (value)=> {
   //    return 
   // })
});

// 3333.44
// regexp= /^[\d0-9]+\.?[0-9]{1,2}/gi;

// +88-01993935523
// regexp= /(\+88|88)?-?01[1-9]\d{8}/g;

// 