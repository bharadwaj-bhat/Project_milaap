import styles from './Footer.module.css';
import { StartFundBtn } from '../StartFundBtn';


export function StyledCard() {
    return (
        <>
            <div className={styles.StyledCard}>
                <div className={styles.innerStyledCard}>
                    <div>
                        <h2> Do you want to raise funds for a medical emergency? </h2>
                        <StartFundBtn title= "Start a fundraiser"/>
                    </div>
            </div>
            </div>
        </>
    )
}