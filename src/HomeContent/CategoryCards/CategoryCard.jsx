import React from "react";

const CategoryCard = ({ toy }) => {
  // pic,name,price,rating,view details button
  return (
    <div>
      <div className="card h-full card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={toy.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
