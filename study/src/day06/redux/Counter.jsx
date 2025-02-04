import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../modules/count';
import useInput from '../hooks/useInput';

const Counter = () => {
  const number = useSelector((state) => state.number);
  // 액션을 발생시키는 훅함수
  const dispatch = useDispatch()
  const [value, onChangeValue] = useInput("")
  
  return (
    <div>
      <h1>{number}</h1>
      <input value={value} onChange={onChangeValue} />
      <div>
        <button onClick={() => { dispatch(decrease(value)) }}>감소</button>
        <button onClick={() => { dispatch(increase(value)) }}>증가</button>
      </div>
    </div>
  );
};

export default Counter;