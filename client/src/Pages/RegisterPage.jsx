import { useState } from "react";
import "../Components/Login.css";
import { useHistory } from "react-router-dom";

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

const RegisterPage = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    category: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.email);
    console.log(user.address);
    console.log(user.password);

    const newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      category: user.category,
      password: user.password,
    };

    const data = fetchQuery({
      uri: "http://localhost:4000/auth/register",
      method: "POST",
      body: newUser,
    });
    localStorage.setItem("token", data.token);
    // history.push("/login");
  };
  return (
    <div className="body">
      <form action="" onSubmit={handleSubmit} id="fm" className="form">
        <h3>Register</h3>
        <input
          className="inp"
          type="text"
          placeholder="First Name"
          name="firstName"
          id="in"
          value={user.firstName}
          onChange={handleChange}
        />
        <input
          className="inp"
          type="text"
          placeholder="Last Name"
          name="lastName"
          id="in"
          value={user.lastName}
          onChange={handleChange}
        />
        <input
          className="inp"
          type="text"
          placeholder="Email"
          name="email"
          id="in"
          value={user.email}
          onChange={handleChange}
        />
        <input
          className="inp"
          type="text"
          name="address"
          id="in"
          value={user.address}
          placeholder="Address"
          onChange={handleChange}
        />
        <input
          className="inp"
          type="text"
          list="in2"
          id="in"
          name="category"
          value={user.category}
          onChange={handleChange}
          placeholder="Where do you classify yourself in the list below?"
        />
        <datalist id="in2">
          <option value="Student" />
          <option value="Parent" />
          <option value="Other" />
        </datalist>
        <input
          className="inp"
          type="password"
          placeholder="Password"
          name="password"
          id="in"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit" id="bt" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
