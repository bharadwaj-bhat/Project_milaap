import styled from "styled-components";

export const Login = styled.div`
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
    color: gray;
    margin-bottom: -4%;
  }
  & > div:nth-child(2) > div {
    width: 100%;
    margin-top: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div:nth-child(2) > div > button {
    background-color: #9c3353;
    color: white;
    font-size: 15px;
    width: 12%;
    text-align: center;
    height: 40px;
    border: 1px solid #9c3353;
    border-radius: 20px;
    margin-left: 3%;
  }
  & > div:nth-child(2) > div > p > span {
    color: gray;
  }
  & > div:nth-child(2) > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > div:nth-child(2) > div:nth-child(2) > button:nth-child(1) {
    background-color: #3b5998;
    width: 20%;
    border: 1px solid #3b5998;
    cursor: pointer;
    font-weight: bold;
  }
  & > div:nth-child(2) > div:nth-child(2) > button:nth-child(1):hover {
    box-shadow: 0 0 10px 0 rgba(59, 89, 152, 0.8);
  }
  & > div:nth-child(2) > div:nth-child(2) > button:nth-child(2) {
    background-color: #dd4b39;
    width: 20%;
    border: 1px solid #dd4b39;
    cursor: pointer;
    font-weight: bold;
  }
  & > div:nth-child(2) > div:nth-child(2) > button:nth-child(2):hover {
    box-shadow: 0 0 10px 0 rgba(221, 75, 57, 0.8);
  }
`;
