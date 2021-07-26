import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";
import { useState } from "react";

const override = css`
  display: block;
  width: 100vw;
  height: 100vh;
  /* outline: 1px solid red; */
  padding: 150px 100px;
  margin: auto;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
`;

export const Load = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <BarLoader loading={loading} color="#9C3353" size={150} css={override} />
  );
};
