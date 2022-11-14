import React from "react";
import SingleBlog from "../single_blog/SingleBlog";
import styles from "./blogs.module.css";

export default function Blogs() {
  return (
    <div className={styles.container}>
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
    </div>
  );
}
