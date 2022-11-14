import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function SwipeToSlide() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    // variableWidth: true,
    infinite: true,
  };
  return (
    <div className="container">
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        img {
          max-width: 100%;
        }
        .container {
          width: 1000px;
          margin: auto;
          cursor: grab;
          overflow: hidden;
        }

        .slide .info {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .slide .info .product_title {
          text-transform: uppercase;
          letter-spacing: 3px;
          font-family: "Montserrat", sans-serif;
          color: #2d3a4b;
          margin: 10px 0 0 0;
        }
        .slide .info .product_desc {
          color: #666666;
          font-family: "Playfair Display", serif;
          font-size: 10px;
        }
        .slide .info .price {
          font-family: "Montserrat", sans-serif;
          color: #2d3a4b;
          font-weight: 900;
        }
      `}</style>
      <Slider {...settings}>
        <div className="slide">
          <div className="img">
            <Image src="/01.jpg" alt="" width={500} height={333} />
          </div>
          <div className="info">
            <h4 className="product_title">headphones</h4>
            <p className="product_desc">Lorem ipsum dolor sit amet</p>
            <span className="price">$299</span>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Image src="/02.jpg" alt="" width={500} height={335} />
          </div>
          <div className="info">
            <h4 className="product_title">keyboard</h4>
            <p className="product_desc">Lorem ipsum dolor sit amet</p>
            <span className="price">$299</span>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Image src="/01.jpg" alt="" width={500} height={333} />
          </div>
          <div className="info">
            <h4 className="product_title">headphones</h4>
            <p className="product_desc">Lorem ipsum dolor sit amet</p>
            <span className="price">$299</span>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Image src="/02.jpg" alt="" width={500} height={335} />
          </div>
          <div className="info">
            <h4 className="product_title">keyboard</h4>
            <p className="product_desc">Lorem ipsum dolor sit amet</p>
            <span className="price">$299</span>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Image src="/01.jpg" alt="" width={500} height={333} />
          </div>
          <div className="info">
            <h4 className="product_title">headphones</h4>
            <p className="product_desc">Lorem ipsum dolor sit amet</p>
            <span className="price">$299</span>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Image src="/02.jpg" alt="" width={500} height={335} />
          </div>
          <div className="info">
            <h4 className="product_title">keyboard</h4>
            <p className="product_desc">Lorem ipsum dolor sit amet</p>
            <span className="price">$299</span>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Image src="/01.jpg" alt="" width={500} height={333} />
          </div>
          <div className="info">
            <h4 className="product_title">headphones</h4>
            <p className="product_desc">Lorem ipsum dolor sit amet</p>
            <span className="price">$299</span>
          </div>
        </div>
        <div className="slide">
          <div className="img">
            <Image src="/02.jpg" alt="" width={500} height={335} />
          </div>
          <div className="info">
            <h4 className="product_title">keyboard</h4>
            <p className="product_desc">Lorem ipsum dolor sit amet</p>
            <span className="price">$299</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}
