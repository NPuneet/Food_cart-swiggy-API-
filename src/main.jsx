import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import "./index.css";
import Error from "./Components/Error";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Gg from "./Components/Restaurent";
import iAmContext from "./Components/utils/Context";
import { Provider } from "react-redux";
import store from "./Components/utils/Store";
import Cart from "./Components/Cart";


const AppLayout = () => {
  const data = useContext(iAmContext)
  const [mushi, setMushi] = useState();
  useEffect(()=>{

    setMushi(data.name)
  }, [])
  return (
    <>
    <Provider store={store}>
      <iAmContext.Provider value={{ name: mushi , setMushi }}>
        <Header />
        <Outlet />
      <Footer />
      </iAmContext.Provider>
      </Provider>
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
        path: "/cart",
        element: (
          <Suspense fallback={<h1>DEKHO GUYS HUM H LAZY BOYS</h1>}>
            <Cart/>
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
