// 버튼을 눌렀을 때 
// 컨테이너에서 함수와 이름을 받아서 콘솔에 출력하기
// 1) 함수는 어떤 값을 받으면 콘솔에 출력해주는 함수
// 2) 이름은 본인 이름의 변수
import React from 'react';

const Component04 = (props) => {
  return (
    <div>
      {console.log(props.name)}
    </div>
  );
};

export default Component04;