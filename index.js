let randomImage1 = Math.floor(Math.random() * 6) + 1;
let pickRandomImage1 = "dice" + randomImage1 + ".png";
let randomImageSource1 = "images/" + pickRandomImage1;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

let randomImage2 = Math.floor(Math.random() * 6) + 1;
let pickRandomImage2 = "dice" + randomImage2 + ".png";
let randomImageSource2 = "images/" + pickRandomImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomImage1 > randomImage2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomImage2 > randomImage1) {
  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
