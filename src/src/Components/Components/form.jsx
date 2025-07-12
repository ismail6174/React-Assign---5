import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import styles from "../styles/authForm.module.css";

const AuthForm = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {showLogin ? <Login /> : <Signup />}
        <p className={styles.toggle}>
          {showLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setShowLogin(!showLogin)} className={styles.link}>
            {showLogin ? " Sign up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;