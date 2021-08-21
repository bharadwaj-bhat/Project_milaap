import styled from "styled-components";
import rhombus from "./images/rhombus.png";
import rhombus2 from "./images/rhombus2.png";

const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  text-align: center;
  font-family: sans-serif;

  a {
    color: #9c3353;
    font-size: 22px;
  }

  p {
    font-size: 28px;
  }

  p:nth-child(4) {
    font-size: 22px;
    color: gray;
    word-spacing: 2mm;
    line-height: 10mm;
  }

  h2 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 10px 0 20px;
  }

  h2 span {
    padding: 0 10px;
  }
`;

const Call = styled.div`
  height: 100px;
  background: rgb(156 51 83);
  padding-top: 40px;

  div {
    width: 50%;
    height: 70px;
    margin: auto;
    padding-left: 10%;
    padding-right: 10%;
    background: white;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
  }

  div > button {
    width: 35%;
    height: 50px;
    margin-top: 10px;
    border-radius: 40px;
    border: none;
    color: white;
    background-color: #9c3353;
    font-size: 120%;
  }

  div > button:hover {
    cursor: pointer;
  }

  div > p {
    font-size: 140%;
  }
`;

const IconLine = styled.div`
  display: flex;
  text-align: center;

  div {
    width: 50%;
    margin: 15px;
    border-bottom: 1px solid #000;
  }

  img {
    margin: 0 5px 0 5px;
  }
`;

const Feed = styled.div`
  width: 40%;
  margin: 40px auto;
  text-align: center;
  font-family: sans-serif;

  p {
    font-size: 22px;
  }
`;
const Bottom = () => {
  return (
    <>
      <Wrapper>
        <p>See More Fundraisers</p>

        <p>A friend in your hour of need</p>
        <IconLine>
          <div></div>

          <img src={rhombus2} alt="" />
          <img src={rhombus} alt="" />
          <img src={rhombus2} alt="" />

          <div></div>
        </IconLine>
        <p>
          Medical treatments are expensive. They can exhaust your insurance and
          savings. With Milaap, you receive timely help to pay medical bills.
          Here’s how:
        </p>
      </Wrapper>
      <Call>
        <div>
          <p>Need help to setup your free fundraiser?</p>
          <button>Request a Call</button>
        </div>
      </Call>

      <Feed>
        <p>What people are saying about Milaap</p>
        <IconLine>
          <div></div>

          <img src={rhombus2} alt="" />
          <img src={rhombus} alt="" />
          <img src={rhombus2} alt="" />

          <div></div>
        </IconLine>
      </Feed>
    </>
  );
};

export { Bottom };
