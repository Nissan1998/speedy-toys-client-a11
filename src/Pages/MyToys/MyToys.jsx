import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Routes/AuthProvider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  return (
    <div>
      <div className="bg-gradient-to-r relative from-red-400 to-slate-400 to rounded-t-2xl">
        <Header></Header>
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
              {myToys.map((toy) => (
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
      <Footer></Footer>
    </div>
  );
};

export default MyToys;
