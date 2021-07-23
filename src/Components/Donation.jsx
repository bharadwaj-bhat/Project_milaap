import styled from "styled-components";
import { Story } from "./Story";
import { PayDonation } from "./PayDonation";

const WRAPPER = styled.div`
  width: 65%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const Donation = () => {
  return (
    <>
      <WRAPPER>
        <Story />
        <PayDonation />
      </WRAPPER>
    </>
  );
};

export { Donation };
