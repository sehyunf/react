import React from 'react';
import Food from './Food';

const FoodContainer = () => {

  const foodList = [
    {
      name : "돈까스",
      price : 15000,
      origin : ["국내산", "호주산"]
    },
    {
      name : "떡볶이",
      price : 5000,
      origin : ["우리집", "앞집"]
    },
    {
      name : "초밥",
      price : 15000,
      origin : ["국내산", "미국산"]
    },
    {
      name : "치킨",
      price : 30000,
      origin : ["국내산", "일본산"]
    },
  ]

const foods = foodList.map((food, i) => <Food key={i}  food={food} />)

  return (
    <div>
      <ul> 
        {foods}
      </ul>
    </div>
  );
};

export default FoodContainer;