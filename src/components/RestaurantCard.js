const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;

    return (
        <div className="res-card m-4 p-4 w-[250px] h-[500px] bg-gray-100 rounded-lg hover:bg-gray-300">
            <img 
                className="rounded-lg" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt={name}
            />
            <h3 className="font-bold py-4 text-xl ">{name}</h3>
            <h4 className="mb-2">{cuisines.join(", ")}</h4>
            <h4 className="mb-1">{avgRating} stars</h4>
            <h4 className="mb-1">{costForTwo}</h4>
        </div>
    );
};

export const Header = (RestaurantCard) => {
    return (props) => {
        const { resData } = props;
        return (
            <div className="relative">
                <div className="absolute top-4 left-4 bg-black text-white p-2 rounded-lg z-10">
                    <div className="font-bold">
                        {resData?.info?.aggregatedDiscountInfoV3?.header}
                    </div>
                    <div>
                        {resData?.info?.aggregatedDiscountInfoV3?.subHeader}
                    </div>
                </div>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};
export default RestaurantCard;