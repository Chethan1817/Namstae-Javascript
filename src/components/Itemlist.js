const Itemlist = ({items}) => {
    return (
        <div className="flex flex-col">
            {items.map((item) => (
                <div key={item.card.info.id} className="border-b-2 p-4 m-2 text-left flex justify-between gap-4">
                    <div className="w-3/4">
                        <h3 className="font-bold text-lg">{item.card.info.name}</h3>
                        <span className="font-medium">₹ {item.card.info.price/100}</span>
                        <p className="text-sm text-gray-500 mt-2">{item.card.info.description}</p>
                    </div>
                    <div className="w-1/4">

                        <div className="absolute bg-black rounded text-white p-2 mx-20 my-36">
                            <button >Add +</button>
                            </div>
                        <img 
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                            alt={item.card.info.name}
                            className="w-[200px] h-29 object-cover rounded-lg"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Itemlist;