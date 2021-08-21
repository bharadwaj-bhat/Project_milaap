import styles from "./Footer.module.css";

export function Row1() {
    return (
      <div className = {styles.Row1}>
        <h5> Donate towards</h5>
        <div>
          <i className="fas fa-stethoscope"></i>
          <p> Medical </p>
        </div>
        <div>
          <i className="fas fa-user-graduate"></i>
          <p> Education </p>
        </div>
        <div>
                <i className="fas fa-monument"></i>
                <p> Memorial </p>
        </div>
      </div>
    );
}
