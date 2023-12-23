import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import "./index.css";
import Error from "./Components/Error";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Gg from "./Components/Restaurent";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));

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
        element: (
          <Suspense fallback={<h1>DEKHO GUYS HUM H LAZY BOYS</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>DEKHO GUYS HUM H LAZY BOYS</h1>}>
            <Contact />
          </Suspense>
        ),
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
