import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';

const FontInputComponent = () => {
  const [value, onChangeValue] = useInput("")
  console.log(value);
  
  return (
    <div>
      <h1 style={{fontSize : value}}>맛있는 점심 식사</h1>
      <input value={value} onChange={onChangeValue}/>
    </div>
  );
};

export default FontInputComponent;