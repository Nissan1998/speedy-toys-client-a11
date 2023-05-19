import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../Routes/AuthProvider/AuthProvider";
import app from "../../Firebase/Firebase.config";
import useTitle from "../../CustomHook/useTitle";

const Login = () => {
  useTitle("Login");
  const [error, setError] = useState("");
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setError("");
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {});
  };
  //GitHub SignIn Process--------->

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        if (error.message == "Firebase: Error (auth/user-not-found).") {
          return setError("The User is Not Exist");
        } else if (error.message == "Firebase: Error (auth/invalid-email).") {
          setError("");
        } else {
          setError("Your Given Password is Wrong");
        }
      });
  };
  return (
    <div>
      <div className="bg-gradient-to-r relative from-red-400 to-slate-400 to rounded-t-2xl">
        <Header></Header>
      </div>
      <div>
        <div className="flex justify-center items-center h-[100vh] bg-gray-300 ">
          <div className="w-full max-w-lg">
            <form
              onSubmit={handleLogin}
              className="bg-white rounded-xl shadow-2xl px-8 pt-6 pb-8 mb-4"
            >
              <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
              <div className="mb-4">
                {error && (
                  <p className="text-center font-bold text-red-600">
                    Warning:- {error}
                  </p>
                )}
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
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-center">
                <button
                  className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              <div className="mx-auto mt-2 w-2/3">
                <Link to="/register">
                  Do not have an account?
                  <button className="btn-link">Register....</button>
                </Link>
              </div>
              <div className="divider">OR</div>
              <div className=" w-32 mx-auto">
                <span>Continue with </span>
                <button onClick={handleGoogleSignIn}>
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

export default Login;
