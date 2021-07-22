import styles from "../Style.module.css";
import { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleSignUp = async () => {
    await axios.post("http://localhost:3001/user", {
      full_name: name,
      email: email,
      pass: pass,
    });
    setName("");
    setEmail("");
    setPass("");
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.field}>
        <input
          value={name}
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Enter Your Full Name"
          onChange={handleChangeName}
        />
        <label htmlFor="fullname">Full name</label>
      </div>
      <div className={styles.field}>
        <input
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          onChange={handleChangeEmail}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className={styles.field}>
        <input
          value={pass}
          type="password"
          name="password"
          id="password"
          placeholder="Password Please"
          onChange={handleChangePass}
        />
        <label htmlFor="password">Password</label>
      </div>
      <button className={styles.sign_up} onClick={handleSignUp}>
        Sign up
      </button>
    </form>
  );
}

export default RegisterForm;