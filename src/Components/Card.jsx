import React, { useContext } from "react";
import { imageUrl } from "./Config";
import iAmContext from "./utils/Context";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/appSlice";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  costForTwo,
  avgRating,
}) => {
 const  dispatch = useDispatch()
  const addResToCart = () => {
    dispatch(addItem({name, cloudinaryImageId , costForTwo}));
  };
  const data = useContext(iAmContext);
  return (
    <div className="card">
      <label className="cart" onClick={()=>addResToCart()}>
        + to cart
      </label>
      <img src={imageUrl + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>Address - {locality}</h4>
      <h5>{costForTwo}</h5>
      <h3>{cuisines?.join(" ")}</h3>
      <h3>Rating - {avgRating}</h3>
      <h3>{data.name}</h3>
    </div>
  );
};

export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <p className="paid">pro mo ted</p>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
