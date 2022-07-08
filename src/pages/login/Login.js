import React from 'react'
import './Login.css';
import oturanboga from '../../assets/meal2.svg';

const Login = () => {
  return (
    <div className="loginBigContainer">

    <div className='loginContainer'>
      <img className='oturanboga' src={oturanboga} alt="oturanboga" />
      <h1>≺ED8EN/≻ RECIPE</h1>
      <form action="#">
        <input type="text" placeholder='Username' />
        <input type="password" name="loginPassword" placeholder='Password' id="loginPassword" />
        <button type="submit">Login</button>
      </form>

    </div>
    </div>
  )
}

export default Login