import { Intro } from "../Intro";
import { Search } from "../Search";
import { FundDisplay } from "../FundTab";
import { Bottom } from "../Bottom";

export function Home() {
  return (
    <div>
      <Intro />
      <Search />
      <FundDisplay />
      <Bottom />
    </div>
  );
}
