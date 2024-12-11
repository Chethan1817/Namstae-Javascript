import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';
const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const{resid}=useParams();

  console.log(resid)
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8478512&lng=77.6835718&restaurantId=${resid}`);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    locality,
    areaName
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const menuItems = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card?.itemCards || [];

  return (
    <div >
      <div >
        <h1 >{name}</h1>
        <h3 >{cuisines?.join(", ")}</h3>
        <h3 >{locality}, {areaName}</h3>
        <div >
          <h3 >⭐ {avgRating}</h3>
          <h3 >{costForTwoMessage}</h3>
        </div>
      </div>

      <div >
        <h2 >Menu</h2>
        <div >
          {menuItems.map((item) => (
            <div key={item?.card?.info?.id} >
              <div >
                <div >
                  <h3 >{item?.card?.info?.name}</h3>
                  <p >₹{item?.card?.info?.price / 100}</p>
                  <p >{item?.card?.info?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;