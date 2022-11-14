import React from "react";
import Navbar from "../components/global_components/navbar/Navbar";
import Footer from "../components/global_components/FooterComponents/Footer/Footer";
import Product from "../components/product_page_components/products/Product";
import styles from "./pages_styles/product_page.module.css";
import {
  AiOutlineRightCircle,
  AiOutlineUnorderedList,
  AiOutlineAppstore,
  AiOutlineCaretDown,
} from "react-icons/ai";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <header>
        <Navbar />
        <div className={styles.product_banner}>
          <h3 className={styles.product_title}>ecoshop products</h3>
          <div className={styles.path}>
            <span>
              <Link href="/">
                <a>home</a>
              </Link>
              <AiOutlineRightCircle className={styles.arrow_icon} /> shop
            </span>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.product_container}>
          {/* start nav  */}
          <div className={styles.nav}>
            <div className={styles.left}>Showing 1 - 10 of 30 products</div>
            <div className={styles.right}>
              <div className={styles.sort}>
                Sort by
                <AiOutlineCaretDown className={styles.arrow_down_icon} />
              </div>
              <div className={styles.filter}>
                Filter by
                <AiOutlineCaretDown className={styles.arrow_down_icon} />
              </div>
              <div className={styles.grid}>
                <AiOutlineAppstore className={styles.grid_icon} />
              </div>
              <div className={styles.list}>
                <AiOutlineUnorderedList className={styles.list_icon} />
              </div>
            </div>
          </div>

          <div className={styles.products_items}>
            <Link href="/single-product-page">
              <a>
                <Product />
              </a>
            </Link>
            <Link href="/single-product-page">
              <a>
                <Product />
              </a>
            </Link>
            <Link href="/single-product-page">
              <a>
                <Product />
              </a>
            </Link>
            <Link href="/single-product-page">
              <a>
                <Product />
              </a>
            </Link>
            <Link href="/single-product-page">
              <a>
                <Product />
              </a>
            </Link>
            <Link href="/single-product-page">
              <a>
                <Product />
              </a>
            </Link>
            <Link href="/single-product-page">
              <a>
                <Product />
              </a>
            </Link>
            <Link href="/single-product-page">
              <a>
                <Product />
              </a>
            </Link>
            <Link href="/single-product-page">
              <a>
                <Product />
              </a>
            </Link>
            <Link href="/single-product-page">
              <a>
                <Product />
              </a>
            </Link>
            <Link href="/single-product-page">
              <a>
                <Product />
              </a>
            </Link>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
