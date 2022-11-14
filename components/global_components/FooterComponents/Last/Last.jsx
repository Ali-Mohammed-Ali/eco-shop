import React from "react";
import styles from "./last.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Last() {
  return (
    <div style={{ backgroundColor: "#171e27" }}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Link href="/">
            <a>
              <div className={styles.logo}>
                <Image src="/gray_logo.png" width={150} height={40} alt="" />
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <div className={styles.row}>
                <div className={styles.icon}>
                  <Image
                    src="/location_gray.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <p>
                  street no. 12, newyork 12, <br></br>md-123,use.
                </p>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <div className={styles.row}>
                <div className={styles.icon}>
                  <Image src="/phone_gray.svg" width={40} height={40} alt="" />
                </div>
                <p>1.800.123.456789</p>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <div className={styles.row}>
                <div className={styles.icon}>
                  <Image src="/email_gray.svg" width={40} height={40} alt="" />
                </div>
                <p>info@ecoshop.com</p>
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.column_two}>
          <div className={styles.title}>helpful links</div>
          <div className={styles.links}>
            <ul>
              <Link href="/products">
                <a>
                  <li>products</li>
                </a>
              </Link>
              <Link href="/products">
                <a>
                  <li>find a store</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>features</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>privacy</li>
                </a>
              </Link>
              <Link href="/blog">
                <a>
                  <li>blog</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>press kit</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>

        <div className={styles.column_two}>
          <div className={styles.title}>helpful links</div>
          <div className={styles.links}>
            <ul>
              <Link href="/products">
                <a>
                  <li>shop</li>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <li>about us</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>career</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>shipping methods</li>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <li>contact</li>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <li>support</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>retailer</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div className={styles.column_two}>
          <div className={styles.title}>helpful links</div>
          <div className={styles.links}>
            <ul>
              <Link href="/">
                <a>
                  <li>login</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>my account</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>my cart</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>wishlist</li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li>checkout</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <p className={styles.copy}>© 2022 ecoshop All right reserved.</p>
    </div>
  );
}
