import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {increase} from '../../modules/font';

const FontButtonComponent = () => {
  const fontSize = useSelector((state) => state.font.fontSize)
    
  const dispatch = useDispatch()
  return (
    <div>
      <h1 style={{fontSize : fontSize}}>재밌는 리덕스 수업</h1>
      <button onClick={() => {dispatch(increase())}}>3rem버튼</button>
    </div>
  );
};

export default FontButtonComponent;