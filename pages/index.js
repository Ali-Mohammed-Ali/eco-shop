import React from "react";

// eslint-disable-next-line
import "swiper/css/bundle";
import Banner from "../components/global_components/banner/Banner";
import Navbar from "../components/global_components/navbar/Navbar";
import NewArrivalProducts from "../components/home_components/newArrivalProducts/NewArrivalProducts";
import PopularPorduct from "../components/home_components/popularProducts/PopularProduct";
import Blog from "../components/global_components/Blog/Blog";
import Testimonials from "../components/home_components/Testimonials/Testimonials";
import Footer from "../components//global_components/FooterComponents/Footer/Footer";
export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <NewArrivalProducts />
        <PopularPorduct />
        <Blog />
        <Testimonials />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
