import React from 'react'
import Itemlist from "./Itemlist"

const RestaurantCategory = ({data}) => {
  return (
    <div>
    <div className="bg-gray-50 mx-auto  my-4 w-6/12 cursor-pointer p-4  shadow-lg">
        <div className="flex justify-between">
            <span className='font-bold text-l'>{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        <Itemlist items={data.itemCards}/>
    </div>
       
    </div>
  )
}

export default RestaurantCategory