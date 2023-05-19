import React from "react";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";
import Gallery from "./Gallery";
import LazyLoad from "react-lazyload";
import ToysGallery from "./ToysGallery";
import DiscountCountDown from "./CountDown/DiscountCountDown";
import PhotoGallery from "./photoGallery";

const Home = () => {
  return (
    <div>
      <LazyLoad>
        <Header
          bgImage={"https://wallpaperaccess.com/full/7730137.jpg"}
        ></Header>
        <PhotoGallery></PhotoGallery>
        <ToysGallery></ToysGallery>

        <h1>This is home content</h1>

        <Gallery></Gallery>
        <DiscountCountDown></DiscountCountDown>
        <Footer></Footer>
      </LazyLoad>
    </div>
  );
};

export default Home;
