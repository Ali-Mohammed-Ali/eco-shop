import React from "react";
import styles from "./testimonials.module.css";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.icon}>
          <Image src="/quote.svg" width={100} height={100} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing <br></br> elit.
          Repudiandae porro, dolore sunt doloribus quae ipsam <br></br>corporis
          cumque doloremque quas perspiciatis, debitis qui <br></br>consequatur
          quod deleniti laudantium accusamus mollitia minima illum!<br></br>
        </p>
        <h5>john smith</h5>
      </div>
      <div className={styles.img}>
        <Image src="/03.jpg" alt="" width={500} height={333} />
      </div>
    </div>
  );
}
