import { Intro } from "../Intro";
import { Search } from "../Search";
import { FundDisplay } from "../FundTab";
import { Bottom } from "../Bottom";
import { useState, useEffect } from 'react';
import axios from 'axios'

export function Home({ usd, first ,handleFirst }) {

  // const [covidData, setCovidData] = useState([]);
  // const [dependency, setDependensy] = useState(false);

  // console.log("from fund display");
  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   let { data } = await axios.get(
  //     "http://localhost:3001/funds?_page=1&_limit=6&_sort=id&_order=desc"
  //   );

  //   setCovidData(data);
  //   console.log(covidData, "the data from home tab");
  // };

  
  return (
    <div>
      <Intro />
      <Search />
      <FundDisplay usd={usd} first = {first} handleFirst={(i)=> handleFirst(i)} />
      <Bottom />
    </div>
  );
}
