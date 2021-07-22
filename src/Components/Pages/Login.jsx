import LoginForm from "../LoginForm";
import { Login } from "../LoginStyle";
import { Link } from "react-router-dom";
import styles from "../../Style.module.css";

function Lform({handleLoggedIn}) {
  return (
    <div className={styles.container}>
      <Login>
        <div>
          <div>
            <a href="/">
              <img
                src="https://assets.milaap.org/assets/milaap-trasparent-logo-25f6253e0156e2f82e2c3daf85575d169864e35ffffd21033ac59da0b4dd88e0.png"
                alt=""
              />
            </a>
          </div>
          <h4>Welcome to Milaap,</h4>
          <p>India’s largest crowdfunding site</p>
        </div>
        <div>
          <p>Quickly login using</p>
          <div>
            <button>Facebook</button>
            <button>Google</button>
          </div>
          <LoginForm handleLoggedIn={(i)=>handleLoggedIn(i)}/>
          <p style={{ color: "#9c3353", marginTop: "30px" }}>
            Forgot Password?
          </p>
          <div>
            <p>
              New to Milaap? <span>Sign up now, it’s quick & free</span>
            </p>
            <Link to="/Register">
              <button className={styles.main_button}>Sign up</button>
            </Link>
          </div>
        </div>
      </Login>
    </div>
  );
}

export default Lform;
