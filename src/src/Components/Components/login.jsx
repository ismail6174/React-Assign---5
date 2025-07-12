import React from "react";
import styles from "../styles/form.module.css";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login submitted");
  };

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;