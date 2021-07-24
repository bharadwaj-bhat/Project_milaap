import "../Components/Navbar.css";
import { StartFundBtn } from "./StartFundBtn";
import { Link } from "react-router-dom";
import { useState } from "react";

function Profile({ logged, handleLoggedIn }) {
  const [vis, SetVis] = useState(false);

  const handleClick = () => {
    SetVis(!vis);
  };

  return (
    <div onClick={handleClick} className="ProfileDiv">
      <span className={!vis ? "logOutSpan" : "logOutVis"}>
        <button onClick={(i) => handleLoggedIn(null)} className="logOutBtn">
          {" "}
          Log Out{" "}
        </button>
      </span>
      <div>
        <h2> {logged[0]}</h2>
      </div>

      <p>{logged}</p>
    </div>
  );
}

export function Navbar({ handleUsd, usd, logged, handleLoggedIn }) {
  const [active, setActive] = useState("");

  return (
    <div className="NavBar">
      <div className="NavBar-leftGrid">
        <Link to = '/' onClick = {()=>setActive('')}>
          <img
            src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png"
            alt="logo.png"
          />
        </Link>

        <Link
          className={active === "home" ? "nav_options_active" : "nav_options"}
          to="/"
          onClick={() => setActive("home")}
        >
          Home
        </Link>
        <Link
          className={active === "donate" ? "nav_options_active" : "nav_options"}
          to="/donate"
          onClick={() => setActive("donate")}
        >
          {" "}
          Donate{" "}
        </Link>
        <Link
          className={active === "lend" ? "nav_options_active" : "nav_options"}
          to="/lend"
          onClick={() => setActive("lend")}
        >
          {" "}
          Lend{" "}
        </Link>
        <Link
          className={
            active === "pricing" ? "nav_options_active" : "nav_options"
          }
          to="/pricing"
          onClick={() => setActive("pricing")}
        >
          {" "}
          Pricing{" "}
        </Link>
        <Link
          className={
            active === "contact" ? "nav_options_active" : "nav_options"
          }
          to="/contact"
          onClick={() => setActive("contact")}
        >
          {" "}
          Contact us{" "}
        </Link>
        <div
          className={`toggle_switch ${!usd && "toggled"}`}
          onClick={handleUsd}
        >
          <div className="toggle_dial"></div>
          <div className="toggleText">{!usd ? "INR" : "USD"}</div>
        </div>
      </div>
      <div className="NavBar-rightGrid">
        <div> {/*for search bar */}</div>
        <Link to={!logged ? "/Register" : "/donate"}>
          <StartFundBtn title="Donate for  cause" />
        </Link>
        <Link to={!logged && "/Register"}>
          {logged === false ? (
            <i className="far fa-user-circle"></i>
          ) : (
            <Profile
              logged={logged}
              handleLoggedIn={(i) => handleLoggedIn(i)}
            />
          )}
        </Link>
      </div>
    </div>
  );
}
