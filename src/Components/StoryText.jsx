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
  .title {
    word-spacing: 2mm;
    font-weight: bold;
  }

  .desc {
    line-height: 140%;
    word-spacing: 2mm;
    margin-bottom: 40px;
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
            India has set a worldwide record nobody wants. The country has
            topped the number of global daily Coronavirus cases. Today, as you
            read this Bengaluru Urban is the worst hit district in the country
            with the highest active Coronavirus caseload of over 1.5 lakhs.
          </p>
          <p className="desc">
            The surging count is weighing down heavy on the existing medical
            infrastructure in the city. The hospital ICUs and beds are full,
            forcing Covid-19 patients to rely on Oxygen support at home. The
            situation is out of control and the city is crying for help. There
            is an urgent need for Oxygen Cylinders, Ambulance Service, Medical
            Aid and 24/7 Helpline Support for Bed Allocation, Plasma, Covid-19
            Deceased Burial Service, etc. The United Foundation has been active
            in Relief Aid since the pandemic began in March last year. Read on
            to know how you can support!
          </p>
          <img
            src="https://images.milaap.org/milaap/image/upload/v1619592401/production/images/uploader_images/The_United_Foundation_-_Oxygen_Cylinder_with_Mercy_Mission_1619592399.jpg?format=jpg&mode=max&width=603"
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
