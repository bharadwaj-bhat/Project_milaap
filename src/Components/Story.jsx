import { StoryText } from "./StoryText";
import styled from "styled-components";
import whatsapp from "./images/whatsapp.png";
import facebook from "./images/facebook.png";
import Circle from "react-circle";

const WRAPPER = styled.div`
  width: 55%;
  margin-top: 70px;
  margin-bottom: 20px;

  .fee {
    width: 100%;
    margin: auto;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgb(242, 241, 241);
    border-radius: 0 0 5px 5px;
  }

  h2 {
    font-weight: 400;
  }

  img {
    width: 100%;
    border-radius: 10px;
  }

  .tax {
    width: 100%;
    padding: 7px 0 7px 0;
    background: rgb(243, 243, 243);
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 0.9rem;
    }
  }

  .tax span {
    color: #740f2d;
    font-weight: 500;
  }
`;

const Raised = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px 10px 10px;

  img {
    width: 80px;
    height: 80px;
  }

  div {
    margin-left: 10px;
  }

  div > div:nth-child(1) {
    color: gray;
    font-size: 90%;
  }

  button {
    width: 35%;
    height: 40px;
    border-radius: 20px;
    border: none;
    text-decoration: underline;
    color: #882140;
    font-size: 115%;
  }

  button:hover {
    cursor: pointer;
  }

  .amount {
    display: flex;
    font-size: 95%;
  }

  .amount > div {
    margin-top: 20px;
    font-weight: 450;
  }

  .amount > div:nth-child(2) {
    color: #9c3353;
  }

  span {
    color: gray;
  }
`;

const Share = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 50px;
    border-radius: 25px;
    font-size: 140%;
    color: white;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }

  img {
    width: 20px;
    margin: 10px;
  }

  .wp {
    background-color: #25d366;
  }

  .fb {
    background-color: #3b5998;
  }
`;

const Creator = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;

  .card {
    display: grid;
    grid-template-columns: 1fr 3fr;
    justify-content: ;
    align-items: center;
    width: 48%;
    height: 80px;
    border: 1px solid rgba(184, 179, 179, 0.719);
    border-radius: 3px;
  }

  .card div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card img {
    width: 50px;
    height: 50px;
  }

  .card p {
    font-size: 0.8rem;
    color: grey;
  }
  .card h4 {
    font-weight: 400;
    font-size: 1rem;
    margin-top: -8px;
  }

  .Iconimg {
    margin-left: 8px;
    margin-right: 15px;
    width: 50px;
    height: 50px;
    background: rgb(237, 218, 224);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(156, 51, 83);
  }
`;
const Story = ({ cardData, update }) => {
  function commaReplacer(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  let perc = Math.floor((update / cardData.target) * 100);

  let amount = commaReplacer(update);
  let target = commaReplacer(cardData.target);

  return (
    <>
      <WRAPPER>
        <p className="fee">
          Milaap will not charge any fee on your donation to this campaign.
        </p>

        <h2>{cardData.title}</h2>
        <img src={cardData.image} alt="" />
        <Raised>
          <div className="amount">
            <Circle
              progress={perc}
              size={70}
              lineWidth={55}
              textStyle={{
                fontSize: "100px",
                fontWeight: "500",
              }}
              progressColor="limegreen"
              bgColor="rgba(218, 218, 218, 0.568)"
            />
            <div>
              <div>Raised</div>
              <div>
                ₹{amount} <span>of ₹{target}</span>
              </div>
            </div>
          </div>

          <button>1525 Supporters</button>
        </Raised>

        <Share>
          <button className="wp">
            <img src={whatsapp} alt="" />
            <div>Share</div>
          </button>
          <button className="fb">
            <img src={facebook} alt="" />
            <div>Share</div>
          </button>
        </Share>

        <Creator>
          <div className="card">
            <img
              src="https://images.milaap.org/milaap/image/upload/v1578828850/production/images/user/2304965/tuf_icon_1578827491.jpg?crop=faces&format=jpg&height=50&mode=crop&width=50"
              alt=""
            />
            <div>
              <p className="p">Created by </p>
              <h4>{cardData.author}</h4>
            </div>
          </div>

          <div className="card">
            <div className="Iconimg">
              <h5> TU </h5>
            </div>
            <div>
              <p className="p">The Fundraiser will Benefit</p>
              <h4>{cardData.author}</h4>
            </div>
          </div>
        </Creator>
        <div className="tax">
          <p>
            80G tax benefits for <span>INR donations</span>
          </p>
        </div>
        <StoryText />
      </WRAPPER>
    </>
  );
};

export { Story };
