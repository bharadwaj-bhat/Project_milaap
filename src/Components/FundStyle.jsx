import styled from "styled-components";

export const Funds = styled.div`
  width: 70%;
  background-color: white;
  min-height: 500px;
  display: flex;
  margin: 5% auto;
  align-items: center;
  border-radius: 15px;

  & > div:nth-child(1) {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 2.5%;
  }

  & > div:nth-child(1) > div > a > img {
    width: 60%;
  }
  & > div:nth-child(1) > h4 {
    margin-top: 1%;
    margin-bottom: 0%;
    color: #9c3353;
  }
  & > div:nth-child(1) > p {
    margin-top: 1.5%;
    margin-bottom: 0%;
    color: gray;
    font-size: 12px;
  }

  & > div:nth-child(1) > div {
    background-color: #9c3353;
    padding: 20px 0px;
    text-align: center;
    border-radius: 50%;
    margin: 0% 25%;
  }
  & > div:nth-child(2) {
    width: 75%;
    min-height: 500px;
    margin: auto;
    border: 2px solid;
    display: flex;
    flex-direction: column;
    border-top: 0;
    border-bottom: 0;
    border-right: 0;
    align-items: center;
    border-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(226, 226, 226, 1) 48%,
      rgba(255, 255, 255, 0) 100%
    );
    border-image-slice: 1;
  }
  & > div:nth-child(2) > p {
    width: 40%;
    text-align: center;
    margin-top: 8%;
    color: gray;
  }
  & > div:nth-child(2) > div {
    width: 100%;
    margin-top: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div:nth-child(2) > div > p {
    color: gray;
  }
`;
