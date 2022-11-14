import React from "react";
import NewArrivalProduct from "../newArrivalProduct/NewArrivalProduct";
import styles from "./newArrivalProducts.module.css";

export default function NewArrivalProducts() {
  return (
    <div className={styles.newArrivalProducts}>
      <div className={styles.title}>
        <h2>new arrival</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quidem
          <br></br>
          esse quis labore eveniet temporibus ipsa voluptas unde.
        </p>
      </div>
      <div className={styles.products}>
        <NewArrivalProduct />
        <NewArrivalProduct />
        <NewArrivalProduct />
        <NewArrivalProduct />
        <NewArrivalProduct />
        <NewArrivalProduct />
        <NewArrivalProduct />
        <NewArrivalProduct />
      </div>
    </div>
  );
}
