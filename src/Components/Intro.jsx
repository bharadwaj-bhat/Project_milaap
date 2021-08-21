import styled from "styled-components";
import styles from "../Style.module.css";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const IntroWrapper = styled.div`
  width: 35%;
  margin: 170px 0px 0px 12%;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: sans-serif;
    font-weight: 500;
    font-size: 2.7rem;
    letter-spacing: 2px;
  }

  h3 {
    margin-top: -10px;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    color: rgb(114, 116, 116);
    letter-spacing: 1px;
  }

  p {
    font-size: 21px;
    margin-top: 10px;
  }

  button {
    width: 300px;
    height: 50px;
    border-radius: 40px;
    border: none;
    color: white;
    background-color: #9c3353;
    font-size: 17px;
    letter-spacing:1px;
    font-weight:600;
  }

  button:hover {
    cursor: pointer;
  }
`;

const CountWrapper = styled.div`
  margin-top: 34px;
  display: flex;
  justify-content: space-between;

  div {
    display:flex;
    flex-direction:column;
    justify-content:center;
    height: 70px;
    padding-right: 15px;
    border-right: 1px solid #e0b9c5;
  }

  div > p {
    font-size: 20px;
  }

  div > p:nth-child(1) {
    margin-top: -1px;
    color: rgb(158, 48, 71);
    font-weight: 600;
  }

  div > p:nth-child(2) {
    margin-top: -15px;
    color: black;
    font: 13px;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .donationCount {
    border-right:none;
  }
`;

const ImageWrapper = styled.div`
  width: 40%;
  height:60%;
  z-index:-1;

  img {
    margin-top:80px;
    height: 550px;
    width: 100%;
    border-radius: 45% 0% 45% 50%;
  }
`;

const HeadBar = styled.div`
  position: absolute;
  top: 15%;
  left: 25%;

  p {
    font-size: 1.1rem;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    color: rgb(93, 93, 93);
    letter-spacing: 1px;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    font-size: 22px;
    border: none;
    box-shadow: 0 0 10px -6px #9c3353;
    border-radius: 5px;
    padding: 0 25px 0 25px;
    background-color: white;
    color: gray;
  }

  button:hover {
    cursor: pointer;
  }

  div {
    margin-top: 10px;
  }

  i {
    color: rgb(150, 48, 80);
    margin-left: 25px;
  }
`;
const Intro = () => {
  return (
    <>
      <HeadBar>
        <button>
          <p>9-Month-Old Khyati Need Your Help To Live An SMA Free Life</p>
          <i className="fas fa-arrow-circle-right"></i>
        </button>
      </HeadBar>
      <Wrapper>
        <IntroWrapper>
          <h1>Milaap</h1>
          <h3>Free Crowdfunding for India</h3>
          <p>Raise funds online for medical emergencies and social causes</p>
          <Link to="/Fund">
            <button className={styles.fundRaiser}>
              Start a fundraiser - it's FREE
            </button>
          </Link>
          <CountWrapper>
            <div>
              <p>470,000+</p>
              <p>Fundraisers</p>
            </div>
            <div>
              <p>Rs. 1400 Crores +</p>
              <p className = 'theP'>Raised</p>
            </div>
            <div className = 'donationCount'>
              <p>60 lakhs +</p>
              <p>Donations</p>
            </div>
          </CountWrapper>
        </IntroWrapper>
        <ImageWrapper>
          <img
            src="https://s.yimg.com/ny/api/res/1.2/YGkApd3MpTUhALVM2NV_tA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2020-04/086dfa90-8155-11ea-bfff-66bdf3acb2fa"
            alt=""
          />
        </ImageWrapper>
      </Wrapper>
    </>
  );
};

export { Intro };
