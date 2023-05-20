import React from "react";
import { Rating } from "@smastrom/react-rating";

const CategoryCard = ({ toy }) => {
  // pic,name,price,rating,view details button
  return (
    <div>
      <div className="card h-full card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={toy?.photo} alt="Shoes" />
        </figure>
        <div className="card-body space-y-1">
          <h2 className="card-title">{toy?.name}</h2>
          <div className="w-28 mx-auto">
            <p>price:- ${toy?.price}</p>
            <div>
              <Rating value={Math.floor(toy.rating)} readOnly></Rating>
            </div>
          </div>
          <div className="card-actions justify-center">
            <button className="btn bg-gradient-to-r from-purple-400">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
