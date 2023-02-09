import React, { useState } from "react";
import InputForm from "../InputForm/InputForm";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate=useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmission = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Please fill all fields");
      return;
    }
    signInWithEmailAndPassword(auth, values.email, values.password).then((res)=>{
      navigate("/todo")
    }).catch((err)=>{
      setErrorMsg(err.message);
    })
  };
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
      <h1 className="text-center" style={{color: "darkred"}}>Sign In</h1>
        <InputForm
          type="email"
          label="Email : "
          placeholder="Enter you email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputForm
          type="password"
          label="Password : "
          placeholder="Enter you password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission}>Sign In</button>
          <p style={{marginTop: "1.5rem"}}>Don't have an account?{" "}<Link to="/signup">SignUp</Link></p>
        </div>
      </div>
    </div>
  );
}
