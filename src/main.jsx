import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import AuthProvider from "./Routes/AuthProvider/AuthProvider";
import "aos/dist/aos.css";
import "@smastrom/react-rating/style.css";
import "react-tabs/style/react-tabs.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
