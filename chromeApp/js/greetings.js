const loginForm = document.querySelector("#form");
const loginInput = document.querySelector("#form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_NAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_NAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(name) {
  greeting.classList.remove(HIDDEN_NAME);
  greeting.innerText = `HELLO ${name}`;
}

const localStorageUserName = localStorage.getItem(USERNAME_KEY);

if (localStorageUserName === null) {
  //show input
  loginForm.classList.remove(HIDDEN_NAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show hello + username
  paintGreetings(localStorageUserName);
}
