import styles from "../Style.module.css";
import { useState } from "react";
import axios from "axios";

function FundForm() {
  const [created, setCreated] = useState("");
  const [des, setDes] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleFund = async () => {
    await axios.post("http://localhost:3001/funds", {
      created: created,
      url: "https://images.squarespace-cdn.com/content/v1/5c47de21a2772cff2c0212be/1549742325480-RMHFKANMOTV5JVFU80FI/Milaap+Logo-08.jpg?format=1000w",
      des: des,
      raised: 0,
    });
    alert("Fundraiser Activity has been initiated for your cause");
  };

  const handleCreated = (e) => {
    setCreated(e.target.value);
  };
  const handleDes = (e) => {
    setDes(e.target.value);
  };

  return (
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
          name="num"
          id="num"
          placeholder="Enter Your Mobile Number"
        />
        <label htmlFor="num">Mobile Number</label>
      </div>
      <div className={styles.field}>
        <input
          vlaue={des}
          type="text"
          name="des"
          id="des"
          placeholder="Describe......."
          onChange={handleDes}
        />
        <label htmlFor="des">Cause Description</label>
      </div>
      <button className={styles.sign_up} onClick={handleFund}>
        Start a fundraiser
      </button>
    </form>
  );
}

export default FundForm;
