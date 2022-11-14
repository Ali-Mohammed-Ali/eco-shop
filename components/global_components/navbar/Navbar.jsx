import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";

function Navbar() {
  const router = useRouter();
  console.log(router);
  const dropDownMenu = () => {
    const menu = document.getElementById("MENU");

    if (menu.style.opacity === "0") {
      menu.style.opacity = "1";
    } else {
      menu.style.opacity = "0";
    }
  };
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image
              className={styles.logoImage}
              src="/logo.png"
              alt="logo"
              width="217"
              height="50"
              title="LOGO"
            />
          </a>
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={dropDownMenu}>
        <AiOutlineMenu className={styles.icon} />
      </div>
      <div className={styles.menu}>
        <ul className={styles.pageLinksMenu} style={{ opacity: "0" }} id="MENU">
          <li>
            <Link href="/products">
              <a>products</a>
            </Link>
          </li>

          <li>
            <Link href="/blog">
              <a>blog </a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a>contact </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.links}>
        <ul className={styles.pageLinks}>
          <li className={router.pathname == "/products" ? styles.active : ""}>
            <Link href="/products">
              <a>products </a>
            </Link>
          </li>

          <li className={router.pathname == "/blog" ? styles.active : ""}>
            <Link href="/blog">
              <a>Blog </a>
            </Link>
          </li>

          <li className={router.pathname == "/contact" ? styles.active : ""}>
            <Link href="/contact">
              <a>contact </a>
            </Link>
          </li>
        </ul>

        <ul className={styles.buttons}>
          <Link href="/">
            <a>
              <li className={styles.user}>
                <AiOutlineUser />
              </li>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li className={styles.cart}>
                <AiOutlineShoppingCart />
              </li>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li className={styles.search}>
                <AiOutlineSearch />
              </li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
