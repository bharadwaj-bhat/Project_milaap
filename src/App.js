import "./App.css";
import {useState} from 'react'
import { Navbar } from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { Donations } from "./Components/Pages/Donations";
import { Lend } from "./Components/Pages/Lend";
import { Pricing } from "./Components/Pages/Pricing";
import { ContactUs } from "./Components/Pages/ContactUs";
import { Footer } from "./Components/Footer/Footer";
import Rform from "./Components/Pages/Register";
import Lform from "./Components/Pages/Login";

const Main = withRouter(({ location , handleUsd, usd }) => {
  return (
    <div className="Contents">
      {!["/Register", "/Login"].includes(location.pathname) ? <Navbar handleUsd={handleUsd} usd={usd} /> : null}
      <Switch>
        <Route path="/" exact component={() => <Home usd={usd}/> } />
        <Route path="/donate" exact component={Donations} />
        <Route path="/lend" exact component={Lend} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/contact" exact component={ContactUs} />
        <Route exact path="/register" component={Rform} />
        <Route exact path="/login" component={Lform} />
      </Switch>
      {!["/Register", "/Login"].includes(location.pathname) ? <Footer /> : null}
    </div>
  );
});
const App = () => {
  const [usd,SetUsd] = useState(true)

  const handleUsd = ()=>{
    SetUsd(!usd);
    console.log('clickked')
  }

  return (
    <div className="App">
      <Router>
        <Main handleUsd={ handleUsd } usd={usd}/>
      </Router>
    </div>
  );
};

export default App;
