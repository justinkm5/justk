import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "whatwg-fetch";
import { Redirect } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: "",
      regUpError: "",
      regName: "",
      regEmail: "",
      regPassword: ""
    };

    this.inputChangeRegEmail = this.inputChangeRegEmail.bind(this);
    this.inputChangeRegName = this.inputChangeRegName.bind(this);
    this.inputChangeRegPassword = this.inputChangeRegPassword.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  inputChangeRegEmail(event) {
    this.setState({
      regEmail: event.target.value
    });
  }

  inputChangeRegName(event) {
    this.setState({
      regName: event.target.value
    });
  }

  inputChangeRegPassword(event) {
    this.setState({
      regPassword: event.target.value
    });
  }

  onSignIn(e) {
    e.preventDefault();

    // store our user and password for this onSignIn button
    const { regName, regEmail, regPassword } = this.state;
    console.log(regPassword, "does this even destructure?");

    this.setState({
      isLoading: true
    });

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: regName,
        email: regEmail,
        password: regPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        if (json) {
          this.setState({
            isLoading: false,
            regName: "",
            regUpEmail: "",
            regUpPassword: ""
          });
          console.log("register success");
          return this.props.history.push("/");
        } else {
          console.log("failed");
          this.setState({
            regUpError: json.message,
            isLoading: false
          });
        }
      });
  }

  render() {
    const {
      isLoading,
      regUpError,
      regEmail,
      regPassword,
      regName
    } = this.state;

    if (isLoading) {
      return (
        <div>
          <p>Please wait. Status: loading...</p>
        </div>
      );
    }

    return (
      <div>
        <div>
          {regUpError ? <p>{regUpError}</p> : null}
          <p>Register</p>
          <input
            type="email"
            placeholder="register email"
            value={regEmail}
            onChange={this.inputChangeRegEmail}
          />
          <br />
          <input
            type="name"
            placeholder="register name"
            value={regName}
            onChange={this.inputChangeRegName}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={regPassword}
            onChange={this.inputChangeRegPassword}
          />
          <br />
          <button onClick={this.onSignIn}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Register;
