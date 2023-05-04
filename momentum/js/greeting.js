const form = document.querySelector('#greeting__form');
const input = document.querySelector('.greeting__input');
const nameEle = document.querySelector('.greeting__name');

const HIDDEN_NAME = 'hidden';
const ITEM_KEY = "userName";

const onSubmitUserName = (e) => {
  e.preventDefault();

  const value = input.value;
  localStorage.setItem(ITEM_KEY, value);
  showName(value);
}

const localStorageUserName = localStorage.getItem(ITEM_KEY);
const showName = (name) => {
  nameEle.innerHTML = `HELLO ${name}`;
  nameEle.classList.remove(HIDDEN_NAME);
  form.classList.add(HIDDEN_NAME);
}

if (localStorageUserName !== null) {
  showName(localStorageUserName);
} else {
  nameEle.classList.remove(HIDDEN_NAME);
  form.addEventListener("submit", onSubmitUserName);
}