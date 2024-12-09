import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listofres, setlistofres] = useState([]);  

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8478512&lng=77.6835718&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            console.log(json)
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setlistofres(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
            setlistofres([]); 
        }
    };

    const handleTopRated = () => {
        const filter = listofres.filter((res) => res.info.avgRating > 4);
        setlistofres(filter);
    };
    if(listofres.length===0)
    {
        return(<h1>loading...</h1>)
    }

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={handleTopRated}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listofres.map((restaurant) => (
                        <RestaurantCard 
                            key={restaurant.info.id} 
                            resData={restaurant}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;