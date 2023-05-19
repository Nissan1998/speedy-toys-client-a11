import React from "react";

const PhotoGallery = () => {
  return (
    <div>
      <div className=" mx-auto px-5 py-2 lg:px-32 lg:pt-24 w-full shadow-2xl ">
        <h1 className="md:text-5xl font-bold text-yellow-600  mb-5 text-center underline ">
          Our Toys Gallery
        </h1>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className=" block h-full w-full rounded-lg object-cover object-center"
                src="https://media.istockphoto.com/id/184863509/photo/truck-in-palm-of-hand.jpg?s=612x612&w=0&k=20&c=Q5vlYxPT2fHGj7icceflYlo4i6G2RIhaQmX1VqmREzk="
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSVMp0Io9SUHPsAUv-sU_Hp0iFp6dZFL2tA&usqp=CAU"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://wallpaperaccess.com/full/2896358.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://3.bp.blogspot.com/-CdOmAL23Q_0/XaqIBv2o57I/AAAAAAAAA5c/KnBND8NiktIGKDIXLhw_aXIortP1pshzQCK4BGAYYCw/s1600/cb-g.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtq6Pi97cdU639LnBjCZTAYduw94IJLXfrg&usqp=CAU"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://wallpaper-house.com/data/out/12/wallpaper2you_578103.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
