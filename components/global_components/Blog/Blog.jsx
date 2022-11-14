import React from "react";
import styles from "./blog.module.css";

export default function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>knowledge share</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quidem
          <br></br>
          esse quis labore eveniet temporibus ipsa voluptas unde.
        </p>
      </div>
      <div className={styles.blog}>
        <div className={styles.blog_post}>
          <span className={styles.month}>december</span>
          <span className={styles.day}>27</span>
          <h4 className={styles.blog_title}>donec commo is vulputate</h4>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
            Repudiandae ipsa voluptatum odio eveniet error iste nobis facere
            <br></br>
          </p>
          <span className={styles.author}>by admin</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.blog_post}>
          <span className={styles.month}>december</span>
          <span className={styles.day}>27</span>
          <h4 className={styles.blog_title}>donec commo is vulputate</h4>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
            Repudiandae ipsa voluptatum odio eveniet error iste nobis facere
            <br></br>
          </p>
          <span className={styles.author}>by admin</span>
        </div>
      </div>
    </div>
  );
}
