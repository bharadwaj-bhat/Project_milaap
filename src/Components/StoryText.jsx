import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Button = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  .b1 {
    border-radius: 30px 0 0 30px;
  }

  .b2 {
    border-radius: 0 30px 30px 0;
  }
`;

const BUTTON = styled.button`
  width: 50%;
  height: 50px;
  border: 0.5px solid #882140;
  background: ${(props) => (props.status ? "#882140" : "white")};
  color: ${(props) => (props.status ? "white" : "gray")};
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;

const Story = styled.div`
  margin-top: 40px;
  font-family: sans-serif;
  display:flex;
  flex-direction:column;
  justify-content:center;
  .title {
    word-spacing: 2mm;
    font-weight: bold;
  }

  .desc {
    line-height: 140%;
    word-spacing: 2mm;
    margin-bottom: 40px;
  }
  .img{
    width:70%;
    margin:auto;
  }
`;

const Info = styled.div`
  text-align: center;
  border-radius: 0 20px 0 20px;
  box-shadow: 0 0 5px #9c3353;
  padding: 10px 0 10px 0;
  margin-top: 40px;

  button {
    width: 50%;
    height: 50px;
    border: 1px solid #9c3353;
    background: white;
    font-size: 120%;
    color: #9c3353;
    border-radius: 25px;
  }

  button:hover {
    cursor: pointer;
  }

  .link {
    text-decoration: underline;
    color: #9c3353;
  }

  .link:hover {
    cursor: pointer;
  }
`;

const StoryText = () => {
  const [story, setStory] = useState(true);
  const [update, setUpdate] = useState(false);

  const handleStory = () => {
    setStory(true);
    setUpdate(false);
  };

  const handleUpdate = () => {
    setStory(false);
    setUpdate(true);
  };
  return (
    <>
      <Wrapper>
        <Button>
          <BUTTON status={story} onClick={handleStory} className="b1">
            Story
          </BUTTON>
          <BUTTON status={update} onClick={handleUpdate} className="b2">
            Updates(3)
          </BUTTON>
        </Button>
        <Story>
          <p className="title">
            Milaap is an online crowdfunding platform that enables anyone across
            India to raise funds for healthcare, education, sports, disaster
            relief and other personal causes, with great ease. Founded in 2010
            by a team of young and passionate entrepreneurs, Milaap has
            pioneered the development of person to person giving in India.
          </p>
          <p className="desc">
            Crowdfunding can be a quick and easy way to meet unanticipated,
            pressing needs. Today, anyone with a smartphone can participate in
            making a difference with great ease. More and more people are now
            raising funds online to tackle emergencies more efficiently.
            Increasing digital access and the convenience of online payments are
            driving more and more Indians to take the digital route to mobilize
            greater support for urgent needs on time. India’s private healthcare
            spending is estimated at $90 billion a year. Of this, about $60
            billion is out-of-pocket: from savings, borrowings and support from
            friends and family. This is where crowdfunding plays a role,
            bridging the gap, and making it easy to both ask for and render
            financial assistance. People have always turned to their friends,
            family and communities at a time when a significant amount of money
            is required to deal with urgent medical crises.
          </p>
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNUebvd-EZxYPCKV2pSmquTvjK5Ed48zFrQ&usqp=CAU"
            alt=""
          />
        </Story>
        <Info>
          <p>
            If something isn't right, we will work with you to ensure no misuse
            occurs.
          </p>
          <p className="link">Report This cause</p>
        </Info>

        <Info>
          <p>Know a similar organisation in need of funds?</p>
          <button>Refer an NGO</button>
        </Info>
      </Wrapper>
    </>
  );
};

export { StoryText };
