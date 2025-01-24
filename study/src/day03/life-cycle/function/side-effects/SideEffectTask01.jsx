import React, { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/todos
// todos에서 false인 todos만 
// 내림차순으로 변경 후 10개만 가져와서 화면에 타이틀을 출력한다.

const SideEffectTask01 = () => {
  const [todo, setTodos] = useState([])

  useEffect(() => {
    const getDatas = async() => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      if(!response.ok){
        throw new Error("데이터를 불러올 수 없습니다.")
      }
      const datas = await response.json()
      const falseTodo = await datas.filter((data)=> !data.completed).sort().reverse().map((datas)=> {return datas.title}).sort()
      // console.log(sortTodo);
      
      setTodos(falseTodo)
    }
    getDatas().catch(console.error)
  }, [])

  const todoList = todo.map((data, i) => {
    if(i < 10){
      return <li key={i}>{data}</li>
    }
  })

  return (
    <div>
      <ul>
        {todoList}
      </ul>
    </div>
  );
};

export default SideEffectTask01;