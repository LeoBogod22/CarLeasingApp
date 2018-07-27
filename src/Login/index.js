import React, { Component } from "react";
import LogInView from "./LoginView";
import { withRouter } from "react-router";
import app from "../components/config/dev";
class LogInContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        alert("you have sucsesfully logged in!! ")
      this.props.history.push("/home");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <LogInView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(LogInContainer);