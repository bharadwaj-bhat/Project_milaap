import "../Components/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export function Navbar() {

    const [click, setClick] = useState(false)


  return (
    <div className="NavBar">
      <div className="NavBar-leftGrid">
        <img
          src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png"
          alt="logo.png"
        />
        <Link className = 'nav_options' to="/">Home</Link>
        <Link className = 'nav_options' to="/donate"> Donate </Link>
        <Link className = 'nav_options' to="/lend"> Lend </Link>
        <Link className = 'nav_options' to="/pricing"> Pricing </Link>
        <Link className = 'nav_options' to="/contact"> Contact Us </Link>
              <i class='fas fa-toggle-on'></i>
      </div>
      <div className="NavBar-rightGrid">
        <button> Start a fundraiser </button>
        <i class="far fa-user-circle"></i>
      </div>
    </div>
  );
}
