const todoForm = document.querySelector('.todo_form')
const todoInput = document.querySelector('.todo_input');
const todoList = document.querySelector('.todo_list');

function todoPaint(todoText) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.innerText = todoText;
  todoList.appendChild(li)
}

function todoEvent(event) {
  event.preventDefault();
  const todoText = todoInput.value;
  todoInput.value = '';
  todoPaint(todoText)
}

todoForm.addEventListener('submit', todoEvent)