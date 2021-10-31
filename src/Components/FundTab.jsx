import styled from "styled-components";
import data from "../FundDB.json";
import virus from "./images/virus.png";
import virus1 from "./images/virus1.png";
import stethoscope from "./images/stethoscope.png";
import stethoscope1 from "./images/stethoscope1.png";
import candle from "./images/candle.png";
import candle1 from "./images/candle1.png";
import more from "./images/more.png";
import more1 from "./images/more1.png";
import { useState, useEffect } from "react";
import Circle from "react-circle";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

const TabWrapper = styled.div`
  width: 48%;
  margin: auto;
  display: flex;
`;

const TAB = styled.div`
  width: 150px;
  height: 120px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    padding: 2px 15px;
    margin-top: 10%;
  }
`;

const WRAPPER = styled.div`
  width: 100%;
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
    color: #575656;
    font-weight: 600;
  }
`;

const AMOUNT = styled.div``;

const DISPLAY = styled.div`
  width: 70%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 2.5%;
`;

const Raised = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 5fr;
  margin: -20px 10px 10px 10px;

  div {
    display: flex;
    flex-direction: column;
  }

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

  .author,
  .raised {
    color: #000000;
    font-weight: 600;
  }

  .author {
    font-size: 80%;
    font-weight: 550;
  }
`;
const LoaderaWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const FundTab = ({
  image,
  title,
  amount,
  author,
  usd,
  handleCardData,
  target,
  id,
}) => {
  const usdValue = (Number(amount) / 74.32).toFixed(2);
  function commaReplacer(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  let y = target;

  let perc = Math.floor((amount / y) * 100);

  let inrVal = commaReplacer(amount);

  let usdVal = commaReplacer(usdValue);

  let payload = {
    image,
    title,
    amount,
    author,
    target,
    id,
  };

  // const handleCardClick = (payload) => {
  //   handleCardData(payload);
  // };

  return (
    <>
      <Link to="/donate" style={{ textDecoration: "none" }}>
        <WRAPPER onClick={(i) => handleCardData(payload)}>
          <img src={image} alt="" />
          <p>{title}</p>
          <AMOUNT>
            <Raised>
              {/* <img src={loading} alt="" /> */}
              <Circle
                progress={perc}
                size={50}
                lineWidth={50}
                textStyle={{
                  fontSize: "100px",
                  fontWeight: "500",
                }}
                progressColor="limegreen"
                bgColor="rgba(218, 218, 218, 0.568)"
              />
              <div>
                <div>Raised</div>
                <div className="raised">
                  {usd ? `$${usdVal}` : `₹ ${inrVal}`}
                </div>
              </div>
              <div>
                <div>Created By</div>
                <div className="author">{author}</div>
              </div>
            </Raised>
          </AMOUNT>
        </WRAPPER>
      </Link>
    </>
  );
};

const FundDisplay = ({ usd, first, handleFirst, handleCardData }) => {
  const [covid, setCovid] = useState(true);
  const [medical, setMedical] = useState(false);
  const [memories, setMemories] = useState(false);
  const [other, setOther] = useState(false);
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    if (first === "") {
      getData();
    } else {
      setCovidData(first);
    }
  }, [first]);

  const getData = async () => {
    let { data } = await axios.get(
      "https://bharadwaj-bhat-json-database.herokuapp.com/funds?_page=1&_limit=6&_sort=id&_order=desc"
    );

    setCovidData(data);
    handleFirst(data);
  };

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
      {
        <LoaderaWrap>
          <Loader
            type="ThreeDots"
            color="rgb(156,51,83)"
            width={100}
            height={100}
            timeout={500}
            style={{ margin: "auto" }}
          />
        </LoaderaWrap>
      }
      <DISPLAY>
        {covid
          ? covidData.map((e, index) => {
              return (
                <FundTab
                  key={index}
                  id={e.id}
                  image={e.url}
                  title={e.des}
                  amount={e.raised}
                  author={e.created}
                  usd={usd}
                  target={e.target}
                  handleCardData={(i) => {
                    handleCardData(i);
                  }}
                />
              );
            })
          : medical
          ? data.medical.map((e, index) => {
              return (
                <FundTab
                  key={index}
                  image={e.image}
                  title={e.title}
                  amount={e.amount}
                  author={e.author}
                  usd={usd}
                  target={e.target}
                  handleCardData={(i) => handleCardData(i)}
                />
              );
            })
          : memories
          ? data.memorial.map((e, index) => {
              return (
                <FundTab
                  key={index}
                  image={e.image}
                  title={e.title}
                  amount={e.amount}
                  author={e.author}
                  usd={usd}
                  target={e.target}
                />
              );
            })
          : data.covid.map((e, index) => {
              return (
                <FundTab
                  key={index}
                  image={e.image}
                  title={e.title}
                  amount={e.amount}
                  author={e.author}
                  usd={usd}
                  target={e.target}
                />
              );
            })}
      </DISPLAY>
    </>
  );
};

export { FundDisplay };
