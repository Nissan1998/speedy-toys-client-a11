import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useTitle from "../../CustomHook/useTitle";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToyData, setFilteredToyData] = useState([]);
  // const { name, subCategory, price, sellerName, quantity } = toys[0];
  const handleSearch = (event) => {
    const { value } = event.target;
    const lettersOnly = value.replace(/[^a-zA-Z]/g, " ");
    setSearchQuery(lettersOnly);

    const filteredData = toys.filter((toy) =>
      toy.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredToyData(filteredData);
  };

  useTitle("All-Toys");
  useEffect(() => {
    fetch("https://speedy-toys-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  const displayedToyData = searchQuery ? filteredToyData : toys;
  return (
    <div>
      <div className="bg-gradient-to-r from-red-400 to-slate-400  rounded-t-2xl">
        <Header></Header>
      </div>
      <div>
        <div className="mb-4  w-96 mx-auto mt-5">
          <span className="font-bold me-2">Search By Toy Name</span>
          <input
            type="text"
            placeholder="Search by Toy Name"
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4">Seller</th>
                  <th className="py-2 px-4">Toy Name</th>
                  <th className="py-2 px-4">SubCategory</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Available Quantity</th>
                  <th className="py-2 px-4">View Details</th>
                </tr>
              </thead>
              <tbody>
                {displayedToyData.map((toy) => (
                  <tr className="text-center" key={toy._id}>
                    <td className="py-2 px-4">{toy.sellerName}</td>
                    <td className="py-2 px-4">{toy.name}</td>
                    <td className="py-2 px-4">{toy.subCategory}</td>
                    <td className="py-2 px-4">{toy.price}</td>
                    <td className="py-2 px-4">{toy.quantity}</td>
                    <td className="py-2 px-4">
                      <Link
                        to={`/detail/${toy._id}`}
                        className="btn bg-gradient-to-r from-gray-950 border-e-8 border-t-8 to-sky-400"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllToys;
