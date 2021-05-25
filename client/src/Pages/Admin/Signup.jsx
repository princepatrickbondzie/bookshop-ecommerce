import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Signup = () => {
  let history = useHistory();
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
    firstName: "",
    address: "",
    lastName: "",
    category: "",
    isAdmin: true,
  });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:4000/auth/register`, {
      method: "POST",
      body: JSON.stringify(admin),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    history.push("/admin_login");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} id="admin-form">
        <h3>Admin Signup</h3>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          placeholder="firstName"
          value={admin.firstName}
        />
        <input
          type="text"
          name="lastName"
          value={admin.lastName}
          onChange={handleChange}
          placeholder="laststName"
        />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          placeholder="address"
          value={admin.address}
        />
        <input
          className="res"
          type="text"
          list="nut"
          id="er"
          name="category"
          value={admin.category}
          onChange={handleChange}
          placeholder="Where do you classify yourself in the list below?"
        />
        <datalist id="nut">
          <option value="Student" />
          <option value="Parent" />
          <option value="Other" />
        </datalist>
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
          type="password"
          name="password"
          id="admin"
          className=""
          placeholder="Password"
          value={admin.password}
          onChange={handleChange}
        />
        <button type="submit" id="admin-login-btn">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
