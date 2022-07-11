import React, { useState } from "react";
import "./Login.css";
import oturanboga from "../../assets/meal2.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('user', user);
    window.location.href='home';

  }

  return (
    <div className="loginBigContainer">
      <div className="loginContainer">
        <img className="oturanboga" src={oturanboga} alt="oturanboga" />
        <h1>≺ED8EN/≻ RECIPE</h1>
        <form
        onSubmit={handleLoginSubmit}
        >
          <input
            type="text"
            placeholder="Username"
            // value={user}
            // onChange={(e) => setUser(e.target.value)}
            required
          />
          <input
            type="password"
            name="loginPassword"
            placeholder="Password"
            id="loginPassword"
            required
          />
          <button type="submit" onClick={navigate(`home`)}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
