import { useEffect, useState } from "react";
import RestaurantCard ,{Header} from "./RestaurantCard";
import Shimmerui from "./Shimmerui";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
const Body = () => {
    const [listofres, setlistofres] = useState([]);
    const[filtres,setfiltres]=useState([]);  
    const[search,setsearch]=useState("");
     
    const Headers=Header(RestaurantCard);
    
    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.441711402839864&lng=78.38251557201147&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
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
            <div className="filter flex">
                <div className="p-4 m-4 ">
                    <input type="text" className="border border-solid border-black rounded-lg" 
                    value={search} 
                    onChange={(e)=>{setsearch(e.target.value)}}/>
                    <button 
                        className="px-4 py-2 m-4 bg-green-100 rounded-lg" 
                        onClick={()=>{
                        const filres=listofres.filter((r)=>
                        r.info.name.toLowerCase().includes(search.toLowerCase())
                    );
                    setfiltres(filres);
                    }}>search</button>
                </div>
                <div className="px-4 py-2 flex items-center">
                <button 
                    className="filter-btn px-4 py-2 bg-green-100 rounded-lg " 
                    onClick={()=>{
                        const filter = listofres.filter((res) => res.info.avgRating > 4);
                        console.log(filter)
                        setfiltres(filter)
                    }}>
                    Top Rated Restaurants
                </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {
                    filtres.map((restaurant) => (
                       <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}> 
                            {restaurant.info.aggregatedDiscountInfoV3 ? (
                                <Headers resData={restaurant}/>
                            ) : (
                                <RestaurantCard resData={restaurant}/>
                            )}                        
                            </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;