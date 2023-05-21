import React from "react";
import AOS from "aos";

AOS.init(1200);
const ToysGallery = () => {
  return (
    <div>
      <h3 className="text-center underline text-yellow-700 md:text-4xl font-bold my-10">
        Customer Favorites
      </h3>
      <div className="grid md:grid-cols-3 gap-3 container mx-auto ">
        <div data-aos="zoom-in">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images-americanas.b2w.io/produtos/4299907124/imagens/miniatura-lamborghini-terzo-millennio-verde-bburago-1-24/4299907124_3_large.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i5.walmartimages.com/asr/6f02ecdd-3a3d-4786-a5d8-1e1c133d2f4d.a56f55cbe9dc371ed12107a3a6664038.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/2227/5577/products/Licensed-1-24-Mini-Electric-RC-Cars-4CH-Remote-Control-Toys-Machines-On-Th-Radio-Controlled.jpg?v=1502356456"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
              <img
                src="https://i5.walmartimages.ca/images/Enlarge/519/289/6000202519289.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0249/9910/0502/products/Lamborghini-Aventador-SV_Green_1_700x700.jpg?v=1628479306"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div data-aos="flip-up">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0299/4336/5731/files/kids_ride_on_electric_cars.jpg?v=1642306283"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysGallery;
