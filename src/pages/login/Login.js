import "./Login.css";
import oturanboga from "../../assets/meal2.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    navigate('/home');

  }

  return (
    <div className="loginBigContainer">
      <div className="loginContainer">
        <img className="oturanboga" src={oturanboga} alt="oturanboga" />
        <h1>{"<ED8EN/>"} RECIPE</h1>
        <form
        onSubmit={handleLoginSubmit}
        >
          <input
            type="text"
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="loginPassword"
            placeholder="Password"
            id="loginPassword"
            required
          />
          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
