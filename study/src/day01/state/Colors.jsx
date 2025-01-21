import React, { useState } from 'react';
// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색을 입력하면 글자의 색깔을 없앤다.

const Colors = () => {

  const [result, setResult] = useState("")
  const [color, setColor] = useState()
  const onClickToRed = () => {
    setColor({color : "red"})
  }
  const onClickToBlue = () => {
    setColor({color : "blue"})
  }
  const onChangeEvent = (e) => {
    setResult(e.target.value)
    // result = e.target.value;
    if(e.target.value === "핑크색"){
      setColor({color : "white"})
    }else {
      setColor({color : "black"})
    }
  }
  return(
      <div>
        <p style={color}>{result}</p>
        <input onChange={onChangeEvent} type="text" placeholder='핑크색 입력'/>
        <button onClick={onClickToRed}>빨간색</button>
        <button onClick={onClickToBlue}>파란색</button>
        {/* <button>파란색</button> */}
      </div>
    )
  
};

export default Colors;