import React from "react";
import styles from "./mid.module.css";
export default function Mid() {
  return (
    <div className={styles.container}>
      <h2>newsletter</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi sunt
      </p>
      <div className={styles.email}>
        <input type="email" placeholder="Enter Your Email Address" />
        <button type="submit">send me</button>
      </div>
    </div>
  );
}
