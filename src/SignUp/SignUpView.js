import React from "react";

const SignUpView = ({ onSubmit }) => {
  return (
    <div>
      <h1 id="fish">Sign up</h1>
      <form id="style" classname="form-style-8" onSubmit={onSubmit}>
        <label>
          Email
          <input
            style={{ width: "100%" }}
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            style={{ width: "100%" }}
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button  id="crap2"classname="btn btn-primary" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpView;