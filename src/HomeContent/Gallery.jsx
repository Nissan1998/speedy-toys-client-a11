import React from "react";
import Lottie from "lottie-react";
import car1 from "../assets/93387-car-insurance-offers-loading-page.json";
import car2 from "../assets/134190-woman-driving-car.json";
import car3 from "../assets/18523-traffic-car-racing.json";

const Gallery = () => {
  return (
    <div className=" rounded-2xl container mx-auto ">
      <div className="md:w-[1000px] mx-auto ">
        <h1 className="text-center underline text-yellow-700 pt-5  md:text-5xl font-bold">
          Speedy Toys
        </h1>
        <div className="flex justify-center items-center ">
          <Lottie className="w-[900px]" animationData={car1} loop={true} />
          <Lottie className="w-[900px]" animationData={car1} loop={true} />
          <Lottie className="w-[900px]" animationData={car1} loop={true} />
          <Lottie className="w-[900px]" animationData={car1} loop={true} />
        </div>

        <div className="flex justify-center items-center">
          <Lottie className="w-[900px]" animationData={car2} loop={true} />
          <Lottie className="w-[900px]" animationData={car2} loop={true} />
          <Lottie className="w-[900px]" animationData={car2} loop={true} />
          <Lottie className="w-[900px]" animationData={car2} loop={true} />
        </div>
        <div className="flex justify-center items-center ">
          <Lottie className="w-[900px]" animationData={car3} loop={true} />
          <Lottie className="w-[900px]" animationData={car3} loop={true} />
          <Lottie className="w-[900px]" animationData={car3} loop={true} />
          <Lottie className="w-[900px]" animationData={car3} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
