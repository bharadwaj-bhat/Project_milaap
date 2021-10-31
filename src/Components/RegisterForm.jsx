import styles from "../Style.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [dataList, setDataList] = useState();

  useEffect(() => {
    dataLisatFunc();
  }, []);

  const dataLisatFunc = () => {
    axios
      .get("https://bharadwaj-bhat-json-database.herokuapp.com/user")
      .then((res) => setDataList(res.data));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const notify = () => {
    toast.dark("successfully Registered!", {
      position: "top-center",
    });
  };

  const alreadySignedIn = () => {
    toast.dark("User already registered !", {
      position: "top-center",
    });
  };

  const handleSignUp = async () => {
    for (let i = 0; i < dataList.length - 1; i++) {
      if (dataList[i].email === email) {
        alreadySignedIn();
        return;
      }
    }

    await axios.post(
      "https://bharadwaj-bhat-json-database.herokuapp.com/user",
      {
        full_name: name,
        email: email,
        pass: pass,
      }
    );
    setName("");
    setEmail("");
    setPass("");
    notify();
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
    <>
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
      <ToastContainer />
    </>
  );
}

export default RegisterForm;
