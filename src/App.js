import React, { Component } from "react";
import "./style.css";
import svg from "./svg/login-header.svg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: false,
      passwordError: false
    };
  }

  signIn = () => {
    const { email, password } = this.state;
    if (!email || !email.includes("@")) {
      this.setState({ emailError: true });
    } else if (!password || password.length < 6) {
      this.setState({ passwordError: true });
    } else {
      this.setState({ emailError: false, passwordError: false });
      alert("email: " + email + "password: " + password);
    }
  };
  render() {
    let url =
      "https://backgroundcheckall.com/wp-content/uploads/2017/12/google-logo-transparent-background-4.png";
    return (
      <div className="root-entry">
        <div className="z-depth app-main-wrapper">
          <div id="svg-name-container">
            <img src={svg} alt="  " id="svg" />
            <center id="title-container">
              <p>Campusecure</p>
            </center>
          </div>

          <div id="form-fields-container">
            <div className="input-item-container">
              <input
                className={this.state.emailError ? "error" : ""}
                placeholder="Enter Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="input-item-container">
              <input
                className={this.state.passwordError ? "error" : ""}
                type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>

            <div id="forget-pass">
              <a href="#">Forgot password ?</a>
            </div>
          </div>

          <div id="btns">
            <div className="email-login">
              <button className="z-depth" onClick={this.signIn}>
                {" "}
                Login{" "}
              </button>
            </div>

            <div className="google-login ">
              <button className="z-depth">
                <img src={url} alt=" " />
                <span> Login with Google</span>
              </button>
            </div>
          </div>

          <div id="forget-pass">
            <a href="#">
              {" "}
              Don't have an account ? <span>Register Now </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
