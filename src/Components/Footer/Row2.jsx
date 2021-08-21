import styles from './Footer.module.css';
import { StartFundBtn } from '../StartFundBtn';

export function Row2(){
    return (
      <div className = {styles.Row2}>
        <StartFundBtn title = "Start a fundraiser" />
        <div className={styles.Row2D1}>
          <p> Pricing</p>
          <p> Milaap Reviews</p>
          <p> FAQs & Tips</p>
        </div>
        <div className = {styles.RowD2}>
          <p>Find us on </p>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    );
}
