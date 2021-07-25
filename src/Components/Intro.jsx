import styled from "styled-components";
import next from "./images/next.png";
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
    font-size: 19px;
    margin-top: 20px;
  }

  button {
    width: 300px;
    height: 50px;
    border-radius: 40px;
    border: none;
    color: white;
    background-color: #9c3353;
    font-size: 18px;
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
    height: 70px;
    padding-right: 15px;
    border-right: 1px solid #e0b9c5;
  }

  div > p {
    font-size: 20px;
  }

  div > p:nth-child(1) {
    margin-top: -1px;
    color: #9c3353;
  }

  div > p:nth-child(2) {
    margin-top: -15px;
    color: gray;
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

  button {
    display: flex;
    justify-content: space-between;
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

  img {
    margin-top: 8px;
    margin-left: 8px;
  }
`;
const Intro = () => {
  return (
    <>
      <HeadBar>
        <button>
          <div>9-Month-Old Khyati Need Your Help To Live An SMA Free Life</div>
          <img src={next} alt="" />
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
              <p>40,000+</p>
              <p>Fundraisers</p>
            </div>
            <div>
              <p>Rs. 1400 Crores +</p>
              <p>Raised</p>
            </div>
            <div>
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
