import React, { useState } from 'react';
import { AnimalsContext } from './AnimalsContext';

// context에 저장된 동물 세마리를 버튼으로 출력
// input에 동물을 입력 후 엔터 : 동물 버튼 추가
// 동물 버튼을 클릭하면 해당 버튼을 삭제
// 각 context에 선언된 insert, remove의 action을 사용한다

const Animals = () => {
  const {state, actions} = useState(AnimalsContext)
  const onKeyDownAddAnimal = (e) => {
    if(e.key === 'enter'){
      actions.insert(e.target.value)
    }
  }
  return (
    <div>
       
          <>
            <input type='text' onKeyDown={onKeyDownAddAnimal}/> 
            <div>
            {state.animals.map((animal, i) => (
            <button key={i} onClick={() => {actions.remove(i)}}>{animal}</button>
            ))
            }
            </div>
          </>
    </div>
  );
};

export default Animals;