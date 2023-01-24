import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import logo from '../img/logo.png'
import bg from '../img/bg.png'

const Login = () => {
  const [loading, setLoading] = useState(false);

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div className="formContainer">
      <img src={logo} alt="" className="logoImg" />
      <img src={bg} alt="" className="bg" />
      <div className="formWrapper">
        <span className="logo">Welcome to</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {loading  && <span className="alarm">Updating, wait...</span>}
          {err && <span className="err">Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
