import styles from "./Footer.module.css";

export function Row1() {
    return (
      <div className = {styles.Row1}>
        <h5> Donate towards</h5>
        <div>
          <i class="fas fa-stethoscope"></i>
          <p> Medical </p>
        </div>
        <div>
          <i class="fas fa-user-graduate"></i>
          <p> Education </p>
        </div>
        <div>
                <i class="fas fa-monument"></i>
                <p> Memorial </p>
        </div>
      </div>
    );
}
