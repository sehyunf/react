import React, { useRef, useState } from 'react';

// 체크박스 버튼을 누르면 화면에 누른 값의 문자열이 출력된다.
// 여러개를 누르면 누른 순서대로 문자열이 이어진다.
// front-end back-end
// 체크박스의 버튼이 해제되면 화면에 누른 값이 사라지도록 구현하기
const CheckMessage = (e) => {
  const [check, setChecked] = useState([])
  
  const onClickMessage = (e) => {
    if(e.target.checked){
      setChecked(check.concat(e.target.value," "))
    }else{
      setChecked(check.filter((data) => !(data=== e.target.value)))
    }
  }

  return (
    <div>
      <div>
        <span>front-end</span>
        <input onClick={onClickMessage} type="checkbox" value="front-end" />
      </div>
      <div>
        <span>back-end</span>
        <input onClick={onClickMessage} type="checkbox" value="back-end" />
      </div>
      <div>
        <span>ai</span>
        <input onClick={onClickMessage} type="checkbox" value="ai" />
      </div>
      <div>
          {check}
      </div>
    </div>
  );
};

export default CheckMessage;