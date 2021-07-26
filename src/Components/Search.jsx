import styled from "styled-components";
import horn from "./images/horn.png";
import search from "./images/search.png";
import rhombus from "./images/rhombus.png";
import rhombus2 from "./images/rhombus2.png";
// import styles from "../Style.module.css";

const NofeeWrapper = styled.div`
  width: 70%;
  height: 70px;
  margin-top: -70px;
  z-index: 2;
  margin-left: 150px;
  padding-right: 20px;
  box-shadow: 1px 2px 4px -4px #9c3353;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  background-color: #fbf2f5;
  border-radius: 5px;
  border-left: 7px solid #9c3353;

  div {
    display:grid;
    grid-template-columns:1fr 1fr 5fr;
    justify-content:center;
    align-items:center;
    .theP{
      font-size:1.2rem;
      color:black;
      font-weight:600;
      letter-spacing:1px;
      margin-top:2px;
      margin-left:25px;

    }
    .img{
        margin-top:15px;
        margin-left:120px;
      }
  }

  p {
    font-size: 50px;
    font-weight: bold;
    color: #9c3353;
    margin: 5px 0 10px 0;
  }
`;

const Wrapper = styled.div`
  width: 50%;
  margin: 20px auto;
  text-align: center;

  p {
    font-size: 30px;
    font-family: sans-serif;
    font-weight: 500;
  }
`;

const FORM = styled.form`
  display: flex;
  width: 700px;
  height: 50px;
  margin: 40px auto;

  input {
    width: 90%;
    height: 80%;
    margin-top: 0px;
    border: 1px solid #9c3353;
    border-radius: 40px 0 0 40px;
    box-shadow: 0 0 4px #9c3353;
    font-size: 18px;
    padding-left: 10px;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    opacity: 1;
  }

  button {
    width: 8%;
    height: 83%;
    background-color: #9c3353;
    border: none;
    border-radius: 0 40px 40px 0;
    align-items: center;
    img {
      width: 50%;
    }
  }

  button:hover {
    cursor: pointer;
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

const Search = () => {
  return (
    <>
      <NofeeWrapper>
        <div>
          <div></div>
          <div className = 'img'>
            {" "}
            <img src={horn} alt="" />
          </div>

          <p className="theP">Our crowdfunding platform charges NO fees</p>
        </div>
        <p>0%</p>
      </NofeeWrapper>
      <Wrapper>
        <p>Thousands are fundraising online on Milaap</p>
        <IconLine>
          <div></div>

          <img src={rhombus2} alt="" />
          <img src={rhombus} alt="" />
          <img src={rhombus2} alt="" />

          <div></div>
        </IconLine>
        <FORM action="">
          <input
            type="text"
            placeholder="Search by fundraiser, name, title, location etc."
            name="search"
          />
          <button type="submit">
            <img src={search} alt="" />
          </button>
        </FORM>
      </Wrapper>
    </>
  );
};

export { Search };
