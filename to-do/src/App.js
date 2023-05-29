import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

const data = ["abcd", "Dyfed", "안녕하세요"];

function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    console.log(e);
    const inputValue = e.target.value;
    console.log(inputValue);
    setValue(inputValue);
  };
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <h2>일정을 입력하세요</h2>
        <div className="todo-input">
          <input
            type="text"
            placeholder="일정을 입력하세요"
            // onClick={handleClick}
            onChange={handleChange}
            value={value}
          />
        </div>
      </div>
      <ul>
        {/* {data.map((item, index) => (
          <li key={`todo-${index}`}>
            <TodoItem id={`checkbox-${index}`} text={item} />
          </li>
        ))} */}
        <TodoItem id={"checkbox1"} text={value} />
      </ul>
    </div>
  );
}

export default App;
