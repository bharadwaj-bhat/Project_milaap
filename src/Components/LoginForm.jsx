import styles from "../Style.module.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm({ handleLoggedIn }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // const handleHandler = (i) => {
  //   handleLoggedIn(i);
  // };

  let validation = false;
  const notify = () => {
    toast.error("Wrong Credentials, Please try again!", {
      position: "top-center",
    });
  };
  const handleLogin = async () => {
    let { data } = await axios.get(
      "https://bharadwaj-bhat-json-database.herokuapp.com/user"
    );
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].pass === pass) {
        setEmail("");
        setPass("");
        handleLoggedIn(data[i]);
        history.push("/");
        validation = true;
        break;
      }
    }
    if (!validation) {
      notify();
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <>
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

        {/* <Link to="/">
      </Link> */}
        <button className={styles.sign_up} onClick={handleLogin}>
          Login
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default LoginForm;
