import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import iAmContext from "./utils/Context";
import { imageUrl } from "./Config";
import { clearCart } from "./utils/appSlice";
const Cart = () => {
  const data = useContext(iAmContext);
  const selector = useSelector((store) => store.cart.items);
  const dispatc = useDispatch();
  const clear = () => {
    dispatc(clearCart());
  };
  // console.log(selector)
  return (
    <>
      <button onClick={clear}>mai sab gayab kar dega</button>
      {selector.map((a) => {
        // console.log(a.name)
        return (
          <>
            <div className="card">
              <h2>{a.name}</h2>
              <img src={ imageUrl + a.cloudinaryImageId} />;
              <h5>{a.costForTwo}</h5>
            </div>
          </>
        );
      })}
      <h3>{data.name}</h3>
    </>
  );
};

export default Cart;
