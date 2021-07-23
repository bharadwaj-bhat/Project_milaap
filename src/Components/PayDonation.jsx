import styled from "styled-components";
import donation from "./images/donation.png";
import loading from "./images/loading.png";
import qr from "./images/qr.png";
import upi from "./images/upi.png";

const WRAPPER = styled.div`
  width: 40%;
  height: 685px;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  background: #f7f7f7;
  box-shadow: -8px 0px 5px 0px #f1c7d4;

  .flex {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .flex img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  .flex > p {
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

const PayDonation = () => {
  return (
    <>
      <WRAPPER>
        <div className="flex">
          <div className="flex">
            <img src={donation} alt="" />
            <div>Donate</div>
          </div>
          <p>1525 Supporters</p>
        </div>

        <div className="amount">
          <img src={loading} alt="" />
          <p>
            ₹25,12,235 of <span>of ₹30,12,658</span>
          </p>
        </div>

        <BUTTON>Donate Now</BUTTON>

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
    </>
  );
};

export { PayDonation };
