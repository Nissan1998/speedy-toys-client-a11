import React from "react";

const BannerText = () => {
  return (
    <div className=" pb-10 container mx-auto">
      <div className="relative mt-52">
        <div className="bg-violet-600 rounded h-56 blur-3xl w-1/2 mx-auto"></div>
        <div className="absolute top-0 left-1/5 md:left-96">
          <h3 className=" text-5xl  text-white  text-center font-bold  mt-16">
            Find Your Car Toys From <br />
            <span className="text-yellow-400">Speedy Toys</span> <br /> with
          </h3>
          <div>
            <h1 className="text-center text-yellow-500 text-5xl font-bold">
              <span className="animate-pulse bg-white rounded-2xl px-1 text-yellow-500">
                20%{" "}
              </span>
              Discount
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerText;
