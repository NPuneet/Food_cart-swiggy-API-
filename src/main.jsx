import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./App";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Body from "./Components/Body";
import { createBrowserRouter } from "react-router-dom";
import Gg from "./Components/Restaurent";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:resid",
        element: <Gg />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={myRouter} />
);
