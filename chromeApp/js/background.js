const images = ["bg-0.jpeg", "bg-1.jpeg", "bg-2.jpeg"];

const chooseImages = images[Math.floor(Math.random() * images.length)];

const imageElement = document.createElement('img');
imageElement.src = `./img/${chooseImages}`

document.body.appendChild(imageElement)