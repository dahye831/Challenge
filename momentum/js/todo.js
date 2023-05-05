//todo 입력하기
const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector('.todo__list')

const TODO_KEY = 'todo'
let todoArray = [];

const todoPaint = (todoObj) => {
  //li 생성
  const todoItem = document.createElement("li");
  todoItem.id = todoObj.id;
  todoItem.innerText = todoObj.item;
  todoList.appendChild(todoItem);

  //delete button 생성
  const todoButton = document.createElement("button");
  todoButton.innerText = "delete";
  todoButton.setAttribute("type", "button");
  todoItem.appendChild(todoButton);

  todoButton.addEventListener("click", todoDelete);
};

const todoDelete = (event) => {
  const target = event.target.parentNode;

  target.remove();//dom 제거
  todoArray = todoArray.filter((item) => item.id !== parseInt(target.id));
  todoSave()//localStorage 수정
};

const todoSave = () => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
};

const onSubmitTodo = (e) => {
  e.preventDefault();

  const todoObj = {
    id: Date.now(),
    item: todoInput.value,
  };
  todoArray.push(todoObj);
  todoPaint(todoObj);
  todoSave();

  todoInput.value = "";
}

todoForm.addEventListener("submit", onSubmitTodo);

const savedTodo = localStorage.getItem(TODO_KEY)
// localStorage 데이터는 문자열임

if (savedTodo !== null) {
  console.log(savedTodo)
  const todoData = JSON.parse(savedTodo)
  todoArray = todoData; //저장한 데이터에 새로운 데이터를 추가하기 위해
  todoData.map(item => todoPaint(item))
}