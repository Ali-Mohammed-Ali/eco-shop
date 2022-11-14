import React from "react";
import styles from "./single-blog.module.css";
import Link from "next/link";
import Image from "next/image";

export default function SingleBlog() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <p className={styles.category}>electronics</p>
        <h4 className={styles.title}>the unique chair by ecoshop</h4>
        <p className={styles.author}>by admin</p>
      </div>
      <div className={styles.img}>
        <Image src="/electronics.jpg" width={4648} height={3099} alt="" />
      </div>
      <div className={styles.blog}>
        <div className={styles.date}>
          <span>december</span>
          <span>27</span>
        </div>
        <div className={styles.info}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            volutpat dui at lacus aliquet, a consequat enim aliquet. Integer
            molestie sit amet sem et faucibus. Nunc ornare pharetra dui, vitae
            auctor orci fringilla eget. Pellentesque in placerat felis. Etiam
            mollis venenatis luctus. Morbi ac scelerisque mauris. Etiam sodales
            a nulla ornare viverra. Nunc at blandit neque, bibendum varius
            purus.
            <br />
            <br />
            Nam sit amet sapien vitae enim vehicula tincidunt. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nunc faucibus imperdiet vulputate. Morbi volutpat leo
            iaculis elit vehicula, eu convallis magna finibus. Suspendisse
            tristique ullamcorper erat a elementum. Cras eget elit non nunc
            aliquam ullamcorper quis sed metus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec malesuada, erat in ullamcorper
            bibendum, elit lacus mattis lorem, quis luctus diam lorem vel
            ligula.
          </p>
          <Link href="#">
            <a>
              <button>read more</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
