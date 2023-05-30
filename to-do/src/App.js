import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const handleSubmit = () => {
    setTodoList([...todoList, value]);
    setValue('')
  }

  const handleDelete = (e) => {
    console.log(e)
    const deleteText = e.target.previousSibling.innerText
    setTodoList(todoList.filter((todo) => todo !== deleteText));
  }

  console.log(todoList)
  return (
    <div className="App">
      <h1>오늘의 할일</h1>
      <h2>
        Today is <time>시간</time>
      </h2>
      <article>
        <h2>일정을 입력하세요</h2>
        <div className="todo-input">
          <input
            type="text"
            placeholder="일정을 입력하세요"
            onChange={handleChange}
            value={value}
          />
          <button type="button" onClick={handleSubmit}>
            입력
          </button>
        </div>
        <section>
          <h3>Todo List</h3>
          <ul>
            {todoList.map((item, index) => (
              <li key={`todo-${index}`}>
                <div className="todo-item">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    name="todo-check"
                  />
                  <label for={`checkbox-${index}`}>{item}</label>
                  <button type="button" onClick={handleDelete}>
                    삭제
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}

export default App;
