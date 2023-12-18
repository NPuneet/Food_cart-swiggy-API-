import { useParams } from "react-router-dom";
import { restaurantList } from "./Config";
import React, { useState } from "react";

const ListOfRes = ({name}) => {

    const {resid} = useParams();
    console.log(resid)

  return (
    <div>
      <h1>{name}</h1>
      <h1>asdbasjdjasdasjdams</h1>
    </div>
  );
};
const Gg = ()=>{
return (
  <div>
    <ListOfRes {...restaurantList[0].data} />
    {/* <ListOfRes Restaurent={restaurantList[1]} />
    <ListOfRes Restaurent={restaurantList[2]} />
    <ListOfRes Restaurent={restaurantList[3]} />
    <ListOfRes Restaurent={restaurantList[4]} />
    <ListOfRes Restaurent={restaurantList[5]} /> */}
  </div>
);
}
export default Gg;
