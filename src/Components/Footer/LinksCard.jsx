import styles from "./Footer.module.css";
import { Row1 } from "./Row1";
import { Row2 } from "./Row2";
import { Row3 } from "./Row3";

export function LinksCard() {
  return (
    <div className={styles.LinksCard}>
      <div>
        <Row1 />
        <Row2 />
      </div>
      <div className={styles.Row3}>
        <Row3 />
      </div>
    </div>
  );
}
