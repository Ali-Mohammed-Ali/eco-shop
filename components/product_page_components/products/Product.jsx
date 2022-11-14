import React from "react";
import styles from "./products.module.css";
import Image from "next/image";

import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export default function Product() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image src="/monitor.png" width={648} height={564} alt="" />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>monitor</h3>
          <p className={styles.desc}>Lorem ipsum dolor sit amet</p>
          <p className={styles.price}>$129</p>
        </div>
        <div className={styles.discount}>
          <p>10%</p>
          <p>off</p>
        </div>
        <div className={styles.action}>
          <AiOutlineSearch className={styles.icon} />
          <AiOutlineShoppingCart className={styles.icon} />
          <AiOutlineHeart className={styles.icon} />
        </div>
      </div>
    </>
  );
}
