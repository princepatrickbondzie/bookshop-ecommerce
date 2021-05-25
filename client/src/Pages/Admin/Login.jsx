import { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { useUserState } from "../../state/store";

const Login = () => {
  let history = useHistory();
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const setUser = useUserState((state) => state.setUser);

  // const [isAdmin] = user.role.admin;

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:4000/auth/login`, {
      method: "POST",
      body: JSON.stringify(admin),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { user, token } = await res.json();
    setUser(user, token);
    history.push("/admin");
  };

  return (
    <div>
      <div className="">
        <form action="" onSubmit={handleSubmit} id="admin-form">
          <h3>Admin Login</h3>
          <input
            type="text"
            name="email"
            id="admin"
            className=""
            value={admin.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            id="admin"
            className=""
            placeholder="Password"
            value={admin.password}
            onChange={handleChange}
          />
          <button type="submit" id="admin-login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
