import React, { useState } from 'react';

const ToDoList = () => {
     //input을 컨트롤 하기 위해서 제일 먼저 useState() 사용
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currentAraay => [toDo, ...currentAraay])
    //...currentAraay는 기존에 있는 배열을 복사해온다는 의미
    //currentArray를 받아오고 새로운 array를 리턴
    setToDo("");
    
    //state를 직접적으로 수정할 수 없음
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      {/* jsx에서 자바스크립트를 넣고싶다면 무조건 중괄호 사용 */}
      <form onSubmit={onSubmit}>  {/* //form은 submit event를 가지고 있는데 이를 막아줌 */}
        <input 
          onChange={onChange}
          value={toDo}
          type="text" 
          placeholder='write you to do...'
        />
          <button>Add To Do</button> 
      </form>
      <hr />
      <ul>
        {toDos.map((item, index)=> (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
   
  );
};

export default ToDoList;