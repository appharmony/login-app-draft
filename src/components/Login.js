import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
//import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/dashboard");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      /*const response = await axios.post(
        "http://auth-LoadBa-CGBE68BBZ13X-bf0d1207c1bf57b7.elb.us-east-1.amazonaws.com:8080/api/auth/signin",
        JSON.stringify({ username, password }),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));*/

      //clear state and controlled inputs
      setUsername("");
      setPassword("");
      // localStorage.setItem("user-info", JSON.stringify(response?.data?.username));
      localStorage.setItem("user-info", "test");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const register = (e) => {
    e.preventDefault();
    navigate("/register");
    /* auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/');
            }
        }).catch(error => alert(error.message))*/
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="login__SignInButton"
          >
            Sign In
          </button>
        </form>
        <br />
        Don't have acount?
        <button onClick={register} className="login__registerButton">
          register
        </button>
      </div>
    </div>
  );
}

export default Login;
