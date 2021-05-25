import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useUserState } from "../state/store";
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
  const [state, setState] = useState({ email: "", password: "" });
  const setUser = useUserState((state) => state.setUser);
  const history = useHistory();

  // const [isAdmin] = user.role.admin
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //     if (user.email === "prince@gmail.com" && user.password === 1234) {

    // }

    const { user, token } = await fetchQuery({
      uri: "http://localhost:4000/auth/login",
      method: "POST",
      body: { ...state },
    });
    // console.log(data);
    setUser(user, token);
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
          vlaue={state.email}
          onChange={handleChange}
        />
        <input
          className="inp"
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={state.password}
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
