import logo from "./assets/seiya.jpeg";

// Include LOGO with js
const img : HTMLImageElement = document.createElement('img');
img.src = logo;
document.getElementById('logo-container').appendChild(img);