import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({setLogUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(()=>{
    setError(validate(user))
  }, [user])



  const navigate = useNavigate();
  const validate = (user) => {
    let error = {};

    if (user.username === "") {
      error.username = "Username empty";
    } else {
      error.username = "";
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
  



  const handleLogin = (event) => {
    event.preventDefault();
    if (error.password === "" && error.username === "") {
      axios
        .post("http://localhost:8080/login", user)
        .then((res) => {
          if(res.data !== null){
            localStorage.setItem("user", res.data);
            navigate("/dashboard");
            

          }else{
            console.log("hhhhh");
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Error login");
    }
    setLogUser(user)
    
  };
  
  return (
    <div>
      <div>
        <form action="">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleInput}
          ></input>

          {error.username && <p>{error.username}</p>}

          <input
            type="passwrord"
            name="password"
            placeholder="Password"
            onChange={handleInput}
          ></input>

          {error.password && <p>{error.password}</p>}
          <button onClick={handleLogin}>Login</button>
          <Link to="/register">Create</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
