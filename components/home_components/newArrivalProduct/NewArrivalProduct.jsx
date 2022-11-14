import React from "react";
import styles from "./newArrivalProduct.module.css";
import Image from "next/image";

export default function NewArrivalProduct() {
  return (
    <div className={styles.newArrivalProduct}>
      <div className={styles.cart}>
        <div className={styles.cartImg}>
          <Image src="/laptop-03.png" width={1240} height={529} alt="" />
        </div>
        <div className={styles.cartInfo}>
          <h4>macbook pro</h4>
          <p>Lorem ipsum dolor sit, amet consectetur </p>
        </div>
        <span className={styles.price}>$299</span>
      </div>
    </div>
  );
}
