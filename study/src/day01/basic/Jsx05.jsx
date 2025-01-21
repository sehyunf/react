// age를 상수로 임의로 설정하고,
// 19세 이상 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력한다

import React from 'react';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';

const Jsx05 = () => {
  const age = 20;
  const isAudult = age > 19;
  const isEven = age % 2 === 0;

  const passComponent = <PassComponent />
  const notPassComponent = <NotPassComponent />
  const luckyComponent = <LuckyComponent />
  const unLuckyComponent = <UnLuckyComponent />

  const enter = isAudult ? passComponent : notPassComponent
  const win = isEven ? luckyComponent : unLuckyComponent

  return (
    <div>
      당신의 나이는 {age}이므로
      {enter}
      {win}
    </div>
  );
};

// const Jsx05 = () => {
//   const age = 22;
//   const massage = age % 2===0 ? " 당첨" : "";
//   const isAdult = age >= 19 ? "입장 가능" : "입장 불가"
//   return (
//     <div>
//         {isAdult}
//         {massage}
//     </div>
//   );
// };

export default Jsx05;