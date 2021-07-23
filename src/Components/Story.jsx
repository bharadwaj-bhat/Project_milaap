import { StoryText } from "./StoryText";
import styled from "styled-components";
import loading from "./images/loading.png";
import whatsapp from "./images/whatsapp.png";
import facebook from "./images/facebook.png";

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
    background: #cccaca;
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
    display: flex;
    align-items: center;
    width: 48%;
    height: 80px;
    border: 1px solid #dad0d0;
  }

  .card img {
    width: 50px;
    height: 50px;
  }

  .card div > div:nth-child(1) {
    color: gray;
    font-size: 95%;
  }
`;
const Story = () => {
  return (
    <>
      <WRAPPER>
        <p className="fee">
          Milaap will not charge any fee on your donation to this campaign.
        </p>

        <h2>
          Bengaluru is BREATHLESS! Urgently need O2 Cylinders Covid Relief!
        </h2>
        <img
          src="https://images.milaap.org/milaap/image/upload/v1619518760/production/images/campaign/282210/PicsArt_04-27-03.22.53_dz0cvh_1619520281.jpg?crop=faces&format=jpg&height=452&mode=crop&width=603"
          alt=""
        />
        <Raised>
          <div className="amount">
            <img src={loading} alt="" />
            <div>
              <div>Raised</div>
              <div>
                ₹25,12,235 <span>of ₹30,12,658</span>
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
              <div>Creator</div>
              <div>The United Foundation India</div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://images.milaap.org/milaap/image/upload/v1578828850/production/images/user/2304965/tuf_icon_1578827491.jpg?crop=faces&format=jpg&height=50&mode=crop&width=50"
              alt=""
            />
            <div>
              <div>The Fundraiser will Benefit</div>
              <div>The United Foundation India</div>
            </div>
          </div>
        </Creator>
        <div className="tax">
          80G tax benefits for <span>INR donations</span>
        </div>
        <StoryText />
      </WRAPPER>
    </>
  );
};

export { Story };
