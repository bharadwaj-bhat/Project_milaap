import styled from "styled-components";
import loading from "./images/loading.png";
import data from "../FundDB.json";
import virus from "./images/virus.png";
import virus1 from "./images/virus1.png";
import stethoscope from "./images/stethoscope.png";
import stethoscope1 from "./images/stethoscope1.png";
import candle from "./images/candle.png";
import candle1 from "./images/candle1.png";
import more from "./images/more.png";
import more1 from "./images/more1.png";
import { useState } from "react";

const TabWrapper = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
`;

const TAB = styled.div`
  width: 150px;
  height: 120px;
  margin: 10px;
  border: 1px solid black;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 0 5px #9c3353;
  background: ${(props) => (props.status ? "rgb(105 26 71)" : "white")};
  color: ${(props) => (props.status ? "white" : "black")};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 12px #9c3353;
  }

  img {
    width: 40%;
    margin-top: 10%;
  }
`;

const WRAPPER = styled.div`
  width: 300px;
  color: gray;
  margin: 20px;
  box-shadow: 0 0 5px #9c3353;
  padding-bottom: 20px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 8px #9c3353;
  }

  img {
    width: 100%;
  }

  p {
    height: 60px;
    padding: 10px;
  }
`;

const AMOUNT = styled.div``;

const DISPLAY = styled.div`
  width: 65%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 2.5%;
`;

const Raised = styled.div`
  display: flex;
  margin: 0 10px 10px 10px;

  img {
    width: 50px;
    height: 50px;
  }

  div {
    margin-left: 10px;
  }

  div > div:nth-child(1) {
    color: gray;
    font-size: 10px;
  }
`;

console.log(data);

const FundTab = ({ image, title, amount, author, usd }) => {
  
  const usdValue = (Number(amount) / 74.32).toFixed(2)
  function commaReplacer(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  let inrVal = commaReplacer(amount)
 
  let usdVal = commaReplacer(usdValue)

  return (
    <>
      <WRAPPER>
        <img src={image} alt="" />
        <p>{title}</p>
        <AMOUNT>
          <Raised>
            <img src={loading} alt="" />
            <div>
              <div>Raised</div>
              <div>{usd ? `$${usdVal}` : `₹ ${inrVal}`}</div>
            </div>
            <div>
              <div>Created By</div>
              <div>{author}</div>
            </div>
          </Raised>
        </AMOUNT>
      </WRAPPER>
    </>
  );
};

const FundDisplay = ({usd}) => {
  const [covid, setCovid] = useState(true);
  const [medical, setMedical] = useState(false);
  const [memories, setMemories] = useState(false);
  const [other, setOther] = useState(false);

  const handleCovid = () => {
    setCovid(true);
    setMedical(false);
    setMemories(false);
    setOther(false);
  };

  const handleMedical = () => {
    setCovid(false);
    setMedical(true);
    setMemories(false);
    setOther(false);
  };

  const handleMemories = () => {
    setCovid(false);
    setMedical(false);
    setMemories(true);
    setOther(false);
  };

  const handleOther = () => {
    setCovid(false);
    setMedical(false);
    setMemories(false);
    setOther(true);
  };

  return (
    <>
      <TabWrapper>
        <TAB onClick={handleCovid} status={covid}>
          {covid ? <img src={virus1} alt="" /> : <img src={virus} alt="" />}
          <p>COVID-19</p>
        </TAB>
        <TAB onClick={handleMedical} status={medical}>
          {medical ? (
            <img src={stethoscope1} alt="" />
          ) : (
            <img src={stethoscope} alt="" />
          )}

          <p>Medical</p>
        </TAB>
        <TAB onClick={handleMemories} status={memories}>
          {memories ? (
            <img src={candle1} alt="" />
          ) : (
            <img src={candle} alt="" />
          )}

          <p>Memorials</p>
        </TAB>
        <TAB onClick={handleOther} status={other}>
          {other ? <img src={more1} alt="" /> : <img src={more} alt="" />}

          <p>15 Others</p>
        </TAB>
      </TabWrapper>
      <DISPLAY>
        {covid
          ? data.covid.map((e) => {
              return (
                <FundTab
                  image={e.image}
                  title={e.title}
                  amount={e.amount}
                  author={e.author}
                  usd = {usd}
                />
              );
            })
          : medical
          ? data.medical.map((e) => {
              return (
                <FundTab
                  image={e.image}
                  title={e.title}
                  amount={e.amount}
                  author={e.author}
                  usd = {usd}

                />
              );
            })
          : memories
          ? data.memorial.map((e) => {
              return (
                <FundTab
                  image={e.image}
                  title={e.title}
                  amount={e.amount}
                  author={e.author}
                  usd={usd}
                />
              );
            })
          : data.covid.map((e) => {
              return (
                <FundTab
                  image={e.image}
                  title={e.title}
                  amount={e.amount}
                  author={e.author}
                  usd={usd}
                />
              );
            })}
      </DISPLAY>
    </>
  );
};

export { FundDisplay };
