const wrap = document.querySelector(".wrap");

const bgArray = ["bg-01", "bg-02", "bg-03", "bg-04", "bg-05", "bg-06", "bg-07"];

// 랜덤선택
const index = Math.floor(Math.random() * bgArray.length)
const selected = bgArray[index];

wrap.style.backgroundImage = `url(./img/${selected}.jpg)`;
