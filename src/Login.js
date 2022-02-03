// MyComponent.js
import React, { Component } from "react";
import svg from "./svg/login-header.svg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div id="app-wrapper">
        <div id="form-wrapper">
          <div id="svg-name-container">
            <img src={svg} alt="  " />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
