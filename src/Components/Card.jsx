import React from "react";
import { imageUrl } from "./Config";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={imageUrl + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>Address - {locality}</h4>
      <h5>{costForTwo}</h5>
      <h3>{cuisines?.join(" ")}</h3>
      <h3>Rating - {avgRating}</h3>
    </div>
  );
};
export default RestaurantCard;
