import React, { useState } from 'react'
import "../../stylesheets/authentication.css"
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { UserLoginInitial, LoginSchema, UserLoginObject, useAppDispatch } from './../../utility';
import { handleUserLogin } from 'frontend/service/UserService';


const Login = () => {

   const navigate = useNavigate();
   const dispatch = useAppDispatch()

   const [type, setType] = useState("password");
   const [icon, setIcon] = useState("fa-solid fa-eye-slash");
 
   const show = () => {
     type === "password" ? setType("text") : setType("password");
     icon === "fa-solid fa-eye"
       ? setIcon("fa-solid fa-eye-slash")
       : setIcon("fa-solid fa-eye");
   };

  return (
    <div className="login__outer">
       <Formik
       initialValues={UserLoginInitial}
       validationSchema={LoginSchema}
       onSubmit={(values: UserLoginObject) => {
          const { email, password } = values
          dispatch(handleUserLogin(email, password, navigate))
       }}
       >
        <Form className="login">
           <h1 className="login__title">Log in</h1>
           <div className="login__fields">
              <p>Email</p>
              <Field type="email" placeholder="Enter email" name="email" /><br />
              <ErrorMessage name="email" render={msg => <div className='error__msg'>{msg}</div>} />
              <p>Password</p>
              <Field type={type} placeholder="Enter password" name="password" />
              <i onClick={show} className={icon}></i>
              <ErrorMessage name="password" render={msg => <div className='error__msg'>{msg}</div>} />
           </div>
              <button type='submit' className="login__button">Log in</button> 
           <p>Don't have an account ?<Link to="/signup"> SignUp</Link></p>
        </Form>
        </Formik>
     </div>
  )
}

export { Login }