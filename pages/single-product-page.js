import { React, useState } from "react";
import Navbar from "../components/global_components/navbar/Navbar";
import Footer from "../components/global_components/FooterComponents/Footer/Footer";
import Image from "next/image";

import styles from "./pages_styles/single_product_page.module.css";
import {
  AiOutlineRightCircle,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import Link from "next/link";

export default function Products() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };
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
              <AiOutlineRightCircle className={styles.arrow_icon} />
              <Link href="/products">
                <a>shop</a>
              </Link>
              <AiOutlineRightCircle className={styles.arrow_icon} /> monitor
            </span>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.container}>
          <div className={styles.imgs}>
            <Image src="/monitor.png" width={648} height={564} alt="" />
            <div className={styles.sm_imgs}>
              <Image
                src="/pexels-designecologist-1999463.jpg"
                width={4272}
                height={2848}
                alt=""
              />
              <Image
                src="/pexels-karol-d-400678.jpg"
                width={5000}
                height={3000}
                alt=""
              />
              <Image
                src="/pexels-sanni-sahil-2585916.jpg"
                width={3976}
                height={2984}
                alt=""
              />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.title_and_discount}>
              <h4>monitor</h4>
              <div className={styles.discount}>
                <p>10%</p>
                <p>off</p>
              </div>
            </div>
            <p className={styles.price}>$299</p>
            <p className={styles.category}>
              <span>category: </span>electronics
            </p>
            <p className={styles.brand}>
              <span>brand: </span> lg
            </p>
            <p className={styles.details}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without
            </p>
            <div className={styles.no_and_color}>
              <div className={styles.select_box}>
                <select name="cars" id="cars">
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                  <option value="four">4</option>
                </select>
              </div>
              <div className={styles.color}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles.addToCart_love}>
              <div className={styles.addToCart}>
                <Link href="#">
                  <a>
                    <button>add to cart</button>
                  </a>
                </Link>
              </div>
              <div className={styles.love}>
                <AiOutlineHeart
                  className={styles.icon}
                  style={{
                    display: isActive ? "none" : "flex",
                  }}
                  onClick={handleClick}
                />
                <AiFillHeart
                  className={styles.icon}
                  style={{
                    display: isActive ? "flex" : "none",
                  }}
                  onClick={handleClick}
                />
              </div>
            </div>
            <p className={styles.delivery_info}>delivery information</p>
            <p className={styles.delivery_details}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without
            </p>
            <p className={styles.shipping}> shipping & returns</p>
            <div className={styles.share}>
              <p className={styles.text}>share this product</p>
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
                      <Image
                        src="/facebook.svg"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </div>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <div className={styles.icon}>
                      <Image
                        src="/linkedin.svg"
                        width={40}
                        height={40}
                        alt=""
                      />
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
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
