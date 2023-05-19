import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Routes/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../../CustomHook/useTitle";

const Register = () => {
  useTitle("Register");
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  /*
  Navigate to Homepage............. 
  */
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  //Registration process...............................
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 8) {
      return setError("PassWord must have 8 letters");
    }

    console.log(name, photoUrl, email, password);

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        handleUserData(result.user, name, photoUrl);
        setSuccess("Account Successfully Created");
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        console.log(error);
        if (error.message) {
          setError("The User Already Exist");
        }
        setSuccess("");
      });
  };

  const handleUserData = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="bg-gradient-to-r relative from-red-400 to-slate-400 to rounded-t-2xl">
        <Header></Header>
      </div>
      <div>
        <div className="flex justify-center items-center h-full bg-gray-300 ">
          <div className="w-full max-w-lg mt-5">
            <form
              onSubmit={handleRegister}
              className="bg-white rounded-xl shadow-2xl px-8 pt-6 pb-8 mb-4"
            >
              <h2 className="text-2xl mb-4 text-center font-bold">
                Please Register !
              </h2>
              {error && (
                <p className="text-center font-bold text-red-600">
                  Warning:- {error}
                </p>
              )}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="text"
                >
                  Photo
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phot"
                  type="text"
                  name="photo"
                  placeholder="Enter your Photo URL"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  required
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  required
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-center">
                <button
                  className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <div className="mx-auto mt-2 w-2/3">
                <Link to="/login">
                  All ready have an account?
                  <button className="btn-link">Login....</button>
                </Link>
              </div>
              <div className="divider">OR</div>
              <div className=" w-32 mx-auto">
                <span>Continue with </span>
                <button>
                  <img
                    style={{ width: 25 }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
