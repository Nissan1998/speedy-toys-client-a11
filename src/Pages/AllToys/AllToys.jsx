import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useTitle from "../../CustomHook/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const { name, subCategory, price, sellerName, quantity } = toys[0];

  console.log(name, subCategory, price, sellerName, quantity);
  useTitle("All-Toys");
  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      <div className="bg-gradient-to-r from-red-400 to-slate-400  rounded-t-2xl">
        <Header></Header>
      </div>
      <h3>All Toys</h3>
      <h3>All Toys</h3>
      <h3>All Toys</h3>
      <h3>All Toys</h3>
      <h3>All Toys</h3>
      <h3>All Toys</h3>
      <h3>All Toys</h3>
      <h3>All Toys</h3>
      <h3>All Toys</h3>
      <h3>All Toys</h3>
      <h3>All Toys</h3>
      <h3>All Toys</h3>
      <Footer></Footer>
    </div>
  );
};

export default AllToys;
