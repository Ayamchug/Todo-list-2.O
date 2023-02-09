import React from "react";
import InputForm from "../InputForm/InputForm";
import styles from "./Signup.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("All fields are required");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        updateProfile(user, {
          displayName: values.name,
        });
        navigate("/login");
      })
      .catch(() => {
        setSubmitButtonDisabled(false);
        setErrorMsg("Email already exists");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className="text-center" style={{color: "darkred"}}>Sign Up</h1>
        <InputForm
          type="text"
          label="Name : "
          placeholder="Enter Your Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <br />
        <InputForm
          type="email"
          label="Email : "
          placeholder="Enter Your Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <br />
        <InputForm
          type="password"
          label="Password : "
          placeholder="Enter Your Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />
        <br />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Sign Up
          </button>
          <p style={{marginTop: "1.5rem"}}>Already have an account?{" "}<Link to="/login">Login</Link> </p>
        </div>
      </div>
    </div>
  );
}
