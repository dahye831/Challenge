const todoForm = document.querySelector('#todo')
const todoInput = document.querySelector('.todo_input');
const todoList = document.querySelector('.todo_list');

const TODO_KEY = 'todo'

let todos = [];

function todoSave() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function todoDelete(event) {
  const li = event.target.parentNode;
  console.log(li.id)
  li.remove();
  todos = todos.filter((item) => item.id !== parseInt(li.id));//filter된 todos를 다시 todos에 할당
  todoSave()
}

function todoPaint(todoObj) {
  const li = document.createElement("li");
  li.id = todoObj.id;
  const span = document.createElement("span");
  span.innerText = todoObj.text;
  const button = document.createElement("button");
  button.innerText = "🫥";
  button.addEventListener('click',todoDelete)

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function todoEvent(event) {
  event.preventDefault();
  const todoText = todoInput.value;
  todoInput.value = '';
  const todoObj = {
    "text": todoText,
    "id" : Date.now()
  }
  todos.push(todoObj);
  todoPaint(todoObj);
  todoSave()
}

todoForm.addEventListener('submit', todoEvent)

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  const parseTodos = JSON.parse(savedTodos);
  todos = parseTodos;
  parseTodos.map(todoPaint)
}