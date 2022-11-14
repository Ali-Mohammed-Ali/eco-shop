import React from "react";
import styles from "./first.module.css";
import Link from "next/link";
import Image from "next/image";
export default function First() {
  return (
    <div className={styles.container}>
      <h2>about ecoshop</h2>
      <p>
        Phasellus lacinia fermentum bibendum. Interdum et malesuada fames ac
        ante ipsumien lacus, eu posuere odio luctus non. Nulla lacinia,<br></br>
        eros vel fermentum consectetur, risus purus tempc, et iaculis odio dolor
        in ex.
      </p>
      <div className={styles.social}>
        <Link href="/">
          <a>
            <div className={styles.icon}>
              <Image src="/twitter.svg" width={40} height={40} alt="" />
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className={styles.icon}>
              <Image src="/facebook.svg" width={40} height={40} alt="" />
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className={styles.icon}>
              <Image src="/linkedin.svg" width={40} height={40} alt="" />
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className={styles.icon}>
              <Image src="/youtube.svg" width={40} height={40} alt="" />
            </div>
          </a>
        </Link>
        <Link href="/">
          <a>
            <div className={styles.icon}>
              <Image src="/email.svg" width={40} height={40} alt="" />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
