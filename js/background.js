const images = ["0.jpg", "1.jpg", "2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg",
"15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg",];
const body = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
//document.body.appendChild(bgImage);
body.style.backgroundImage = `url('img/${chosenImage}')`;