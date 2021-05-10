import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "../Components/Login.css";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const LoginPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      email: user.email,
      password: user.password,
    };

    const data = fetchQuery({
      uri: "http://localhost:9000/auth/login",
      method: "POST",
      body: details,
    });
    localStorage.setItem("token", data.token);
    history.push("/");
  };

  return (
    <div className="body">
      <form action="" onSubmit={handleSubmit} className="form df">
        <h3>Login</h3>
        <input
          className="inp"
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          vlaue={user.email}
          onChange={handleChange}
        />
        <input
          className="inp"
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
        />
        <div className="save df sb">
          <div className="save-one df sb">
            <input type="checkbox" name="" id="tick" />
            <h4>Remember Me</h4>
          </div>
          <div className="sec">
            <Link to="/register">Forgot your Password?</Link>
          </div>
        </div>
        <button type="submit" id="bt" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
