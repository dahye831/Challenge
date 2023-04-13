const todoForm = document.querySelector('#todo')
const todoInput = document.querySelector('.todo_input');
const todoList = document.querySelector('.todo_list');

const TODO_KEY = 'todo'

let todos;;

function todoSave() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function todoDelete(event) {
  const li = event.target.parentNode;
  li.remove()
}

function todoPaint(todoText) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todoText;
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
  todos.push(todoText);
  todoPaint(todoText);
  todoSave()
}

todoForm.addEventListener('submit', todoEvent)

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  const parseTodos = JSON.parse(savedTodos);
  todos = parseTodos;
  parseTodos.map(todoPaint)
}