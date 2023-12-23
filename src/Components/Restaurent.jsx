import { useParams } from "react-router-dom";
// import { restaurantList } from "./Config";
import React, { useEffect, useState } from "react";
import { swiggy_api_URL } from "./Config";


const ListOfRes = ({ name }) => {
  const { resid } = useParams();
  console.log(resid);

  return (
    <div>
      {/* <h1>{name}</h1> */}
      <h1>asdbasjdjasdasjdams</h1>
    </div>
  );
};
const Gg = () => {
  return (
    <div>
      <ListOfRes />
      {/* <ListOfRes Restaurent={restaurantList[1]} />
    <ListOfRes Restaurent={restaurantList[2]} />
    <ListOfRes Restaurent={restaurantList[3]} />
    <ListOfRes Restaurent={restaurantList[4]} />
    <ListOfRes Restaurent={restaurantList[5]} /> */}
    </div>
  );
};
export default Gg;
