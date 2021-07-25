import { Donation } from "../Donation";

export function Donations({ cardData, handleFirst }) {
  return (
    <>
      <Donation
        cardData={cardData}
        handleFirst={(i) => {
          handleFirst(i);
        }}
      />
    </>
  );
}
