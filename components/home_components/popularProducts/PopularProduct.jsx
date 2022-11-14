import React from "react";
import SwipeToSlide from "../SwipeToSlide/SwipeToSlide";
import styles from "./popularProduct.module.css";

export default function PopularPorduct() {
  return (
    <div className={styles.popularPorduct}>
      <div className={styles.title}>
        <h2>popular products</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quidem
          <br></br>
          esse quis labore eveniet temporibus ipsa voluptas unde.
        </p>
      </div>
      <SwipeToSlide />
    </div>
  );
}
