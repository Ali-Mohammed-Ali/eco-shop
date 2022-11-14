import React from "react";
import Navbar from "../components/global_components/navbar/Navbar";
import Footer from "../components/global_components/FooterComponents/Footer/Footer";
import Blogs from "../components/blog_page_components/blog_list/Blogs";
import styles from "./pages_styles/blog.module.css";
import Link from "next/link";
import { AiOutlineRightCircle } from "react-icons/ai";

export default function BLog() {
  return (
    <>
      <header>
        <Navbar />
        <div className={styles.product_banner}>
          <h3 className={styles.product_title}>ecoshop blog list</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly
          </p>
          <div className={styles.path}>
            <span>
              <Link href="/">
                <a>home</a>
              </Link>
              <AiOutlineRightCircle className={styles.arrow_icon} /> blog
            </span>
          </div>
        </div>
      </header>
      <main>
        <Blogs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
