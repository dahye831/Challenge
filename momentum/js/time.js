
const clock = document.querySelector('.time__clock');

const clockFunc = () => {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const showHour = hour.toString().padStart(2, '0');
  const showMinute = minute.toString().padStart(2, "0");
  const showSecond = second.toString().padStart(2, "0");

  clock.innerHTML = `${showHour} : ${showMinute} : ${showSecond}`
};
setInterval(clockFunc, 1000)