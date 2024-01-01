import { useParams } from "react-router-dom";
// import { restaurantList } from "./Config";
import React, { useEffect, useState } from "react";
// import { swiggy_api_URL } from "./Config";

const ListOfRes = ({ showItems}) => {
  const { resid } = useParams();
  console.log(resid);

  return (
    <>
      <div>
        <span
          onClick={() => {
            setMoye(!moye);
          }}
        >
          hey guys channel my welcome
        </span>

        {showItems && <div> channel has welcome friends</div>}
      </div>
      <div>
        <span
          onClick={() => {
            setShow();
          }}
        >
          hey channel welcome to my guys
        </span>
        {showItems && <div>friends has welcome channel</div>}
      </div>
    </>
  );
};
const Gg = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <ListOfRes showItems={false} set={setShow(show)} />
    </div>
  );
};
export default Gg;
