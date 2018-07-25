import React from "react";
import NavigationBar from '../components/user/navigation_bar';
import TopSearchBar from '../components/user/top_search_bar';
const LogInView = ({ onSubmit }) => {
  return (
    <div>

      <h1>Log in</h1>
      <form id="style" onSubmit={onSubmit}>
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
        <button bsStyle="primary" id="c" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LogInView;