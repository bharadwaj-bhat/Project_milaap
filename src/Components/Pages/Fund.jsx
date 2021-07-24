import FundForm from "../FundForm";
import { Funds } from "../FundStyle";
import styles from "../../Style.module.css";
import {Link} from 'react-router-dom'

function Fform({handleFirst}) {
  return (
    <div className={styles.fund_container}>
      <Funds>
        <div>
          <div>
            <Link to = '/'>
              <img
                src="https://assets.milaap.org/assets/milaap-trasparent-logo-25f6253e0156e2f82e2c3daf85575d169864e35ffffd21033ac59da0b4dd88e0.png"
                alt=""
              />
            </Link>
          </div>
          <h4>Welcome to Milaap,</h4>
          <p>India’s largest crowdfunding site</p>
        </div>
        <div>
          <p>Start a Fundraiser now!</p>
          <FundForm handleFirst= {(i)=>handleFirst(i)} />
        </div>
      </Funds>
    </div>
  );
}

export default Fform;
