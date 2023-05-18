import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <div>
      <div className="bg-gradient-to-r relative from-red-400 to-slate-400 to rounded-t-2xl">
        <Header></Header>
      </div>
      <div>
        <h3>Main Contain</h3>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blog;
