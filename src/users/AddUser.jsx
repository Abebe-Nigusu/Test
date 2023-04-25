import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserLogin from "./UserLogin";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    confirmPassword: "",
    role: "",
  });

  const { username, email, role, password, confirmPassword } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 offset-md-1 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Role"
                name="role"
                value={role}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
        <div className="col-md-4 offset-md-1 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Login</h2>
          <UserLogin />
        </div>
      </div>
    </div>
  );
}
