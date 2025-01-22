import React, { Children, useRef, useState } from 'react';
// 한국이름 입력, 영어이름입력 input태그로 받기
// 추가버튼 클릭 시 한글이름(영어이름)으로 하단에 체크박스로 생성
// 체크박스 체크 후 삭제 시 체크박스요소 삭제
// 체크 안하면 삭제 안됨

// const FoodContainer = () => {
//   const [menu, setMenu] = useState("")
//   const [child,setChild] = useState([])
//   const inputRef = useRef([])
//   const checkRef = useRef()
//   const children = []
//   let addMenu = ""
//   let i = 0

//   const onClickAddMenu = () => {
//     if(!inputRef.current[0].value){
//       return;
//     };   
//     addMenu = `${inputRef.current[0].value} (${inputRef.current[1].value})`
//     setMenu(addMenu)
//     setChild(<div><input ref={(ch) => checkRef.current = ch} type='checkbox'/><span>{menu}</span></div>)
//     children[i] = child
//     i++
//   }

//   const onClickDisMenu = () => {
//     if(checkRef.current.checked){
//       setChild()
//     }
//   }

//   return (
//     <div >
//       <div style={{display : "flex"}}>
//         <input ref={(el) => inputRef.current[0] = el} type="text" name="Engname" placeholder='영어이름 입력'/>
//         <input ref={(el) => inputRef.current[1] = el} type="text" name="Korname" placeholder='한글이름 입력'/>
//       </div>
//       <button onClick={onClickAddMenu}>추가</button>
//       <button onClick={onClickDisMenu}>삭제</button>
//       <div>
//         {child}
//       </div>
//     </div>
//   );
// };

// export default FoodContainer;

import React, { useRef, useState } from 'react';

const FoodContainer = () => {
  const [foods, setFoods] = useState([])
  const [checked, setChecked] = useState([])

  const inputRef = useRef([])
  const onClickAddFood = () => {
    setFoods(
      foods.concat({
        kor : inputRef.current[0].value,
        eng : inputRef.current[1].value
      })
    )
    setChecked(checked.concat(false))
  }
  
  const onChangeCheckbox = (i) => {
    checked.splice(i, 1, !checked[i])
    setChecked(checked.concat())
  }
  
  const onClickRemoveFood = () => {
    setFoods(foods.filter((food, i) => !checked[i]))
    setChecked(new Array(foods.length - 1).fill(false)) 
  }
  console.log("foods", foods)
  console.log("checked", checked)


  const foodList = foods.map(({kor, eng}, i) => {
    return (
      <li key={i}>
        <input type="checkbox"
          checked={checked[i]} 
          onChange={() => { onChangeCheckbox(i) }}
        />
        {`${kor} (${eng})`}
      </li>
    )
  })

  return (
    <div>
      <input type="text" placeholder='한국 음식 이름' ref={(el) => { inputRef.current[0] = el}}/>
      <input type="text" placeholder='영어 음식 이름' ref={(el) => { inputRef.current[1] = el}}/>
      <button onClick={onClickAddFood}>추가</button>
      <button onClick={onClickRemoveFood}>삭제</button>
      <div>
        <ul>
          {foodList}
        </ul>
      </div>
    </div>
  );
};

export default FoodContainer;