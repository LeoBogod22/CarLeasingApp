import React from "react";
import NavigationBar from '../components/user/navigation_bar';
import TopSearchBar from '../components/user/top_search_bar';
import { Redirect,Link } from 'react-router-dom'

const LogInView = ({ onSubmit }) => {
  return (
    <div className="container">
      <form id="style" className="width-500px" onSubmit={onSubmit}>
        <h3 className="text-center text-success">Login</h3>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" className="form-control"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" className="form-control"/>
        </div>
        <div className="text-center">
          <button id="btn-gradient" type="submit">Login</button>
        </div>
        <hr/>
        <p className="text-center mb-0">Dont have account yet? <Link to="/signup">Create Here</Link></p>
      </form>
    </div>
  );
};

export default LogInView;