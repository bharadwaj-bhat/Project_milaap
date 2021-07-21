import styles from "./Footer.module.css";

export function Row3() {
  return (
    <>
      <div className={styles.Row3D1}>
        <h5>Milaap</h5>
        <p> About us</p>
        <p> Press & Media</p>
        <p> Team </p>
        <p> Careers </p>
        <p> Contact </p>
      </div>
      <div className={styles.Row3D2}>
        <h5> Indian office address </h5>
        <p>
          {" "}
          Milaap Social ventures India Pvt. Ltd. ClayWorks Create - building,
          11th KM Create Campus, Arakere Bannerghatta Rd, Bangalore, Karnataka,
          India, 560076
        </p>
        <h5> Supported by</h5>
        <div className={styles.footerImages}>
          <img
            src="https://assets.milaap.org/assets/footer/visa-2f0810494a6cf6b3c56bb2c4f3f8f8eb56aa9a7fef7ce3e09221da38b99ae22e.png"
            alt="cards"
          />
          <img
            src="https://assets.milaap.org/assets/footer/master_card-5dd6fa0fc948f5eb5d4a826caecf0871781948403df78bb4f95c5ff6020b6130.png"
            alt="cards"
          />
          <img
            src="https://assets.milaap.org/assets/footer/paytm-e4064c63e5406550c7b8c13346a5bfef0b826ca5b1289e2407d4dcb4622d67e3.png"
            alt="cards"
          />
        </div>
      </div>
    </>
  );
}
