import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../HomeContent/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import Blog from "../Pages/Blogs/Blog";
import AddaToy from "../Pages/AddAToy/AddaToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/addatoy",
        element: <AddaToy></AddaToy>,
      },
    ],
  },
]);
export default router;
