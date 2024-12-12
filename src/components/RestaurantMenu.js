import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { resid } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
     
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8478512&lng=77.6835718&restaurantId=${resid}`
      );
      const json = await data.json();
      setResInfo(json);

  };

  const {
    name = '',
    cuisines = [],
    costForTwoMessage = '',
    avgRating = '',
    locality = '',
    areaName = ''
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];

  return (
    <div className='text-center '>
      <div className="text-center mb-10">
        <h1 className="font-bold my-5 text-2xl">{name}</h1>
        <h3 className="text-2xl">{cuisines.join(", ")}</h3>
        <h3 className="text-l">{locality}, {areaName}</h3>
        <div className="flex justify-center text-l">
          <h3>⭐ {avgRating}</h3>
          <h3>{costForTwoMessage}</h3>
        </div>
      </div>
      {
        categories.map((category) => (
          <RestaurantCategory data={category?.card.card} />
        ))
      }
    </div>
  );
};

export default RestaurantMenu;