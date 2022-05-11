import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  UserSignupObject,
  SignupSchema,
  UserSignupInitial,
  useAppDispatch,
} from "./../../utility";
import { handleUserSignup } from "frontend/service/UserService";

const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
        initialValues={UserSignupInitial}
        validationSchema={SignupSchema}
        onSubmit={(values: UserSignupObject) => {
          const { name, email, password } = values;
          dispatch(handleUserSignup(name, email, password, navigate));
        }}
      >
        <Form className="login signup">
          <h1 className="login__title">Sign Up</h1>
          <div className="login__fields">
            <p>Name</p>
            <Field type="text" placeholder="Enter name" name="name" />
            <br />
            <ErrorMessage
              name="name"
              render={(msg) => <div className="error__msg">{msg}</div>}
            />
            <p>Email</p>
            <Field type="email" placeholder="Enter email" name="email" />
            <br />
            <ErrorMessage
              name="email"
              render={(msg) => <div className="error__msg">{msg}</div>}
            />
            <p>Password</p>
            <Field type={type} placeholder="Enter password" name="password" />
            <i onClick={show} className={icon}></i>
            <br />
            <ErrorMessage
              name="password"
              render={(msg) => <div className="error__msg">{msg}</div>}
            />
            <p>Confirm Password</p>
            <Field
              type="password"
              placeholder="Re-enter password"
              name="cpassword"
            />
            <ErrorMessage
              name="cpassword"
              render={(msg) => <div className="error__msg">{msg}</div>}
            />
          </div>
          <button className="login__button signup__button" type="submit">
            Sign Up
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export { Signup };
