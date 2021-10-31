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
  ({
    location,
    handleUsd,
    usd,
    handleLoggedIn,
    logged,
    first,
    handleFirst,
    handleCardData,
    cardData,
  }) => {
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
          <Route
            path="/"
            exact
            component={() => (
              <Home
                usd={usd}
                first={first}
                handleFirst={(i) => {
                  handleFirst(i);
                }}
                handleCardData={(i) => {
                  handleCardData(i);
                }}
              />
            )}
          />
          <Route
            path="/donate"
            exact
            component={() => (
              <Donations
                cardData={cardData}
                handleFirst={(i) => {
                  handleFirst(i);
                }}
              />
            )}
          />
          <Route path="/lend" exact component={Lend} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/contact" exact component={ContactUs} />
          <Route exact path="/register" component={Rform} />
          <Route
            exact
            path="/fund"
            component={() => (
              <Fform
                handleFirst={(i) => {
                  handleFirst(i);
                }}
              />
            )}
          />
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
  const [usd, SetUsd] = useState(false);
  const [logged, SetLogged] = useState(false);
  const [first, SetFirst] = useState("");

  const [cardData, SetCardData] = useState({
    amount: 2500783,
    author: "The United Foundation",
    image:
      "https://images.milaap.org/milaap/image/upload/v1619611080/production/images/campaign/282210/Milaap-banner_cixopj_1619611084.jpg?crop=faces&format=jpg&height=452&mode=crop&width=603",
    target: 4000000,
    title:
      "Bengaluru is BREATHLESS! Urgently need O2 Cylinders & Covid Relief!",
    id: 1,
  });

  const handleUsd = () => {
    SetUsd(!usd);
  };

  const handleFirst = (i) => {
    SetFirst(i);
  };

  const handleLoggedIn = (i) => {
    if (i == null) {
      SetLogged(false);
    } else {
      SetLogged(i.full_name);
    }
  };

  const handleCardData = (i) => {
    SetCardData(i);
  };

  return (
    <div className="App">
      <Router basename="/Project_milaap/home">
        <Main
          handleUsd={handleUsd}
          usd={usd}
          handleLoggedIn={handleLoggedIn}
          logged={logged}
          first={first}
          handleFirst={(i) => handleFirst(i)}
          handleCardData={(i) => handleCardData(i)}
          cardData={cardData}
        />
      </Router>
    </div>
  );
};

export default App;
