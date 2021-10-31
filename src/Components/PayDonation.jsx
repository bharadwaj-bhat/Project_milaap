import styled from "styled-components";
import donation from "./images/donation.png";
import qr from "./images/qr.png";
import Circle from "react-circle";
import Modal from "react-modal";
import { useState } from "react";
import styles from "../Style.module.css";
import axios from "axios";

const WRAPPER = styled.div`
  width: 40%;
  height: 685px;
  margin-bottom: 20px;
  position: sticky;
  margin-top: 60px;
  top: 0;
  background: #f7f7f7;
  box-shadow: -8px 0px 15px -5px #f1c7d4;

  .flex {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 15px;
    grid-gap: 5px;
    justify-content: center;
    align-items: center;
  }
  .flex1 {
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 95px;
    justify-content: space-between;
    align-items: center;
  }

  .flex img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  .flex1 > p {
    font-size: 110%;
    text-decoration: underline;
    color: #740f2d;
  }

  .flex > div {
    font-size: 110%;
    font-weight: 550;
  }

  .amount {
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    letter-spacing: 1px;

    .raised {
      color: gray;
      font-weight: 500;
      font-size: 1rem;
      margin-bottom: -10px;
    }

    .amt1 {
      color: rgb(156, 51, 83);
      font-weight: 600;

      span {
        color: gray;
        font-weight: 400;
      }
    }
  }

  .amount img {
    width: 25%;
    height: 25%;
    margin-right: 20px;
  }

  .amount > p {
    margin-top: 40px;
    font-size: 95%;
    color: #740f2d;
  }

  .amount > p > span {
    color: gray;
  }

  img {
    width: 100%;
  }
`;

const BUTTON = styled.button`
  width: 90%;
  margin-left: 5%;
  text-align: center;
  height: 50px;
  border: none;
  border-radius: 25px;
  background: #740f2d;
  font-size: 118%;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const IconLine = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 40px;

  div {
    width: 20%;
    margin: 15px;
    border-bottom: 1px solid #740f2d;
  }

  p {
    margin: 0 1px 0 1px;
    font-size: 95%;
  }

  p > span {
    color: #740f2d;
    font-weight: 500;
  }
`;

const QRCODE = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 50%;
    margin: 20px;
  }

  button {
    position: absolute;
    top: 60%;
    left: 10%;
  }

  button {
    width: 80%;
    height: 50px;
    border: 0.5px solid #740f2d;
    border-radius: 25px;
    background: white;
    color: #740f2d;
    font-size: 115%;
  }

  button:hover {
    cursor: pointer;
  }
`;

const PayDonation = ({ cardData, handleFirst, update, handleUpdate }) => {
  const [values, SetValues] = useState("");
  const [upi, SetUpi] = useState("");
  const [isOpen, setIsopen] = useState(false);

  function commaReplacer(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  // let update1 = raisedUp === "" ? update : raisedUp;

  let perc = Math.floor((update / cardData.target) * 100);
  let amount = commaReplacer(update);
  let target = commaReplacer(cardData.target);

  const handleChangeVal = (e) => {
    SetValues(e.target.value);
  };

  const handleChangeUpi = (e) => {
    SetUpi(e.target.value);
  };

  const handleIsOpen = () => {
    setIsopen(true);
  };

  const handleUpdataHandler = (val) => {
    handleUpdate(val);
  };

  const handleDonate = () => {
    if (upi === "masaischool") {
      let num = Number(cardData.amount);
      let val = Number(values);

      console.log("inside handledonate");
      handleUpdataHandler(val);

      patchData(num + val);

      setIsopen(false);
      // setTimeout(() => {
      //    handleFirst("");
      //  },4000)
    }
  };

  const patchData = (x) => {
    axios
      .patch(
        `https://bharadwaj-bhat-json-database.herokuapp.com/funds/${cardData.id}`,
        { raised: x }
      )
      .then((res) => console.log("patched", res));
  };

  return (
    <>
      <WRAPPER>
        <div className="flex1">
          <div className="flex">
            <img src={donation} alt="" />
            <div>Donate</div>
          </div>
          <p>1525 Supporters</p>
        </div>

        <div className="amount">
          <Circle
            progress={perc}
            size={75}
            lineWidth={55}
            textStyle={{
              fontSize: "100px",
              fontWeight: "500",
            }}
            progressColor="limegreen"
            bgColor="rgba(218, 218, 218, 0.568)"
          />

          <div style={{ marginLeft: "60px" }}>
            <p className="raised"> Raised </p>
            <p className="amt1">
              ₹{amount} <span>of ₹{target}</span>
            </p>
          </div>
        </div>

        <BUTTON onClick={handleIsOpen}>Donate Now</BUTTON>
        <IconLine>
          <div></div>
          <p>
            or <span>Donate Using</span>
          </p>
          <div></div>
        </IconLine>
        <QRCODE>
          <img src={qr} alt="" />
          <button>Generate QR code</button>
        </QRCODE>

        <img src={upi} alt="" />
      </WRAPPER>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={() => {
          setIsopen(false);
        }}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          content: {
            borderRadius: "25px",
            top: "120px",
            bottom: "100px",
            right: "400px",
            left: "400px",
            border: "10px solid #642848",
          },
        }}
      >
        <h2 className={styles.modal_heading}>Donate to a Cause</h2>
        <div className={styles.field}>
          <input
            type="text"
            name="pay"
            id="pay"
            placeholder="Please Enter the Donation Amount"
            onChange={(e) => handleChangeVal(e)}
          />
          <label htmlFor="pay">Donation Amount</label>
        </div>
        <div className={styles.field}>
          <input
            type="text"
            name="upi"
            id="upi"
            placeholder="Please Enter the UPI ID"
            onChange={(e) => handleChangeUpi(e)}
          />
          <label htmlFor="upi">UPI ID</label>
        </div>
        {/* <Link to="/"> */}
        <button className={styles.modal_button} onClick={handleDonate}>
          Donate
        </button>
        {/* </Link> */}
        <button
          className={styles.modal_button}
          onClick={() => {
            setIsopen(false);
          }}
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export { PayDonation };
