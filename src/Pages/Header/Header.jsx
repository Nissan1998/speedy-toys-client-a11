/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/weblogo.png";
import BannerText from "../BannerText/BannerText";
import { AuthContext } from "../../Routes/AuthProvider/AuthProvider";
import LazyLoad from "react-lazyload";
const Header = ({ bgImage }) => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    return logOut();
  };
  console.log(user);
  return (
    <LazyLoad>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          height: `${bgImage && "100vh"}`,
        }}
        className="min-h-auto bg-cover "
      >
        <div className="navbar   text-black  font-bold">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/alltoys">All Toys</Link>
                </li>
                {user && (
                  <li>
                    <Link to="/mytoys">My Toys</Link>
                  </li>
                )}

                {user && (
                  <li>
                    <Link to="addatoy">Add a Toy</Link>
                  </li>
                )}

                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            </div>
            <img
              className="md:w-40 w-24 cursor-pointer  ms-5 rounded-xl "
              src={logo}
              alt=""
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-1 px-1">
              <li>
                <Link
                  className={`${
                    bgImage
                      ? "bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  text-white"
                      : "text-white"
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    bgImage
                      ? "bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  text-white"
                      : "text-white"
                  }`}
                  to="/alltoys"
                >
                  All Toys
                </Link>
              </li>
              <li>
                {user && (
                  <Link
                    className={`${
                      bgImage
                        ? "bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  text-white"
                        : "text-white"
                    }`}
                    to="/mytoys"
                  >
                    My Toys
                  </Link>
                )}
              </li>
              {user && (
                <li>
                  <Link
                    className={`${
                      bgImage
                        ? "bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  text-white"
                        : "text-white"
                    }`}
                    to="/addatoy"
                  >
                    Add A Toy
                  </Link>
                </li>
              )}
              <li>
                <Link
                  className={`${
                    bgImage
                      ? "bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  text-white"
                      : "text-white"
                  }`}
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="me-8">
              {user && (
                <img
                  title={user?.displayName}
                  className="btn-circle"
                  src={user?.photoURL}
                />
              )}
            </div>
            {user && (
              <Link
                to="/"
                onClick={handleLogOut}
                className="btn cursor-pointer bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  "
              >
                LogOut
              </Link>
            )}
            {!user && (
              <Link
                to={bgImage ? "login" : "/login"}
                className="btn cursor-pointer bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  "
              >
                Login
              </Link>
            )}
          </div>
        </div>
        <div>{bgImage && <BannerText></BannerText>}</div>
      </div>
    </LazyLoad>
  );
};

export default Header;
