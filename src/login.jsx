import * as React from "react";
import styled from "styled-components";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      token: "",
      logInError: "",
      logEmail: "",
      logPassword: ""
    };

    this.inputChangeLogEmail = this.inputChangeLogEmail.bind(this);
    this.inputChangeLogPassword = this.inputChangeLogPassword.bind(this);
    this.onLogIn = this.onLogIn.bind(this);
  }
  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  inputChangeLogEmail(event) {
    this.setState({
      logEmail: event.target.value
    });
  }

  inputChangeLogPassword(event) {
    this.setState({
      logPassword: event.target.value
    });
  }

  onLogIn(e) {
    e.preventDefault();
    const { logEmail, logPassword } = this.state;

    this.setState({
      isLoading: true
    });

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: logEmail,
        password: logPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json) {
          console.log(json);
          this.setState({
            isLoading: false,
            logEmail: "",
            logPassword: ""
          });
          return this.props.history.push("/");
        } else {
          this.setState({
            logInError: json.message,
            isLoading: false
          });
        }
      });
  }

  render() {
    const { isLoading, logInError, logEmail, logPassword } = this.state;

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
          {logInError ? <p>{logInError}</p> : null}
          <p>Login</p>
          <input
            type="email"
            placeholder="login email"
            value={logEmail}
            onChange={this.inputChangeLogEmail}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={logPassword}
            onChange={this.inputChangeLogPassword}
          />
          <br />
          <button onClick={this.onLogIn}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
