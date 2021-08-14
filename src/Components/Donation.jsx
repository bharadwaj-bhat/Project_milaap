import styled from "styled-components";
import { Story } from "./Story";
import { PayDonation } from "./PayDonation";
import { useState } from 'react';

const WRAPPER = styled.div`
  width: 70%;
  margin: auto;

  display: flex;
  justify-content: space-between;
`;

const Donation = ({cardData, handleFirst}) => {

  const [update, SetUpdate] = useState(cardData.amount)
  
 
  const handleUpdate = (i) => {
    SetUpdate((prev) => {
      return Number(prev) + Number(i);
    })
  }

  
  return (
    <WRAPPER>
      <Story cardData={cardData} update={update} />
      <PayDonation
        cardData={cardData}
        update={update}
        handleUpdate={(i) => handleUpdate(i)}
        handleFirst={(i) => handleFirst(i)}
      />
    </WRAPPER>
  );
};

export { Donation };
