import React from "react";
import styles from "./banner.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <div className={styles.info}>
          <p>The Latest Product from ecoshop</p>
          <p className={styles.price}>$299</p>
          <h3>
            featured <br></br>cycle
          </h3>
          <Link href="/products">
            <a>
              <button className={styles.btn}>shop</button>
            </a>
          </Link>
        </div>
        <div className={styles.img}>
          <Image src="/headphones.png" width={618} height={835} alt="" />
        </div>
      </div>
    </div>
  );
}
