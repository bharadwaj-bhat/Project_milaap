import styles from "../Style.module.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FundForm({ handleFirst }) {
  const [created, setCreated] = useState("");
  const [des, setDes] = useState("");
  const [amt, setAmt] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const notify = () => {
    toast.dark("Fundraiser Activity has been initiated for your cause", {
      position: "top-center",
    });
  };

  const handleFund = async () => {
    await axios.post(
      "https://bharadwaj-bhat-json-database.herokuapp.com/funds",
      {
        created: created,
        url: "https://images.milaap.org/milaap/image/upload/v1619611080/production/images/campaign/282210/Milaap-banner_cixopj_1619611084.jpg?crop=faces&format=jpg&height=452&mode=crop&width=603",
        des: des,
        target: amt,
        raised: 0,
      }
    );
    notify();
  };

  const handleCreated = (e) => {
    setCreated(e.target.value);
  };
  const handleDes = (e) => {
    setDes(e.target.value);
  };
  const handleAmt = (e) => {
    setAmt(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter Your Name"
            onChange={handleCreated}
          />
          <label htmlFor="fullname">Name</label>
        </div>
        <div className={styles.field}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
          <label htmlFor="email">Email ID</label>
        </div>
        <div className={styles.field}>
          <input
            type="text"
            name="des"
            id="des"
            placeholder="Describe......."
            onChange={handleDes}
          />
          <label htmlFor="des">Cause Description</label>
        </div>
        <div className={styles.field}>
          <input
            type="number"
            name="amt"
            id="amt"
            placeholder="Amount to be Raised"
            onChange={handleAmt}
          />
          <label htmlFor="amt">Amount (₹)</label>
        </div>
        <button
          className={styles.sign_up}
          onClick={(i) => {
            handleFund();
            handleFirst("");
          }}
        >
          Start a fundraiser
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default FundForm;
