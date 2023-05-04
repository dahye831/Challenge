//todo 입력하기
const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector('.todo__list')

let todoArray = [];

const todoPaint = (key, value) => {
  //li 생성
  const todoItem = document.createElement("li");
  todoItem.id = key;
  todoItem.innerText = value;
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
  const targetId = target.getAttribute("id");

  target.remove();
  localStorage.removeItem(targetId);
};

const todoSave = (key, value) => {
  localStorage.setItem(key, value);

  const todoObj = {
    id: key,
    item: value,
  };
  todoArray.push(todoObj);
};

const onSubmitTodo = (e) => {
  e.preventDefault();

  const TODO_KEY = Date.now();
  const newTodo = todoInput.value;
  todoInput.value = '';
  
  todoSave(TODO_KEY, newTodo);
  todoPaint(TODO_KEY, newTodo);
}

todoForm.addEventListener("submit", onSubmitTodo);



if (localStorage.getItem !== null) {
  for (let i = 0; localStorage.length > i; i++) {
    const localStorageId = localStorage.key(i);
    const localStorageValue = localStorage.getItem(localStorageId);

    todoPaint(localStorageId, localStorageValue);
  }
}