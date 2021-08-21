
import styles from './Footer.module.css'


export function CopywriteCard() {
    return (
      <div className = {styles.Copywrite}>
        <div>
          {" "}
          <p>Security & Privacy</p>
          <p> Conditions of use</p>
          <p> © 2010-2021 milaap.org.All rights reserved. </p>
        </div>
      </div>
    );
}