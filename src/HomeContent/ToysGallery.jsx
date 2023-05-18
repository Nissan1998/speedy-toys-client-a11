import React from "react";
import AOS from "aos";

AOS.init({ duration: 1000 });
const ToysGallery = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-4xl mt-5 mb-5">Super Car Toys</h2>
      <div className="space-y-11 grid grid-cols-3  mx-auto  ">
        <div
          className="w-1/2 rounded-3xl container mx-auto h-[500px] text-center bg-gray-400"
          data-aos="fade-right"
        >
          <img
            className="w-full h-full"
            src="https://i5.walmartimages.com/asr/8323d4cf-8850-4c18-9790-967289f1813c.71f63b135faa507c84e5209906a88be3.jpeg"
            alt=""
          />
        </div>
        <div
          className="w-1/2 rounded-3xl container mx-auto h-0 text-center bg-gray-400"
          data-aos="fade-left"
        >
          <img
            src="https://i.ebayimg.com/images/g/iasAAOSwQplgu0ZX/s-l1600.jpg"
            alt=""
          />
        </div>
        <div
          className="w-1/2 rounded-3xl container mx-auto h-[500px] text-center bg-gray-400"
          data-aos="fade-right"
        >
          <img
            className="w-full h-full"
            src="https://rukminim1.flixcart.com/image/416/416/k5pn6vk0/vehicle-pull-along/9/f/p/lamborghini-centenario-1-32-scale-diecast-metal-alloy-pull-back-original-imafgtwjp7mnnahh.jpeg?q=70"
            alt=""
          />
        </div>
        <div
          className="w-1/2 rounded-3xl container mx-auto h-0 text-center bg-gray-400"
          data-aos="fade-left"
        >
          <img
            src="https://cf.shopee.com.my/file/94cbdeb2e1894d9ada1973a0458631e6"
            alt=""
          />
        </div>
        <div
          className="w-1/2 rounded-3xl container mx-auto h-[500px] text-center bg-gray-400"
          data-aos="fade-right"
        >
          <img
            className="w-full h-full"
            src="https://i5.walmartimages.com/asr/dd4102fd-d82c-4b77-bf4e-b7f5508c43d7.13bd9d89a4486fcec9345a770af324be.jpeg"
            alt=""
          />
        </div>
        <div
          className="w-1/2 rounded-3xl container mx-auto h-[500px] text-center bg-gray-400"
          data-aos="fade-left"
        >
          <img
            className="w-full h-full"
            src="https://images-americanas.b2w.io/produtos/4299907124/imagens/miniatura-lamborghini-terzo-millennio-verde-bburago-1-24/4299907124_3_large.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ToysGallery;
