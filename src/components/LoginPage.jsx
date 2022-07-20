import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  function loginUser() {}

  return (
    <>
      <h1>Login</h1>
      <div>
        <label htmlFor="userInput">Username</label>
        <input
          value={username}
          id="userInput"
          type={"text"}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="passwordInput">Password</label>
        <input
          value={password}
          id="passwordInput"
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          if (username.length > 0 && password.length > 0) {
            login(username);
            navigate("/search");
          }
        }}
      >
        Login
      </button>
      {}
    </>
  );
}

export default LoginPage;
