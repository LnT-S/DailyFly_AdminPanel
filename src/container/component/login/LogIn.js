import React from 'react'
import '../../assets/css/login.css'

export default function Login() {
  return (
      <div className="home">
        <div className="login-containers">
          <h1 className='login'>Log In</h1>
          <form action="">
            <div className="form-group1">
              <label for="username" className="text1">Username:</label>
              <input type="email" id="email" className="log" name="email" placeholder='Enter You Email'/>
            </div>
            <div className="form-group1">
              <label for="password" className="text1">Password:</label>
              <input type="password" id="password" className="log" name="password" placeholder='Enter Your password'/>
            </div>
            <button className="button" type="submit">Login</button>
          </form>
        </div>
      </div>
  )
}