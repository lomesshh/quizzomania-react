import * as Yup from "yup";

// User Signup
export const UserSignupInitial = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
}

export const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(3, 'Too Short!')
     .required('Required'),
   email: Yup.string()
     .email('Invalid email')
     .required('Required'),
   password: Yup.string()
     .min(6, 'At least 6 characters')
     .required('Required'),
   cpassword: Yup.string()
     .oneOf([Yup.ref('password')], 'Password not matched')
     .required('Required'),
 });

 
// User Login
 export const UserLoginInitial = {
  email: "",
  password: "",
}

export const quizInitialObject = {
  questions: [],
  quizzID: "",
  quizzName: "",
}