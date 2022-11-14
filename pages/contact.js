import React from "react";
import Navbar from "../components/global_components/navbar/Navbar";
import styles from "./pages_styles/contact.module.css";
import { AiOutlineRightCircle } from "react-icons/ai";
import Link from "next/link";
import Footer from "../components/global_components/FooterComponents/Footer/Footer";
import Image from "next/image";

export default function contact() {
  return (
    <>
      <header>
        <Navbar />
        <div className={styles.product_banner}>
          <h3 className={styles.product_title}>contact us now</h3>
          <div className={styles.path}>
            <span>
              <Link href="/">
                <a>home</a>
              </Link>
              <AiOutlineRightCircle className={styles.arrow_icon} /> contact
            </span>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.container}>
          <div className={styles.left}>
            <h4>please fill-up few details</h4>
            <span></span>
            <div className={styles.names}>
              <div className={styles.first}>
                <p>first name</p>
                <input type="text" placeholder="First Name" />
              </div>
              <div className={styles.last}>
                <p>last name</p>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className={styles.emailandphone}>
              <div className={styles.email}>
                <p>email</p>
                <input type="email" placeholder="email" />
              </div>
              <div className={styles.phone}>
                <p>phone</p>
                <input type="text" placeholder="phone" />
              </div>
            </div>
            <div className={styles.comment}>
              <p>comments</p>
              <textarea></textarea>
            </div>
            <button>send mail </button>
          </div>
          <div className={styles.right}>
            <p>our address</p>
            <div className={styles.address}>
              <Image src="/location.svg" height={40} width={40} alt="" />
              <p>Street No. 12, Newyork 12, MD - 123, USA.</p>
            </div>
            <div className={styles.phone}>
              <Image src="/phone.svg" height={40} width={40} alt="" />

              <p>1.800.123.456789</p>
            </div>
            <div className={styles.email}>
              <Image src="/email.svg" height={40} width={40} alt="" />

              <p>info@ecoshop.com</p>
            </div>
            <p className={styles.last_p}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
