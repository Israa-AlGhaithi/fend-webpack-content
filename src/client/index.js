import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import img from './assets/rainy.jpg';
const imgContainer = document.getElementById('forImg');
const image = document.createElement('img');
image.src = img;
imgContainer.appendChild(image);
console.log(checkForName);
console.log(handleSubmit);
alert("I EXIST")