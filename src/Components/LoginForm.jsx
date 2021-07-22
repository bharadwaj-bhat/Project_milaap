import styles from "../Style.module.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    let { data } = await axios.get("http://localhost:3001/user");
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].pass === pass) {
        setEmail("");
        setPass("");
        history.push("/");
        return true;
      }
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.field}>
        <input
          value={email}
          type="text"
          name="mobile"
          id="mobile"
          placeholder="Enter Mobile Number or Email"
          onChange={handleEmail}
        />
        <label htmlFor="mobile">Mobile number / Email ID</label>
      </div>
      <div className={styles.field}>
        <input
          value={pass}
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={handlePass}
        />
        <label htmlFor="password">Password</label>
      </div>
      <button className={styles.sign_up} onClick={handleLogin}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
