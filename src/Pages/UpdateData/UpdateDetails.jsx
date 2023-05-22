import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const UpdateDetails = () => {
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

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    fetch(`https://speedy-toys-server.vercel.app/updateToy/${toy?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parseInt(data)),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          return MySwal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Toy is Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    // https://speedy-toys.web.app/
  };

  //   Price, available quantity, description)

  return (
    <div>
      <div className="bg-gradient-to-r relative from-red-400 to-slate-400 to rounded-t-2xl">
        <Header></Header>
      </div>
      <div className="min-h-screen bg-base-300 flex justify-center items-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2 md:w-2/3 lg:w-1/3"
          onSubmit={handleUpdate}
        >
          <h2 className="text-center font-bold underline text-yellow-700 decoration-wavy text-2xl mb-2">
            UpDate Details
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                step="0.01"
                defaultValue={toy?.price}
                placeholder="Enter price"
                name="price"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="quantity"
              >
                Available Quantity
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="quantity"
                type="number"
                defaultValue={toy?.quantity}
                placeholder="Enter available quantity"
                name="quantity"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Enter detailed description"
              name="description"
              required
              defaultValue={toy?.description}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className=" bg-gradient-to-t from-red-400 to-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateDetails;
