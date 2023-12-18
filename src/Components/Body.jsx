import RestaurantCard from "./Card";
import { restaurantList } from "./Config";
import React, { useState } from "react";
const Body = () => {
  const [searchText, SetsearchText] = useState();
  const [reslist] = useState(restaurantList);
  const [filterList, SetFilterList] = useState(restaurantList);
  function abc(searchText, reslist) {
    return reslist.filter((restaurant) =>
      restaurant.data.name.toUpperCase().includes(searchText.toUpperCase())
    );
  }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => {
            SetsearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let data = abc(searchText, reslist);
            SetFilterList(data);
            reslist;
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {filterList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
