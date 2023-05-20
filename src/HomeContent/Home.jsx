import React, { useContext } from "react";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";
import Gallery from "./Gallery";
import LazyLoad from "react-lazyload";
import ToysGallery from "./ToysGallery";
import DiscountCountDown from "./CountDown/DiscountCountDown";
import PhotoGallery from "./photoGallery";
import useTitle from "../CustomHook/useTitle";
import banner from "../assets/HomeBanner.jpg";
import { AuthContext } from "../Routes/AuthProvider/AuthProvider";
// https://wallpaperaccess.com/full/7730137.jpg

const Home = () => {
  const { loading } = useContext(AuthContext);
  useTitle("Home");
  if (loading) {
    return (
      <progress className="progress w-32 my-[250px] mx-[600px]"></progress>
    );
  }
  return (
    <div>
      <LazyLoad>
        <Header bgImage={banner}></Header>
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
