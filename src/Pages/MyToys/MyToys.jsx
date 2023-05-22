import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Routes/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useTitle from "../../CustomHook/useTitle";

const MySwal = withReactContent(Swal);
const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    fetch(
      `https://speedy-toys-server.vercel.app/myToys/${user?.email}?sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user, asc]);

  // (Price, available quantity, Detail description)
  const handleDelete = (id) => {
    const proceed = confirm("Are You Sure you want to Delete ?");
    if (proceed) {
      fetch(`https://speedy-toys-server.vercel.app/myToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            MySwal.fire({
              position: "top-end",
              icon: "success",
              title: "The Toy is successfully Deleted",
              timer: 2000,
            });
            const remaining = myToys.filter((toy) => toy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-r relative from-red-400 to-slate-400 to rounded-t-2xl">
        <Header></Header>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex justify-end font-bold text-xl text-center">
          <button
            onClick={() => setAsc(!asc)}
            className=" btn bg-gradient-to-r  from-gray-950 border-e-[10px]  to-sky-400 border-s-[10px] border-slate-600 "
          >
            {asc ? "Price : High To Low" : "Price : Low TO High"}
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">Photo</th>
                <th className="py-2 px-4">Toy Name</th>
                <th className="py-2 px-4">Seller Name</th>
                <th className="py-2 px-4">SubCategory</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Available Quantity</th>
                <th className="py-2 px-4">SellerMail</th>
                <th className="py-2 px-4">Details</th>
                <th className="py-2 px-4">Action</th>
                <th className="py-2 px-4">Delete</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy) => (
                <tr className="text-center" key={toy?._id}>
                  <td className="py-2 px-4">
                    <img
                      className="avatar w-24 h-auto"
                      src={toy?.photo}
                      alt={toy?.name}
                    />
                  </td>
                  <td className="py-2 px-4">{toy?.name}</td>
                  <td className="py-2 px-4">{toy?.sellerName}</td>
                  <td className="py-2 px-4">{toy?.subCategory}</td>
                  <td className="py-2 px-4">${toy?.price}</td>
                  <td className="py-2 px-4">{toy?.quantity}</td>
                  <td className="py-2 px-4">{toy?.sellerEmail}</td>
                  <td className="py-2 px-4">{toy?.description}</td>
                  <td className="py-2 px-4">
                    <Link
                      to={`/updateToys/${toy?._id}`}
                      className="btn bg-gradient-to-r bottom-0 from-gray-950 border-e-8 border-t-8 to-sky-400"
                    >
                      Update
                    </Link>
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleDelete(toy?._id)}
                      className="btn btn-circle bg-gradient-to-r from-gray-950 border-e-8 border-t-8 to-sky-400 text-red-600 font-bold text-xl"
                    >
                      X
                    </button>
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
