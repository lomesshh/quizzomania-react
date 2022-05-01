import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="login__outer">
        <form className="login signup">
           <h1 className="login__title">Sign Up</h1>
           <div className="login__fields">
              <p >Name</p>
              <input type="text" placeholder="Enter name" name="name" /><br />
              <p >Email</p>
              <input type="email" placeholder="Enter email" name="email" /><br />
              <p >Password</p>
              <input type="password" placeholder="Enter password" name="password" /><br />
              <p >Confirm Password</p>
              <input type="password" placeholder="Re-enter password" name="cpassword" />
           </div>
            <Link className="login__button signup__button" to="/login">Sign Up</Link>
           <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
     </div>
  )
}

export { Signup }