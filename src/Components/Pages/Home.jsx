import { Intro } from "../Intro";
import { Search } from "../Search";
import { FundDisplay } from "../FundTab";
import { Bottom } from "../Bottom";
import { Load } from "../../Load";

export function Home({ usd, first, handleFirst, handleCardData }) {
  


  return (
    <>
      <Load />
      <div>
        <Intro />
        <Search />
        <FundDisplay
          usd={usd}
          first={first}
          handleFirst={(i) => handleFirst(i)}
          handleCardData={(i) => handleCardData(i)}
        />
        <Bottom />
      </div>
    </>
  );
}
