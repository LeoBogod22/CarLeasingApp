import React from "react";
import { Redirect,Link } from 'react-router-dom'

const SignUpView = ({ onSubmit }) => {
  return (
    <div className="container">
      <form id="style" className="width-500px" onSubmit={onSubmit}>
        <h3 className="text-center text-success">Sign Up</h3>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" className="form-control"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" className="form-control"/>
        </div>
        <div className="text-center">
          <button id="btn-gradient" type="submit">Sign Up</button>
        </div>
        <hr/>
        <p className="text-center mb-0">Already have account? <Link to="/login">Login Here</Link></p>
      </form>
    </div>
  );
};

export default SignUpView;