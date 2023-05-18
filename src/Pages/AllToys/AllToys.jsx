import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AllToys = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-400 to-slate-400  rounded-t-2xl">
        <Header></Header>
      </div>
      <h3>All Toys</h3>
      <Footer></Footer>
    </div>
  );
};

export default AllToys;
