import React from 'react';

const Food = ({food}) => {
  const {name, price, origin} = food;
  
  return (
    <div>
      <li>
        <p>이름 : {name}</p>
        <p>가격 : {price}원</p>
        {/* <p>원산지 : {origin[0]}, {origin[1]}</p> */}
        <p>
          원산지 : {origin.map((coa, i, origin) => i === origin.length - 1 ? coa : coa + ",")}
        </p>
          
      </li>
    </div>
  );
};

export default Food;