import React from 'react'
import "../../stylesheets/authentication.css"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login__outer">
        <form className="login">
           <h1 className="login__title">Log in</h1>
           <div className="login__fields">
              <p>Email</p>
              <input type="email" placeholder="Enter email" name="email" /><br />
              <p>Password</p>
              <input type="password" placeholder="Enter password" name="password" />
           </div>
           <Link className="login__button" to="/category">Log in</Link> 
           <p>Don't have an account ?<Link to="/signup"> SignUp</Link></p>
        </form>
     </div>
  )
}

export { Login }