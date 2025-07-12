import React from "react";
import styles from "../styles/form.module.css";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup submitted");
  };

  return (
    <form onSubmit={handleSignup} className={styles.form}>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Create Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;