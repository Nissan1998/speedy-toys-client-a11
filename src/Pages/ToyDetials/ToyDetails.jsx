import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Rating } from "@smastrom/react-rating";

const ToyDetails = () => {
  const { id } = useParams();
  const [toys, setToys] = useState();
  console.log(toys);
  const toy = toys?.find((toy) => toy._id === id);
  console.log(toy);

  useEffect(() => {
    fetch("https://speedy-toys-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [id]);
  //    picture, toy name, seller name, seller email, price, rating, available quantity, and detail description
  return (
    <div>
      <div className="bg-gradient-to-r relative from-red-400 to-slate-400 to rounded-t-2xl">
        <Header></Header>
      </div>
      <div className="container mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={toy?.photo} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{toy?.name}</h2>
            <h2 className="card-title"> Seller:-{toy?.sellerName}</h2>
            <h2 className="card-title"> Seller Email:-{toy?.sellerEmail}</h2>
            <h2 className="card-title"> Price:-${toy?.price}</h2>
            <h2 className="card-title"> Available Quantity:-{toy?.quantity}</h2>
            <h2 className="card-title"> Details:-{toy?.description}</h2>
            <div className="w-32">
              <Rating value={Math.floor(toy?.rating)} readOnly></Rating>
            </div>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <Link
                to="/"
                className="btn bg-gradient-to-r from-gray-950 border-e-8 border-t-8 to-sky-400"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ToyDetails;
