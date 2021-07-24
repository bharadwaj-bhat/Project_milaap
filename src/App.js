import "./App.css";
import { useState } from "react";
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
import Fform from "./Components/Pages/Fund";

const Main = withRouter(
  ({ location, handleUsd, usd, handleLoggedIn, logged , first, handleFirst}) => {
    return (
      <div className="Contents">
        {!["/Register", "/Login", "/Fund"].includes(location.pathname) ? (
          <Navbar
            handleUsd={handleUsd}
            usd={usd}
            logged={logged}
            handleLoggedIn={(i) => handleLoggedIn(i)}
          />
        ) : null}
        <Switch>
          <Route path="/" exact component={() => <Home usd={usd} first={first} handleFirst={(i)=>{handleFirst(i)}}/>} />
          <Route path="/donate" exact component={Donations} />
          <Route path="/lend" exact component={Lend} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/contact" exact component={ContactUs} />
          <Route exact path="/register" component={Rform} />
          <Route exact path="/fund" component={ ()=> <Fform handleFirst={(i)=>{handleFirst(i)}}/>} />
          <Route
            exact
            path="/login"
            component={() => (
              <Lform handleLoggedIn={(i) => handleLoggedIn(i)} />
            )}
          />
        </Switch>
        {!["/Register", "/Login", "/Fund"].includes(location.pathname) ? (
          <Footer />
        ) : null}
      </div>
    );
  }
);
const App = () => {
  const [usd, SetUsd] = useState(true);
  const [logged, SetLogged] = useState(false);
  const [first, SetFirst] = useState("")

  const handleUsd = () => {
    SetUsd(!usd);
  };

  const handleFirst = (i)=>{
      SetFirst(i)
  }

  const handleLoggedIn = (i) => {
    if (i == null) {
      SetLogged(false);
    } else {
      SetLogged(i.full_name);
    }
  };

  return (
    <div className="App">
      <Router>
        <Main
          handleUsd={handleUsd}
          usd={usd}
          handleLoggedIn={handleLoggedIn}
          logged={logged}
          first={first}
          handleFirst= {(i)=>handleFirst(i)}
        />
      </Router>
    </div>
  );
};

export default App;