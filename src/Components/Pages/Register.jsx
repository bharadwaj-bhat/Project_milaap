import RegisterForm from "../RegisterForm";
import { Register } from "../RegisterStyle";
import { Link } from "react-router-dom";
import styles from "../../Style.module.css";

function Rform() {
  return (
    <div className={styles.container}>
      <Register>
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
          <p>Sign up & manage fundraisers, donations & more</p>
          <RegisterForm />
          <div>
            <p>Already signed up with Milaap?</p>
            <Link to="/Login">
              <button className={styles.main_button}>Login</button>
            </Link>
          </div>
        </div>
      </Register>
    </div>
  );
}

export default Rform;
