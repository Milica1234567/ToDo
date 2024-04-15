import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const validate = (user) => {
    let error = {};

    if (user.username === "") {
      error.username = "Username empty";
    } else {
      error.username = "";
    }

    if (user.email === "") {
      error.email = "Email empty";
    } else {
      error.email = "";
    }

    if (user.password === "") {
      error.password = "empty password";
    } else {
      error.password = "";
    }
    return error;
  };

  const handleInput = (event) => {
    setUser((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setError(validate(user));
    if (error.username === "" && error.password === "" && error.email === "") {
      axios
        .post("http://localhost:8080/register", user)
        .then((res) => {
          navigate("/dashboard");
        })
        .catch((err) => console.log(err));
    } else {
      console.log({ error });
    }
  };

  return (
    <div>
      <div>
        <form action="" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleInput}
          ></input>
          {error.username && <p>{error.username}</p>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInput}
          ></input>
          {error.email && <p>{error.email}</p>}
          <input
            type="passwrord"
            name="password"
            placeholder="Password"
            onChange={handleInput}
          ></input>
          {error.password && <p>{error.password}</p>}
          <button type="submit">Create Acc</button>
          <Link to="/">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
