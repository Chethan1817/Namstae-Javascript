import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmerui from "./Shimmerui";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
const Body = () => {
    const [listofres, setlistofres] = useState([]);
    const[filtres,setfiltres]=useState([]);  
    const[search,setsearch]=useState("");

    
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
            setfiltres(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
            setlistofres([]); 
        }
    };


    const online=useOnlinestatus();

    if(online===false){
        return(<div>
            <h1>you are offline please check you internet connection before you try </h1>
        </div>)
    }

    return listofres.length===0 ? <Shimmerui/> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" 
                    value={search} 
                    onChange={(e)=>{setsearch(e.target.value)}}/>
                    <button onClick={()=>{
                        const filres=listofres.filter((r)=>
                            r.info.name.toLowerCase().includes(search.toLowerCase())
                    );
                    setfiltres(filres);
                    }}>search</button>
                </div>
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filter = listofres.filter((res) => res.info.avgRating > 4);
                        console.log(filter)
                        setfiltres(filter)
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filtres.map((restaurant) => (
                       <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}> 
                        <RestaurantCard resData={restaurant}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;