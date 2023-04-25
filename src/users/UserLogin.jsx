import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  // Define state variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  // Define event handlers for form submission and input changes

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loggedInUser;
    axios
      .post("http://localhost:8080/users/process/register", loggedInUser)
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Perform login logic here
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }; */

  // Render the login form
  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default UserLogin;
